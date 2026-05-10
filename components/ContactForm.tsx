"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: { "Content-Type": "application/json" },
    });

    setSent(true);
  }

  if (sent) {
    return <p className="thank-you">Thanks! I&rsquo;ll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Get in Touch</h2>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
