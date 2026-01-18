import { Logo } from "@/sections/Header/components/Logo";

export const Header = () => {
  return (
    <header className="box-border caret-transparent w-full pt-4 pb-8">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl md:px-8">
        <Logo />
      </div>
    </header>
  );
};
