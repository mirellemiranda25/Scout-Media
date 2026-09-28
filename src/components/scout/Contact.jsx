import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/scout/Reveal";

const PHONES = ["+91 76660 72719", "+91 86523 73326", "+91 91371 92511"];
const EMAIL = "contact@scoutmedia.co.in";

// Paste the Web App URL you get from deploying the Apps Script in
// google-sheets-setup/Code.gs (see README) — that script appends every
// submission as a new row (Name, Email, Query, Timestamp) in your sheet.
const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycby0zOajv3BaBcd6JsEpsFkT2FCXS2uVk04IddhY0akbg2nH0YN3UxHmPVovIDWIKBw/exec";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData();
    data.append("name", form.name.value);
    data.append("email", form.email.value);
    data.append("query", form.query.value);

    setStatus("sending");
    try {
      // Apps Script web apps don't return readable CORS headers, so the
      // request is sent "no-cors" — the row still lands in the sheet even
      // though the browser can't read the response back.
      await fetch(SHEET_ENDPOINT, { method: "POST", mode: "no-cors", body: data });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            <span className="h-px w-6 bg-neutral-400 dark:bg-neutral-600" />
            CONTACT US
          </div>
          <h2 className="font-display max-w-md text-4xl font-bold leading-[1.05] text-black dark:text-white md:text-5xl">
            Let's Create Something <span className="font-serif italic">People Remember</span>.
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
            Tell us where your brand wants to go. We'll bring the creators,
            the celebrities, and the craft to get you there.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                <Mail size={14} /> EMAIL
              </div>
              <a href={`mailto:${EMAIL}`} className="mt-2 block font-display text-2xl font-bold text-black dark:text-white">
                {EMAIL}
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                <Phone size={14} /> PHONE
              </div>
              <div className="mt-2 space-y-1">
                {PHONES.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-lg font-medium text-black dark:text-white">
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 p-8 dark:border-white/10">
            <p className="text-xs tracking-[0.2em] text-neutral-500 dark:text-neutral-400">SEND AN ENQUIRY</p>

            <label className="mt-6 block text-xs tracking-[0.15em] text-neutral-500 dark:text-neutral-400">NAME</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-black/15 bg-transparent px-4 py-3 text-sm text-black outline-none focus:border-black/40 dark:border-white/20 dark:text-white dark:focus:border-white/50"
            />

            <label className="mt-5 block text-xs tracking-[0.15em] text-neutral-500 dark:text-neutral-400">EMAIL</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@brand.com"
              className="mt-2 w-full rounded-lg border border-black/15 bg-transparent px-4 py-3 text-sm text-black outline-none focus:border-black/40 dark:border-white/20 dark:text-white dark:focus:border-white/50"
            />

            <label className="mt-5 block text-xs tracking-[0.15em] text-neutral-500 dark:text-neutral-400">YOUR QUERY</label>
            <textarea
              name="query"
              rows={4}
              required
              placeholder="Tell us briefly what you're looking for"
              className="mt-2 w-full rounded-lg border border-black/15 bg-transparent px-4 py-3 text-sm text-black outline-none focus:border-black/40 dark:border-white/20 dark:text-white dark:focus:border-white/50"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              {status === "sent" ? (
                <>
                  Sent <Check size={16} />
                </>
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message <ArrowUpRight size={16} />
                </>
              )}
            </motion.button>

            {status === "sent" && (
              <p className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
                Thanks — we'll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-center text-xs text-red-500">
                Something went wrong — try emailing us directly instead.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
