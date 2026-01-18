import { HeroCard } from "@/sections/HeroSection/components/HeroCard";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent w-full py-6 md:py-8">
      <div className="relative box-border caret-transparent max-w-none w-full z-10 mx-auto px-4 md:max-w-screen-xl md:px-8">
        <div className="items-center box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-screen-xl gap-y-12 mx-auto md:gap-x-20 md:grid-cols-[1fr_1fr] md:gap-y-20">
          <HeroCard />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};
