'use client';

import { useState } from 'react';
import { site, whatsappLink } from '@/lib/site';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const send = () => {
    const text =
      message.trim() ||
      'Hi John, I found your website mjtechlabs.me and would like to chat.';
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
    setOpen(false);
    setMessage('');
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-80 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-2xl">
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 font-display font-bold text-white">
              JM
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{site.owner}</p>
              <p className="text-xs text-emerald-100">
                Typically replies within minutes
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div className="space-y-3 p-4">
            <div className="max-w-[85%] rounded-xl rounded-tl-none bg-ink-700 px-3 py-2 text-sm text-slate-200">
              Hi there 👋 I&apos;m John. How can I help with your project
              today?
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              placeholder="Type your message…"
              className="w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-gold-400"
            />
            <button
              onClick={send}
              className="w-full rounded-xl bg-[#25D366] py-2.5 text-sm font-semibold text-ink-950 transition hover:brightness-110"
            >
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition hover:scale-110"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4.6 28l6.3-1.6c1.6.8 3.3 1.3 5.1 1.3 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.8c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-3.7 1 1-3.6-.2-.3c-1.3-1.6-2-3.6-2-5.6 0-5.4 4.4-9.9 9.8-9.9s9.8 4.4 9.8 9.9-4.4 9.9-9.8 9.9zm5.4-7.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
        </svg>
      </button>
    </>
  );
}
