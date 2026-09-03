"use client";

import { useState } from "react";

const initialValues = { name: "", email: "", message: "" };

export default function ContactForm({ onClose }) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    const email = values.email.trim();
    if (!values.name.trim() || !email || !values.message.trim()) {
      setStatus({ type: "error", message: "Please complete all fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    setIsSending(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send your message.");
      setValues(initialValues);
      setStatus({ type: "success", message: "Thanks — your message has been sent." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to send your message." });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <button className="absolute inset-0 bg-black/70" aria-label="Close contact form" onClick={onClose} />
      <form onSubmit={handleSubmit} className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-gray-950 p-6 shadow-2xl font-jetbrains">
        <div className="mb-6 flex items-start justify-between gap-4"><div><h2 id="contact-title" className="text-2xl font-bold text-white">Let&apos;s talk</h2><p className="mt-1 text-sm text-white/60">Send Sadath a message.</p></div><button type="button" onClick={onClose} className="text-white/60 hover:text-cyan-400" aria-label="Close">×</button></div>
        <div className="space-y-4">
          <label className="block text-sm text-white/80">Name<input required value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-500" /></label>
          <label className="block text-sm text-white/80">Email<input required type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-500" /></label>
          <label className="block text-sm text-white/80">Message<textarea required rows="5" value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} className="mt-1 w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-500" /></label>
        </div>
        {status.message && <p className={`mt-4 text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`} role="status">{status.message}</p>}
        <button disabled={isSending} type="submit" className="mt-6 w-full rounded-full bg-cyan-500 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60">{isSending ? "Sending..." : "Send Message"}</button>
      </form>
    </div>
  );
}
