import { Hero } from "@/components/sections/Hero";
import { Witness } from "@/components/sections/Witness";
import { Cosmos } from "@/components/sections/Cosmos";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Witness />
      <Cosmos />
      <CTA />
    </main>
  );
}
