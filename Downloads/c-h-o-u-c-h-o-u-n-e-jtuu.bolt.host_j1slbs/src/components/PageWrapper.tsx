import { TopBar } from "@/sections/TopBar";
import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { NotificationContainer } from "@/components/NotificationContainer";

export const PageWrapper = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="bg-white box-border caret-transparent flex flex-col min-h-[1000px]">
        <TopBar />
        <Header />
        <Main />
        <Footer />
        <NotificationContainer />
      </div>
    </div>
  );
};
