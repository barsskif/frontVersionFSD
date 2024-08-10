import { requestMessageFromGPT, updateChatWithStreamData } from "@src/features/Chat/utils/apiSSEUtils";
import type { messageType } from "@src/shared/@types/mesages";
import type { SetStateAction } from "react";

type TypePostMessageGPT = { message: string, typeLLM: "gpt" | "llama" };

export const fetchPostSSE = async (
  message: TypePostMessageGPT['message'],
  setChatValue: (value: SetStateAction<[] | messageType[]>) => void,
  typeLLM: TypePostMessageGPT['typeLLM'] = "gpt",
): Promise<void> => {
  const uri = typeLLM === "llama" ? '/api/message-by-llama' : '/api/message' ;
  console.log("🚀 ~ uri:", uri)
  try {

   const reader = await requestMessageFromGPT(message, uri);

    let buffer = '';

    const read = async (): Promise<void> => {
      try {
        const { done, value } = await reader.read();
        if (done) {
          console.log('Stream complete');
          return;
        }
        buffer = updateChatWithStreamData(value, buffer, setChatValue);
        read();
      } catch (error) {
        console.error('Error reading chunk:', error);
      }
    };

    await read();
  } catch (error) {
    console.error('Error:', error);
  }
};