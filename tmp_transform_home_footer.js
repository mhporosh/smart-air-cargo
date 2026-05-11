const fs = require("fs");

const path = "frontend/src/pages/Home.jsx";
let src = fs.readFileSync(path, "utf8");
const startMarker = "atob(";
const startIndex = src.indexOf(startMarker);
if (startIndex === -1) {
  throw new Error("base64 payload start not found");
}

const firstQuoteIndex = src.indexOf('"', startIndex);
const lastQuoteIndex = src.indexOf('",', firstQuoteIndex);
if (firstQuoteIndex === -1 || lastQuoteIndex === -1) {
  throw new Error("base64 payload boundaries not found");
}

const originalB64 = src
  .slice(firstQuoteIndex + 1, lastQuoteIndex)
  .replace(/\s+/g, "");
let html = Buffer.from(originalB64, "base64").toString("utf8");
const footerRe = /\n    <!-- FOOTER -->\n    <footer>[\s\S]*?<\/footer>/;
if (!footerRe.test(html)) {
  throw new Error("footer block not found");
}

const newFooter = `
    <!-- FOOTER -->
    <footer>
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <a href="#" class="nav-logo" style="display: inline-flex">
              <img
                id="footer-logo-img"
                src=""
                alt="SACS"
                style="
                  width: 48px;
                  height: 48px;
                  object-fit: contain;
                  border-radius: 50%;
                  background: #fff;
                  padding: 2px;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                "
              />
              <div class="nav-logo-text">
                <div class="brand" style="font-size: 15px; color: #fff">
                  Smart Air Cargo Services
                </div>
                <div class="sub" style="color: rgba(123, 28, 46, 0.8)"></div>
              </div>
            </a>
            <p>
              Bangladesh's best international freight forwarder - connecting
              businesses in Dhaka and Chattogram to 140+ airports worldwide
              through air, sea, land, and customs expertise.
            </p>
            <div class="social-row">
              <a href="#" class="soc" aria-label="LinkedIn">in</a>
              <a href="#" class="soc" aria-label="Facebook">f</a>
              <a
                href="https://wa.me/8801729447129"
                class="soc"
                aria-label="WhatsApp"
                >wa</a
              >
            </div>
          </div>
          <div class="fc">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Air Freight</a></li>
              <li><a href="#services">Freight Forwarding</a></li>
              <li><a href="#services">Sea Freight</a></li>
              <li><a href="#services">Customs Brokerage</a></li>
              <li><a href="#services">Warehousing</a></li>
            </ul>
          </div>
          <div class="fc">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About SACS</a></li>
              <li><a href="#network">Airport Network</a></li>
              <li><a href="#dac-cgp">DAC / CGP Hubs</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="http://smartaircargo.net">Website</a></li>
            </ul>
          </div>
          <div class="fc">
            <h5>Contacts</h5>
            <ul>
              <li>
                <a href="mailto:alikhokon@smartaircargo.net">
                  মোহাম্মদ আলি (MD)</a
                >
              </li>
              <li><a href="tel:+8801729447129">+880 1729-447129</a></li>
              <li>
                <a href="mailto:info@smartaircargo.net">
                  info@smartaircargo.net</a
                >
              </li>
              <li><a href="#">Uttara, Dhaka-1230</a></li>
              <li><a href="http://smartaircargo.net">smartaircargo.net</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Smart Air Cargo Services (SACS). All rights reserved. | Powered by <a href='https://apktechbd.com' target='_blank'>APK TECH BD</a></p>
          <div class="cert-row">
            <span class="cert">IATA</span>
            <span class="cert">ISO Certified</span>
            <span class="cert">AEO</span>
            <span class="cert">Bangladesh Freight</span>
          </div>
        </div>
      </div>
    </footer>`;

html = html.replace(footerRe, newFooter);
const newB64 = Buffer.from(html, "utf8").toString("base64");
const footerStart = html.indexOf("\n    <!-- FOOTER -->\n");
if (footerStart === -1) {
  throw new Error("footer start not found");
}
const splitIndex = footerStart - (footerStart % 3);
const b64SplitIndex = Math.floor(splitIndex / 3) * 4;
const originalTail = originalB64.slice(b64SplitIndex);
const newTail = newB64.slice(b64SplitIndex);
let firstDiffIndex = 0;
while (
  firstDiffIndex < originalTail.length &&
  firstDiffIndex < newTail.length &&
  originalTail[firstDiffIndex] === newTail[firstDiffIndex]
) {
  firstDiffIndex += 1;
}
const originalPatchTail = originalTail.slice(firstDiffIndex);
const newPatchTail = newTail.slice(firstDiffIndex);
fs.writeFileSync("tmp_home_footer_base64.txt", newB64, "utf8");
fs.writeFileSync(
  "tmp_home_footer_tail.json",
  JSON.stringify(
    {
      footerStart,
      splitIndex,
      b64SplitIndex,
      firstDiffIndex,
      originalPatchTail,
      newPatchTail,
    },
    null,
    2,
  ),
  "utf8",
);
console.log("Wrote tmp_home_footer_base64.txt and tmp_home_footer_tail.json");
