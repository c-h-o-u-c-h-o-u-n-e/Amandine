export const AuthButtons = () => {
  return (
    <div className="box-border caret-transparent flex justify-end">
      <div className="items-center box-border caret-transparent flex">
        <a href="/connexion" className="box-border caret-transparent block">
          <button className="text-xl font-medium items-center bg-transparent caret-transparent gap-x-2 inline-flex h-9 justify-center leading-8 gap-y-2 text-center text-nowrap border border-rose-500 px-4 py-2 rounded-[3px] border-solid hover:text-white hover:bg-rose-500/10">
            Connexion
          </button>
        </a>
        <a
          href="/inscription"
          className="box-border caret-transparent block ml-4"
        >
          <button className="text-white text-xl font-medium items-center bg-transparent bg-[linear-gradient(135deg,rgb(235,71,93),rgb(233,99,132))] shadow-[rgba(236,72,153,0.3)_0px_4px_15px_0px,rgba(236,72,153,0.2)_0px_2px_5px_0px] caret-transparent gap-x-2 inline-flex h-9 justify-center leading-8 gap-y-2 text-center text-nowrap px-4 py-2 rounded-[3px] hover:bg-rose-500/90 hover:shadow-[rgba(236,72,153,0.4)_0px_6px_20px_0px,rgba(236,72,153,0.3)_0px_3px_8px_0px]">
            S&#39;abonner
          </button>
        </a>
      </div>
    </div>
  );
};
