export type GradientPack = {
  id: string;
  title: string;
  count: number;
  description: string;
  css: string;
};

export const gradientPacks: GradientPack[] = [
  {
    id: "glass-redline",
    title: "Glassy Redline",
    count: 24,
    description: "Hot red and rose glass gradients for high-converting hero backdrops.",
    css: "radial-gradient(circle at 20% 15%, rgba(255,101,137,.72), transparent 28%), radial-gradient(circle at 82% 12%, rgba(255,183,74,.42), transparent 24%), linear-gradient(135deg, #171717 0%, #2a1015 52%, #ff0432 120%)",
  },
  {
    id: "carbon-prism",
    title: "Carbon Prism",
    count: 18,
    description: "Subtle charcoal depth with a narrow conversion-focused color edge.",
    css: "radial-gradient(circle at 76% 22%, rgba(255,47,95,.55), transparent 22%), linear-gradient(160deg, #111111 0%, #242424 46%, #35151c 100%)",
  },
  {
    id: "ember-grid",
    title: "Ember Grid",
    count: 21,
    description: "Warm launch gradients designed for card grids, footers, and CTA bands.",
    css: "linear-gradient(120deg, rgba(255,101,137,.96), rgba(255,4,50,.82)), radial-gradient(circle at 10% 90%, rgba(255,183,74,.64), transparent 34%), #171717",
  },
  {
    id: "midnight-sale",
    title: "Midnight Sale",
    count: 13,
    description: "Dark premium sales-page gradients with clean text contrast.",
    css: "radial-gradient(circle at 50% -20%, rgba(255,101,137,.62), transparent 34%), linear-gradient(180deg, #171717 0%, #211719 52%, #0e0e0e 100%)",
  },
];
