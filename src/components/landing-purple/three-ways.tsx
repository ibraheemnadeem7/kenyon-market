import { Gift, Search, Tag } from "lucide-react";

const ways = [
  {
    lead: "sell what you",
    word: "outgrew",
    Icon: Tag,
    note: "Furniture, electronics, decor, clothes",
    rows: [["Desk chair", "$30"], ["Area rug", "$18"], ["Speaker", "$25"]],
  },
  {
    lead: "give away what you",
    word: "won't pack",
    Icon: Gift,
    note: "Unsold items turn free automatically",
    rows: [["Rice cooker", "Free"], ["Hangers x20", "Free"], ["Shower caddy", "Free"]],
  },
  {
    lead: "grab what you",
    word: "need",
    Icon: Search,
    note: "Save a search, get an alert in the app",
    rows: [["Mini fridge", "$28"], ["Lamp", "$10"], ["Microwave", "$20"]],
  },
];

export function ThreeWays() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-24 sm:pb-32">
      <div className="grid gap-6 md:grid-cols-3">
        {ways.map(({ lead, word, Icon, note, rows }) => (
          <div key={word}>
            <h3 className="font-display text-[22px] text-ink">
              {lead} <span className="font-semibold">{word}</span>
            </h3>
            <div className="mt-4 rounded-[28px] bg-lilac p-5">
              <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(40,20,80,0.06)]">
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-full bg-lilac text-plum">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-xs text-ink-muted">{note}</span>
                </div>
                <div className="mt-4 space-y-2">
                  {rows.map(([name, price]) => (
                    <div key={name} className="flex items-center justify-between rounded-xl bg-mist px-3 py-2.5 text-sm">
                      <span className="text-ink">{name}</span>
                      <span className={price === "Free" ? "font-medium text-plum" : "font-medium text-ink"}>
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
