import { requestMessageFromGPT, updateChatWithStreamData } from "@src/features/Chat/utils/apiSSEUtils";
import { messageType } from "@src/shared/@types/mesages";

  type TypePostMessageGPT = {
    message: string;
  };
  
  export const fetchPostSSE = async (
    message: TypePostMessageGPT['message'],
    setChatValue: (value: React.SetStateAction<[] | messageType[]>) => void,
  ) => {
    try {
      const reader = await requestMessageFromGPT(message);
      let buffer = '';
  
      const read = () => {
        reader
          .read()
          .then(({ done, value }) => {
            if (done) {
              console.log('Stream complete');
              return;
            }
            buffer = updateChatWithStreamData(value, buffer, setChatValue);
            read(); // Читаем следующий chunk
          })
          .catch((error) => {
            console.error('Error reading chunk:', error);
          });
      };
  
      read();
    } catch (error) {
      console.error('Error:', error);
    }
  };