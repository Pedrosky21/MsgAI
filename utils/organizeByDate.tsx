import { Message } from "@/types/message";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function groupMessagesByDate(messages: Message[]) {
  const groups: Record<string, Message[]> = {};

  messages.forEach((msg) => {
    const cleanDate = msg.message_date.trim();
    const msgDate = dayjs(cleanDate);
    const now = dayjs();

    const label = msgDate.isSame(now, "day")
      ? "Today"
      : msgDate.isSame(now.subtract(1, "day"), "day")
      ? "Yesterday"
      : msgDate.isAfter(now.subtract(7, "day"))
      ? "This Week"
      : msgDate.format("MMMM DD, YYYY");

    if (!groups[label]) groups[label] = [];
    groups[label].push(msg);
  });

  return groups;
}
