export const HeroCard = () => {
  return (
    <a
      href="/blog/la-salope-a-papa"
      className="box-border caret-transparent block w-full"
    >
      <div className="relative bg-rose-500/30 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent rotate-[-4.000001701562398deg] p-8 rounded-sm">
        <div className="absolute bg-red-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent h-7 -translate-x-3.5 w-7 z-10 rounded-full left-2/4 top-4"></div>
        <div className="relative box-border caret-transparent max-h-[354px] overflow-hidden rounded-sm">
          <img
            src="https://c.animaapp.com/mkj1il3o8LXpDA/assets/onyctlmiwszn7wjkueku.png"
            alt="Les confidences d'Amandine"
            className="box-border caret-transparent max-w-full object-cover w-full"
          />
        </div>
        <div className="items-center box-border caret-transparent flex h-24 justify-center mt-6">
          <h1 className="text-rose-500 text-[32px] font-medium box-border caret-transparent leading-10 text-center md:text-[40px] md:leading-[52px]">
            La salope à papa
          </h1>
        </div>
      </div>
    </a>
  );
};
