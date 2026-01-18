export const FooterLinks = () => {
  return (
    <div className="text-stone-300 text-lg box-border caret-transparent flex flex-wrap justify-center leading-[28.8px] md:justify-start">
      <a
        href="/mentions-legales"
        className="box-border caret-transparent block hover:text-rose-400 hover:underline"
      >
        Mentions légales
      </a>
      <a
        href="/conditions"
        className="box-border caret-transparent block ml-6 hover:text-rose-400 hover:underline"
      >
        Conditions générales
      </a>
      <a
        href="/confidentialite"
        className="box-border caret-transparent block ml-6 hover:text-rose-400 hover:underline"
      >
        Politique de confidentialité
      </a>
    </div>
  );
};
