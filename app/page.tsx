import Chat from "./components/chat";
import Menu from "./components/menu";

export default function Home() {
  return (
    <>
      <div className="relative font-josefin py-8 h-screen overflow-hidden">
        {/* Background lights */}
        <div className="absolute -top-35 -left-40 w-100 h-100 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-100 -right-50 w-100 h-100 bg-blue-500 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute -top-35 right-110 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -top-35 left-115 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 flex pr-8 h-full">
          <div className="w-1/5 pt-8">
            <Menu></Menu>
          </div>
          <div className="w-4/5">
            <Chat></Chat>
          </div>
        </div>
      </div>
    </>
  );
}
