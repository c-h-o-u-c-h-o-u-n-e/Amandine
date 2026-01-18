import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { SocialIcons } from "@/sections/Footer/components/SocialIcons";

export const Footer = () => {
  return (
    <footer className="bg-white box-border caret-transparent w-full border-stone-200 border-t border-solid">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 py-8 md:max-w-screen-xl md:px-8">
        <div className="items-center box-border caret-transparent flex flex-col justify-between md:flex-row">
          <FooterLinks />
          <div className="text-stone-300 text-lg box-border caret-transparent leading-[28.8px] mt-4 md:mt-0">
            © 2026 BlogPremium. Tous droits réservés.
          </div>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};
