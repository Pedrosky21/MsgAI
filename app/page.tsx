import Chat from "./components/chat";
import Menu from "./components/menu";
import MobileView from "./components/mobileView";

export default function Home() {
  return (
    <>
      <div className="relative font-josefin h-screen w-full overflow-hidden md:py-8">
        {/* Background lights */}
        <div className="absolute -top-35 -left-40 w-100 h-100 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-100 -right-50 w-100 h-100 bg-blue-500 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute -top-35 right-110 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -top-35 left-115 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20"></div>


        {/** Content */}
        
        <MobileView></MobileView>

        {/* Desktop view */}
        <div className="relative py-4 z-10 flex h-14/15 md:h-full w-full md:justify-center md:py-0 md:pr-8">
          <div className="pt-8 w-0 hidden md:w-1/5 md:block">
            <Menu></Menu>
          </div>
          <div className="w-full px-4 md:w-4/5">
            <Chat></Chat>
          </div>
        </div>
      </div>
    </>
  );
}
