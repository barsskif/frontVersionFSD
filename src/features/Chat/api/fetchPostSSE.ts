import type { SetStateAction, Dispatch } from "react";
import { requestMessageFromGPT, updateChatWithStreamData } from "@src/features/Chat/utils/apiSSEUtils";
import { messageType } from "@src/shared/@types/mesages";

type LLMType = "gpt" | "llama";
type SetChatValueType = (value: SetStateAction<[] | messageType[]>) => void;
type SetIsLoadingType = Dispatch<SetStateAction<boolean>>;

export const fetchPostSSE = async (
  message: string,
  setChatValue: SetChatValueType,
  typeLLM: LLMType = "gpt",
  setIsLoading: SetIsLoadingType
): Promise<void> => {
  const uri = typeLLM === "llama" ? '/api/message-by-llama' : '/api/message';

  try {
    setIsLoading(true);
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
        await read();
      } catch (error) {
        console.error('Error reading chunk:', error);
      }
    };

    await read();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};