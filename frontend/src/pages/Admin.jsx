import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/axios";

export default function Admin() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/quotes/")
      .then((response) => setQuotes(response.data))
      .catch(() =>
        setError("Quote list requires a logged-in Django admin session. Use /admin for the initial phase."),
      );
  }, []);

  return (
    <main className="admin-page">
      <Link to="/" className="text-link">
        Back to site
      </Link>
      <h1>Quote Requests</h1>
      {error && <div className="form-alert error">{error}</div>}
      <div className="quote-table">
        {quotes.map((quote) => (
          <article key={quote.id}>
            <strong>{quote.name}</strong>
            <span>{quote.company || "No company"}</span>
            <span>{quote.service_type}</span>
            <span>{quote.status}</span>
            <a href={`mailto:${quote.email}`}>{quote.email}</a>
          </article>
        ))}
      </div>
    </main>
  );
}
