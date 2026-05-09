import rawHomeDomScript from "./homeDom.raw.js?raw";

const DEFAULT_PHONE = "+880 1729-447129";
const DEFAULT_EMAIL = "info@smartaircargo.net";
const DEFAULT_ADDRESS =
  "House-04, Road-11, Sector-01, Uttara, Dhaka-1230, Bangladesh";
const DEFAULT_HERO_EYEBROW = "Bangladesh's Best Freight Forwarder";
const DEFAULT_HERO_TITLE = "MOVING THE WORLD";
const DEFAULT_HERO_TEXT =
  "Smart Air Cargo Services connects Bangladesh to 80+ global airports. Precision logistics from Dhaka (DAC) and Chattogram (CGP) tailored, transparent, trusted.";
const DEFAULT_ABOUT_TEXT =
  "Smart Air Cargo Services (SACS) is a dynamic international freight forwarding company headquartered in Dhaka, Bangladesh. Established to support private freight forwarders and logistics players, we specialize in delivering efficient, customized shipping solutions across air, sea, and land.";

function fieldErrorText(data) {
  if (!data || typeof data !== "object") return "";
  if (data.detail) return data.detail;

  return Object.entries(data)
    .map(([field, messages]) => {
      const text = Array.isArray(messages)
        ? messages.join(", ")
        : String(messages);
      return `${field}: ${text}`;
    })
    .join(" ");
}

function getQuotePayload(button) {
  const form = button.closest(".contact-form");
  const inputs = form.querySelectorAll("input");
  const select = form.querySelector("select");
  const textarea = form.querySelector("textarea");

  const origin = inputs[4]?.value?.trim();
  const destination = inputs[5]?.value?.trim();
  const messageParts = [
    origin ? `Origin: ${origin}` : "",
    destination ? `Destination: ${destination}` : "",
    textarea?.value?.trim() || "",
  ].filter(Boolean);

  return {
    name: inputs[0]?.value?.trim() || "",
    company: inputs[1]?.value?.trim() || "",
    email: inputs[2]?.value?.trim() || "",
    phone: inputs[3]?.value?.trim() || "",
    service_type: select?.value || "",
    message: messageParts.join("\n"),
  };
}

function resetQuoteFields(button) {
  const form = button.closest(".contact-form");
  form.querySelectorAll("input, textarea").forEach((field) => {
    field.value = "";
  });
  const select = form.querySelector("select");
  if (select) select.value = "";
}

function getSiteSetting(settings, key) {
  const value = settings?.[key];
  return typeof value === "string" ? value.trim() : "";
}

function replaceTextEverywhere(root, oldText, newText) {
  if (!root || !oldText || !newText || oldText === newText) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node = walker.nextNode();

  while (node) {
    if (node.nodeValue.includes(oldText)) {
      textNodes.push(node);
    }
    node = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    textNode.nodeValue = textNode.nodeValue.split(oldText).join(newText);
  });
}

function setElementText(selector, text) {
  if (!text) return;

  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function setElementHref(selector, href) {
  if (!href) return;

  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute("href", href);
  });
}

function updateTopbarElements(phone, email, address, website) {
  const topbarInner = document.querySelector(".topbar-inner");
  if (!topbarInner) return;

  if (address) {
    const addressBlock = topbarInner.querySelector("div:first-child");
    if (addressBlock) {
      addressBlock.innerHTML = `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${address}`;
    }
  }

  if (phone) {
    const phoneLink = topbarInner.querySelector('a[href*="tel:"]');
    if (phoneLink) {
      const phoneDigits = phone.replace(/\s+/g, "");
      phoneLink.setAttribute("href", `tel:${phoneDigits}`);
      phoneLink.innerHTML = `<i class="fa-solid fa-phone" aria-hidden="true"></i> ${phone}`;
    }
  }

  if (email) {
    const emailLink = topbarInner.querySelector('a[href*="mailto:"]');
    if (emailLink) {
      emailLink.setAttribute("href", `mailto:${email}`);
      emailLink.innerHTML = `<i class="fa-solid fa-envelope" aria-hidden="true"></i> ${email}`;
    }
  }

  if (website) {
    const websiteLink = topbarInner.querySelector(
      'a[href*="smartaircargo.net"]',
    );
    if (websiteLink) {
      const normalizedWebsite = website.startsWith("http")
        ? website
        : `http://${website}`;
      websiteLink.setAttribute("href", normalizedWebsite);
      websiteLink.innerHTML = `<i class="fa-solid fa-globe" aria-hidden="true"></i> ${website}`;
    }
  }
}

function applySiteSettings(settings) {
  const phone = getSiteSetting(settings, "phone");
  const email = getSiteSetting(settings, "email");
  const address = getSiteSetting(settings, "address");
  const heroEyebrow = getSiteSetting(settings, "hero_eyebrow");
  const heroTitle = getSiteSetting(settings, "hero_title");
  const heroText = getSiteSetting(settings, "hero_text");
  const aboutText = getSiteSetting(settings, "about_text");
  const website = getSiteSetting(settings, "website");

  updateTopbarElements(phone, email, address, website);

  replaceTextEverywhere(document.body, DEFAULT_PHONE, phone);
  replaceTextEverywhere(document.body, DEFAULT_EMAIL, email);
  replaceTextEverywhere(document.body, DEFAULT_ADDRESS, address);
  replaceTextEverywhere(document.body, DEFAULT_HERO_EYEBROW, heroEyebrow);
  replaceTextEverywhere(document.body, DEFAULT_HERO_TEXT, heroText);
  replaceTextEverywhere(document.body, DEFAULT_ABOUT_TEXT, aboutText);

  setElementText(".hero-eyebrow span", heroEyebrow);
  setElementText(".hero-title", heroTitle);
  setElementText(".hero-desc", heroText);
  setElementText(".about-text .sec-desc", aboutText);
}

function makeInitials(name) {
  if (!name) return "";
  return name
    .split(" ")
    .map((p) => p[0] || "")
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function createTeamCard(member, isLeadership = false) {
  const card = document.createElement("div");
  card.className = `team-card ${isLeadership ? "leadership" : ""}`.trim();

  const accent = document.createElement("div");
  accent.className = "card-accent";

  const body = document.createElement("div");
  body.className = "card-body";

  const avatarWrap = document.createElement("div");
  avatarWrap.className = "avatar-wrap";
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = makeInitials(member.name || "");
  avatarWrap.appendChild(avatar);

  const dot = document.createElement("div");
  dot.className = "avatar-dot";
  avatarWrap.appendChild(dot);

  const nameEl = document.createElement("div");
  nameEl.className = "card-name";
  nameEl.textContent = member.name || "";

  const roleEl = document.createElement("div");
  roleEl.className = "card-role";
  roleEl.innerHTML = `<span class="role-dot"></span> ${member.position || ""}`;

  const divider = document.createElement("div");
  divider.className = "card-divider";

  const contact = document.createElement("div");
  contact.className = "card-contact";

  if (member.email) {
    const a = document.createElement("a");
    a.className = "team-contact-link";
    a.href = `mailto:${member.email}`;
    a.innerHTML = `<span class="team-contact-icon"><i class="fa-solid fa-envelope" aria-hidden="true"></i></span> ${member.email}`;
    contact.appendChild(a);
  }

  if (member.phone) {
    const a = document.createElement("a");
    a.className = "team-contact-link";
    a.href = `tel:${member.phone.replace(/\s+/g, "")}`;
    a.innerHTML = `<span class="team-contact-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></span> ${member.phone}`;
    contact.appendChild(a);
  }

  if (member.website) {
    const a = document.createElement("a");
    a.className = "team-contact-link";
    const url = member.website.startsWith("http")
      ? member.website
      : `http://${member.website}`;
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `<span class="team-contact-icon"><i class="fa-solid fa-globe" aria-hidden="true"></i></span> ${member.website}`;
    contact.appendChild(a);
  }

  body.appendChild(avatarWrap);
  body.appendChild(nameEl);
  body.appendChild(roleEl);
  body.appendChild(divider);
  body.appendChild(contact);

  card.appendChild(accent);
  card.appendChild(body);

  return card;
}

function renderTeamFromSettings(settings) {
  const team = Array.isArray(settings?.team) ? settings.team : [];
  if (!team.length) return;

  const leadershipRow = document.querySelector(".leadership-row");
  const teamGrid = document.querySelector(".team-grid");

  const leadershipItems = team.filter((m) =>
    (m.section || "").toLowerCase().includes("lead"),
  );
  const others = team.filter(
    (m) => !(m.section || "").toLowerCase().includes("lead"),
  );

  if (leadershipRow) {
    leadershipRow.innerHTML = "";
    leadershipItems.forEach((m) =>
      leadershipRow.appendChild(createTeamCard(m, true)),
    );
  }

  if (teamGrid) {
    teamGrid.innerHTML = "";
    others.forEach((m) => teamGrid.appendChild(createTeamCard(m, false)));
  }
}

async function fetchAndApplySiteSettings(api) {
  if (!api || typeof api.get !== "function") return;

  try {
    const response = await api.get("/settings/", {
      params: { _: Date.now() },
    });
    const data = response?.data || {};
    applySiteSettings(data);
    try {
      renderTeamFromSettings(data);
    } catch (e) {
      // don't let team rendering break the page
      console.error("Failed to render team from settings", e);
    }
  } catch {
    // Ignore settings fetch failures so the legacy page still loads.
  }
}

async function postQuote(api, payload) {
  if (!api || typeof api.post !== "function") {
    throw new Error("API client is not configured.");
  }

  try {
    const response = await api.post("/quotes/", payload);
    return response.data;
  } catch (error) {
    const data = error?.response?.data ?? null;
    const status = error?.response?.status ?? null;
    const fallback = error?.message || "Quote submit failed.";
    const message =
      fieldErrorText(data) ||
      (status ? `Quote submit failed with HTTP ${status}.` : fallback);
    const wrapped = new Error(message);
    wrapped.data = data;
    wrapped.status = status;
    throw wrapped;
  }
}

function installQuoteSubmit(api) {
  window.submitQuote = async (button) => {
    const originalHtml = button.innerHTML;
    const originalBackground = button.style.background;
    const originalFontSize = button.style.fontSize;

    button.disabled = true;
    button.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
    button.style.background = "#666";

    try {
      await postQuote(api, getQuotePayload(button));
      resetQuoteFields(button);
      button.innerHTML =
        '<i class="fa-solid fa-check" aria-hidden="true"></i> Enquiry Sent - We\\\'ll respond within 2 hours';
      button.style.background = "#1a7a3c";
      button.style.fontSize = "13px";
    } catch (error) {
      const message =
        error.message ||
        "Could not submit the quote right now. Please try again.";
      button.innerHTML = message;
      button.style.background = "#7b1c2e";
      button.style.fontSize = "13px";
    } finally {
      window.setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalHtml;
        button.style.background = originalBackground;
        button.style.fontSize = originalFontSize;
      }, 5000);
    }
  };
}

export function initializeHomeDom({ api }) {
  const script = `
    ${rawHomeDomScript}
    window.closeMobileMenu = typeof closeMobileMenu === "function" ? closeMobileMenu : window.closeMobileMenu;
    window.clearFilters = typeof clearFilters === "function" ? clearFilters : window.clearFilters;
  `;

  const runLegacyScript = new Function(script);
  runLegacyScript();
  installQuoteSubmit(api);
  void fetchAndApplySiteSettings(api);

  return () => {};
}
