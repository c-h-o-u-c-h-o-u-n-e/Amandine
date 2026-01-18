import { AuthButtons } from "@/sections/TopBar/components/AuthButtons";

export const TopBar = () => {
  return (
    <div className="box-border caret-transparent w-full pt-4">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl md:px-8">
        <AuthButtons />
      </div>
    </div>
  );
};
