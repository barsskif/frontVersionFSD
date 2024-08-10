import { requestMessageFromGPT, updateChatWithStreamData } from "@src/features/Chat/utils/apiSSEUtils";
import type { messageType } from "@src/shared/@types/mesages";
import type { SetStateAction } from "react";

type TypePostMessageGPT = { message: string };

export const fetchPostSSE = async (
  message: TypePostMessageGPT['message'],
  setChatValue: (value: SetStateAction<[] | messageType[]>) => void
): Promise<void> => {
  try {
    const reader = await requestMessageFromGPT(message);
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