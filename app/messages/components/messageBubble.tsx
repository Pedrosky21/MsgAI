"use client";

import { animate } from "animejs";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import Highlighter from "react-highlight-words";

interface MessageBubbleProps {
  role: "user" | "ai";
  content: string;
  timestamp: string;
  searchQuery: string;
  animate?: boolean | undefined;
}

export default function MessageBubble({
  role,
  content,
  timestamp,
  searchQuery,
  animate: shouldAnimate = false
}: MessageBubbleProps) {
  const isUser = role === "user";

  const displayDate = dayjs(timestamp).format("DD/MM/YYYY HH:mm");

  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (role == "user" && bubbleRef.current && shouldAnimate) {
      animate(bubbleRef.current, {
        duration: 300,
        opacity: [0, 1],
        translateX: ["20px", "0px"],
        easing: "easeOutQuad"
      });
    }
  }, [shouldAnimate, role]);

  return (
    <>
      <div
        ref={bubbleRef}
        className={`flex w-full p-2 ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`break-words text-start max-w-3/4 rounded-t-xl pt-2 px-4 pb-1 border border-black/40 ${
            isUser ? "bg-background/70 rounded-bl-xl" : "bg-black/70 rounded-br-xl"
          }`}
        >
          <Highlighter
            searchWords={[searchQuery]}
            textToHighlight={content}
            highlightClassName="bg-pink-500"
          />
          <div className="flex justify-end w-full">
            <p className="text-sm text-gray-300 opacity-80">{displayDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
