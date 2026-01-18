import { HeroSection } from "@/sections/HeroSection";
import { ArticlesSection } from "@/sections/ArticlesSection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent basis-[0%] grow">
      <div className="box-border caret-transparent w-full">
        <HeroSection />
        <ArticlesSection />
      </div>
    </main>
  );
};
