import { FormEvent, useState } from "react";
import { EMAIL, socialLinks } from "@/data/profile";

const channels = [
  { name: "Email", value: EMAIL, href: `mailto:${EMAIL}`, note: "Replies within two days" },
  { name: "GitHub", value: "imramkrishna", href: socialLinks[0].href, note: "Code and open source" },
  { name: "LinkedIn", value: "ramkrishnaprofile", href: socialLinks[1].href, note: "Work history and messages" },
];

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      setError("Please add your name, a valid email and a message.");
      return;
    }
    setError("");
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="band">
      <div className="wrap">
        <h2 id="contact-title" className="display max-w-[16ch]">Let's build something</h2>
        <ul className="list-none m-0 mt-12 p-0 grid gap-2 md:grid-cols-3">
          {channels.map((c) => (
            <li key={c.name}>
              <a href={c.href} className="block h-full rounded-lg bg-[var(--surface)] p-6 no-underline text-[var(--text)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--inverse-text)] group"
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span className="label group-hover:!text-[var(--inverse-text)]">{c.name}</span>
                <span className="block mt-6 text-[20px] font-medium break-words">{c.value}</span>
                <span className="block mt-1 text-[14px] text-[var(--text-2)] group-hover:!text-[var(--inverse-text)]">{c.note}</span>
              </a>
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmit} noValidate className="mt-2 rounded-lg bg-[var(--surface)] p-6 grid gap-4 md:grid-cols-2" aria-describedby="form-status">
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" autoComplete="name" placeholder="Your name" aria-invalid={!!error} />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!error} />
          </div>
          <div className="field md:col-span-2">
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" rows={4} placeholder="What are you building?" aria-invalid={!!error} />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn btn-primary">Send message</button>
            <p id="form-status" role="status" className={`m-0 text-[14px] ${error ? "text-[#b3261e]" : "text-[var(--text-2)]"}`}>
              {error || (sent ? "Opening your email app to send it." : "I reply within two days.")}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
