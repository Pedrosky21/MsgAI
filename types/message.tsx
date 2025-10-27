export interface Message {
  id: string;
  role: "user" | "ai";
  message_text: string;
  message_date: string;
}
