'use client';

import { useState } from 'react';
import { site, whatsappLink } from '@/lib/site';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm({ ...form, [key]: e.target.value });

  const sendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hi John, my name is ${form.name || '—'}.`,
      form.subject ? `Subject: ${form.subject}` : '',
      form.message,
      form.email ? `You can also reach me at ${form.email}.` : '',
    ]
      .filter(Boolean)
      .join('\n\n');
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-gold-400';

  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      className="card p-8"
    >
      <input type="hidden" name="_subject" value="New message from mjtechlabs.me" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_template" value="table" />

      <h2 className="font-display text-xl font-bold text-white">
        Send me a message
      </h2>
      <p className="mt-1 text-sm text-slate-400">
        Fill in the form and choose email or WhatsApp.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Your Name
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={update('name')}
            placeholder="Jane Wanjiku"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-slate-300">
          Subject
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={update('subject')}
          className={inputClass}
        >
          <option value="">Select a topic…</option>
          <option>Web Development Project</option>
          <option>Mobile App Project</option>
          <option>Backend / API Work</option>
          <option>E-Commerce Store</option>
          <option>Dropshipping Course ($500)</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell me about your project, timeline and budget…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary flex-1">
          Send via Email
        </button>
        <button
          type="button"
          onClick={sendViaWhatsApp}
          className="flex-1 rounded-full bg-[#25D366] px-7 py-3 font-semibold text-ink-950 transition hover:brightness-110"
        >
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
