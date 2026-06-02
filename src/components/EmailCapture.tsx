import { useState } from "react";

export function EmailCapture({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setSent(true);
      }}
      className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center sm:rounded-full sm:bg-card/60 sm:p-1.5 sm:backdrop-blur sm:border sm:border-border"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@domain.com"
        className="flex-1 rounded-full bg-card/60 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-border sm:border-0 sm:bg-transparent"
      />
      <button
        type="submit"
        className="btn-primary rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap"
      >
        {sent ? "You're on the list ✓" : "Get Early Access"}
      </button>
    </form>
  );
}
