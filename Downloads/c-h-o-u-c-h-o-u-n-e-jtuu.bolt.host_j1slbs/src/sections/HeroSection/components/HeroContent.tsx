export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent flex flex-col justify-center rotate-[-4.000001701562398deg]">
      <div className="relative box-border caret-transparent">
        <div className="absolute bg-[linear-gradient(rgba(235,71,93,0.6),rgba(235,71,93,0.2))] box-border caret-transparent w-1 rounded-full left-0 inset-y-0"></div>
        <p className="text-pink-900/80 text-[32px] box-border caret-transparent leading-[52px] pl-8 md:text-[40px]">
          Welcome to my smoky garden of delights.{" "}
        </p>
      </div>
      <div className="text-rose-500/90 text-[32px] items-center box-border caret-transparent flex leading-[41.6px] mt-8 pl-8">
        <span className="box-border caret-transparent block opacity-50">—</span>
        <span className="box-border caret-transparent block ml-3">
          Amandine
        </span>
      </div>
      <div className="box-border caret-transparent mt-8 pl-8">
        <div className="text-rose-500/90 text-[28px] box-border caret-transparent leading-[39.2px] mb-2">
          15 janvier 2024
        </div>
        <div className="text-rose-500/70 text-2xl box-border caret-transparent leading-9">
          Murmures
        </div>
      </div>
    </div>
  );
};
