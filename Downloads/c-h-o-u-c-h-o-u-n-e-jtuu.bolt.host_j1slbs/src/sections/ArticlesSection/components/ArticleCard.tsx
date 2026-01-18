export type ArticleCardProps = {
  description: string;
  authorName: string;
  date: string;
  category?: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  isReversed?: boolean;
};

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className={`box-border caret-transparent items-center gap-x-16 grid grid-cols-1 gap-y-8 mb-16 md:grid-cols-2 md:gap-y-16 ${props.isReversed ? 'md:grid-flow-dense' : ''}`}>
      {/* Polaroid Card */}
      <div className={`box-border caret-transparent ${props.isReversed ? 'md:col-start-2 md:pl-8' : 'md:pr-8'}`}>
        <a href={props.href} className="box-border caret-transparent block">
          <div className={`relative bg-rose-500/30 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent p-6 rounded-sm ${props.isReversed ? 'rotate-[1.999999842926156deg]' : 'rotate-[-1.999999842926156deg]'}`}>
            <div className="absolute bg-red-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent h-5 -translate-x-2.5 w-5 z-10 rounded-full left-2/4 top-3"></div>
            <div className="relative box-border caret-transparent max-h-[284px] overflow-hidden rounded-sm">
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                className="box-border caret-transparent max-w-full object-cover w-full"
              />
            </div>
            <div className="items-center box-border caret-transparent flex h-[72px] justify-center mt-4">
              <h3 className="text-rose-500 text-[28px] font-medium box-border caret-transparent leading-[35px] text-center">
                {props.title}
              </h3>
            </div>
          </div>
        </a>
      </div>

      {/* Content */}
      <div className={`box-border caret-transparent ${props.isReversed ? 'md:col-start-1 md:row-start-1 md:text-right md:pr-8' : 'md:pl-8'}`}>
        <div className={`box-border caret-transparent ${props.isReversed ? 'rotate-[-1.999999842926156deg]' : 'rotate-[1.999999842926156deg]'}`}>
          <div className="box-border caret-transparent relative mb-4">
            <div className={`absolute bg-[linear-gradient(rgba(235,71,93,0.6),rgba(235,71,93,0.2))] box-border caret-transparent w-1 rounded-full inset-y-0 ${props.isReversed ? 'right-0' : 'left-0'}`}></div>
            <p className={`text-pink-900/80 text-[22px] box-border caret-transparent leading-[35.75px] ${props.isReversed ? 'pr-4' : 'pl-4'}`}>
              {props.description}
            </p>
          </div>
          <div className={`text-rose-500/90 text-[22px] items-center box-border caret-transparent flex leading-[35.2px] mb-8 ${props.isReversed ? 'justify-end pr-4' : 'pl-4'}`}>
            <span className="box-border caret-transparent block opacity-50">—</span>
            <span className="box-border caret-transparent block ml-3">
              {props.authorName}
            </span>
          </div>
          <div className={`box-border caret-transparent ${props.isReversed ? 'pr-4' : 'pl-4'}`}>
            <div className="text-rose-500/90 text-[28px] box-border caret-transparent leading-[39.2px] mb-2">
              {props.date}
            </div>
            {props.category && (
              <div className="text-rose-500/70 text-2xl box-border caret-transparent leading-9">
                {props.category}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
