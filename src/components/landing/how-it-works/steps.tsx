import { DropPanels } from "./panels/drop-panels";
import { FreePanels } from "./panels/free-panels";
import { PricePanels } from "./panels/price-panels";
import { SnapPanels } from "./panels/snap-panels";

export const steps = [
  {
    label: "Snap",
    caption:
      "Take a photo in your room. The listing writes itself: title, category, condition and a fair starting price. You check it and publish.",
    Panels: SnapPanels,
  },
  {
    label: "Price",
    caption:
      "Pick how fast the price should fall: hold firm, steady, or fast. Set a floor if you want one.",
    Panels: PricePanels,
  },
  {
    label: "Drop",
    caption:
      "Every night the price steps down on its own. Buyers see the next drop, so nobody waits around to haggle.",
    Panels: DropPanels,
  },
  {
    label: "Free",
    caption:
      "Whatever is left moves to Freebies before move-out. Someone on campus gets it instead of the dumpster.",
    Panels: FreePanels,
  },
];
