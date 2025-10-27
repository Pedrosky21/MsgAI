"use client";
import { useEffect, useState, useRef } from "react";
import MessageGroup from "../messages/components/messageGroup";
import { groupMessagesByDate } from "@/utils/organizeByDate";
import { Message } from "@/types/message";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessageId, setNewMessageId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolledUp(-container.scrollTop > 100);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToBottom = () => {
    scrollContainerRef.current?.scrollTo({
      top: scrollContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const grouped = groupMessagesByDate(messages);

  const sendMessage = () => {
    if (!inputValue) return;

    const messageText = inputValue;
    if (!messageText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      message_text: messageText,
      role: "user",
      message_date: new Date().toISOString(),
    };

    setMessages((prev) => [newMessage, ...prev]);
    setNewMessageId(newMessage.id);
    setTimeout(() => setNewMessageId(null), 800);
    setInputValue("");
  };

  const toggleSearch = () => {
    setSearch(!search);
    if (!search) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <div className="flex justify-end z-20 bg-black/60 rounded-full right-5 mb-2 md:hidden">
          <input
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`rounded-l-full transition-all duration-300  ${
              search
                ? "focus:outline-none pl-4 w-40 opacity-100 pointer-events-auto"
                : "w-0 opacity-0 pointer-events-none"
            }`}
            type="text"
          />
          <button
            onClick={toggleSearch}
            className={`p-2 relative transition-all ${
              search ? "rounded-r-full" : "rounded-xl"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="md:flex justify-center w-full h-full bg-white/15 rounded-xl py-4 md:p-4 font-inter relative">
        <div className="md:flex justify-end absolute hidden z-20 rounded-full right-5 md:right-10 bg-black/50 backdrop-blur-md">
          <input
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`rounded-l-full transition-all duration-300  ${
              search
                ? "focus:outline-none pl-4 w-40 opacity-100 pointer-events-auto"
                : "w-0 opacity-0 pointer-events-none"
            }`}
            type="text"
          />
          <button
            onClick={toggleSearch}
            className={`p-2 relative transition-all ${
              search ? "rounded-r-full" : "rounded-xl"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-between w-full h-full">
          <div
            ref={scrollContainerRef}
            className="flex-1 flex flex-col-reverse overflow-y-auto hide-scrollbar relative"
          >
            {loading ? (
              <div className="flex justify-center items-center w-full h-full">
                <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              Object.entries(grouped).map(([dateLabel, msgs]) => (
                <MessageGroup
                  key={dateLabel}
                  dateLabel={dateLabel}
                  messages={msgs}
                  searchQuery={searchQuery}
                  newMessageId={newMessageId}
                />
              ))
            )}
          </div>
          {isScrolledUp && (
            <button
              onClick={jumpToBottom}
              className={`absolute z-10 bottom-26 right-6 md:bottom-24 md:right-12 bg-background/60 outline-1 outline-black text-white font-semibold p-2 rounded-full ring-pink-500 shadow-pink-500 hover:scale-110 hover:ring-2 hover:shadow-md transition-all duration-300 flex items-center space-x-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          )}
          <div className="flex justify-center mt-4">
            <div className="flex justify-between items-center space-x-2 outline-1 outline-white h-16 md:w-4/6 rounded-xl focus-within:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] transition-shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                className="flex-1 focus:outline-none h-full"
                type="text"
                placeholder="Send a message"
              />
              <button
                onClick={() => sendMessage()}
                className="flex justify-center p-2 mr-2 rounded-full transform transition-transform duration-300 ease-out hover:scale-110 hover:text-pink-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
