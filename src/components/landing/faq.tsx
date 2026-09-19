const faqs = [
  {
    q: "Who can use it?",
    a: "Anyone with a @kenyon.edu account. You sign in with your Kenyon Google account.",
  },
  {
    q: "How do I get paid?",
    a: "In person, with cash or Venmo. The app only tracks the listing and who claimed it.",
  },
  {
    q: "Will it email me?",
    a: "No. Alerts stay inside the app, and you choose which ones you get.",
  },
  {
    q: "What gets logged?",
    a: "Anonymized activity like listings, views, price drops and sales, for a Kenyon research project on how price schedules affect time to sale. Never your messages.",
  },
];

export function Faq() {
  return (
    <div id="faq" className="grid gap-10 md:grid-cols-[1fr_2fr]">
      <h2 className="text-[32px] leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
        Questions.
      </h2>
      <dl className="divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <div key={f.q} className="py-5">
            <dt className="font-medium">{f.q}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {f.a}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
