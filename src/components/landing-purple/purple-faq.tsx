const faqs = [
  ["Who can use it?", "Anyone with a @kenyon.edu account. You sign in with your Kenyon Google account."],
  ["How do I get paid?", "In person, with cash or Venmo. The app tracks the listing and who claimed it."],
  ["Will it email me?", "No. Alerts stay inside the app, and you choose which ones you get."],
  ["What gets logged?", "Anonymized activity like listings, views, price drops and sales, for a Kenyon research project on how price schedules affect time to sale. Never your messages."],
];

export function PurpleFaq() {
  return (
    <section className="mx-auto max-w-[800px] px-4 pb-24 sm:pb-32">
      <h2 className="text-center font-display text-[34px] font-semibold tracking-[-0.03em] text-ink sm:text-[44px]">
        Questions
      </h2>
      <div className="mt-10 space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="group rounded-2xl bg-lilac px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-[16px] font-medium text-ink">
              {q}
              <span className="ml-4 text-xl text-plum transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
