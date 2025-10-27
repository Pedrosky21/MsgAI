"use client";

import MessageBubble from "./messageBubble";
import { Message } from "@/types/message";

interface MessageGroupProps {
  dateLabel: string;
  messages: Message[];
  searchQuery: string;
  newMessageId: string | null;
}

export default function MessageGroup({
  dateLabel,
  messages,
  searchQuery,
  newMessageId,
}: MessageGroupProps) {
  return (
    <>
      <div className="">
        <div className="flex sticky m-1 top-0 z-10 justify-center">
          <h2 className="text-xl bg-black/50 text-center px-10 py-2 rounded-xl">
            {dateLabel}
          </h2>
        </div>
        <div className="flex flex-col-reverse">
          {messages.map((msg) => {
            return (
              <MessageBubble
                key={msg.message_date}
                role={msg.role}
                content={msg.message_text}
                timestamp={msg.message_date}
                searchQuery={searchQuery}
                animate={msg.id == newMessageId}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
