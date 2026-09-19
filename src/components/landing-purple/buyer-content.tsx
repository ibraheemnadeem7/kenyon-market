import { Bell, Handshake, Hand, Search } from "lucide-react";

import type { PromptConfig } from "./prompt-bar";
import type { Step } from "./simple-steps";

export const buyPrompt: PromptConfig = {
  prefix: "I'm looking for",
  ideas: ["a mini fridge", "a desk lamp", "a rug for my room", "a microwave", "anything free"],
  cta: "Browse deals",
  href: "/login",
};

export const buySteps: Step[] = [
  { Icon: Search, title: "Browse or search", body: "Filter by category, dorm, condition or price. Everything is from Kenyon students." },
  { Icon: Bell, title: "Save and wait", body: "Prices drop every night. Save an item and the app tells you when it gets cheaper." },
  { Icon: Hand, title: "Claim it", body: "One tap holds it for you for 48 hours while you message the seller." },
  { Icon: Handshake, title: "Pick it up", body: "Meet on campus, pay with cash or Venmo, carry it home." },
];

export const buyFaqs: [string, string][] = [
  ["Is it really free?", "Freebies are free. Items that don't sell turn free before move-out, and anyone can claim them."],
  ["How do I pay for the rest?", "In person, with cash or Venmo. The app never handles money."],
  ["What if I wait for a lower price?", "You can, but someone else might claim it first. Save the item to get an alert on each drop."],
  ["Who am I buying from?", "Only people with a @kenyon.edu account. You see their handle, never their email."],
];
