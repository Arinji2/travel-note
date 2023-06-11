import Hero from "./(mainComponents)/hero";
import Features from "./(mainComponents)/features";
import Free from "./(mainComponents)/free";
import CTA from "./(mainComponents)/cta";

export default function Home() {
  return (
    <div className="bg-background w-full h-fit relative">
      <Hero />
      <Features />
      <Free />
      <CTA />
    </div>
  );
}
