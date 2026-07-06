import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

/** Newsletter capture with lightweight inline validation + success state. */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }
    setError("");
    setDone(true);
  }

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-violet-700 p-8 text-white shadow-card sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent-500/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-cyber-500/30 blur-3xl" />
            <div className="relative mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Icon name="mail" className="h-4 w-4" /> Newsletter
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Get career tips & new program drops
              </h2>
              <p className="mt-2 text-brand-100">
                Join 20,000+ professionals. One useful email a week. No spam.
              </p>

              {done ? (
                <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-sm">
                  <Icon name="check" className="h-4 w-4 text-accent-400" />
                  You're subscribed! Check your inbox to confirm.
                </p>
              ) : (
                <form
                  onSubmit={submit}
                  className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                  noValidate
                >
                  <div className="flex-1 text-left">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-200 outline-none backdrop-blur focus:border-white/70"
                    />
                    {error && (
                      <p className="mt-1 text-xs text-accent-400">{error}</p>
                    )}
                  </div>
                  <button type="submit" className="btn btn-accent">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
