import { useState } from "react";
import { Users, Heart } from "lucide-react";
export function RSVP() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <Heart
            className="mx-auto text-[var(--primary)]"
            fill="currentColor"
            size={22}
          />
          <h2 className="font-calligraphy text-4xl md:text-5xl text-[var(--primary)] mb-3">
            RSVP
          </h2>
        </div>
        {sent ? (
          <div className="rounded-xl bg-[var(--primary)] text-white p-8 text-center mt-8">
            <h3 className="font-calligraphy text-3xl">
              Thank you, {name || "dear guest"}!
            </h3>
            <p className="mt-2">Your response has been received.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4 mt-8">
            <label className="block text-sm font-medium">
              Your Name<span className="text-red-500">*</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-2 w-full h-10 rounded-md border border-[var(--border)] bg-white px-3"
              />
            </label>
            <label className="block text-sm font-medium">
              <span className="flex items-center gap-2">
                <Users size={14} />
                Will you be attending?<span className="text-red-500">*</span>
              </span>
              <select
                required
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="mt-2 w-full h-10 rounded-md border border-[var(--border)] bg-white px-3"
              >
                <option value="">Select...</option>
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, I can't make it</option>
              </select>
            </label>
            <label className="block text-sm font-medium">
              Your Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Write your wishes..."
                className="mt-2 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2"
              />
            </label>
            <button
              type="submit"
              className="w-full h-10 rounded-md bg-[var(--primary)] text-white shadow-gold"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
