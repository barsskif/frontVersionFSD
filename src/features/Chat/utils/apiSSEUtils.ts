import { messageType } from "@src/shared/@types/mesages";

const API_URl = import.meta.env.VITE_API_URL;

export const requestMessageFromGPT = async (message: string): Promise<ReadableStreamDefaultReader<Uint8Array>> => {
    const { body } = await fetch(`${API_URl}/api/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
  
    if (!body) {
      throw new Error('ReadableStream not supported!');
    }
  
    return body.getReader();
  };


  export const requestMessageFromLlama = async (message: string): Promise<ReadableStreamDefaultReader<Uint8Array>>  => {

    const { body } = await fetch(`${API_URl}/api/message-by-llama`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
  
    if (!body) {
      throw new Error('ReadableStream not supported!');
    }
  
    return body.getReader();
 
  }
  
export const updateChatWithStreamData = (
    chunk: Uint8Array,
    buffer: string,
    setChatValue: (value: React.SetStateAction<[] | messageType[]>) => void,
  ): string => {
    const decoder = new TextDecoder('utf-8');
    buffer += decoder.decode(chunk, { stream: true });
  
    let boundary = buffer.indexOf('\n\n');
    while (boundary !== -1) {
      const completeMessage = buffer.substring(0, boundary);
      buffer = buffer.substring(boundary + 2);
  
      try {
        const jsonChunk = JSON.parse(completeMessage);
        const id = jsonChunk?.id;
  
        if (jsonChunk?.message) {
          setChatValue((prev) => {
            const updatedMessages = new Map(prev.map((item) => [item.id, item]));
            updatedMessages.set(id, {
              user: 'assistant',
              text: updatedMessages.get(id)?.text
                ? updatedMessages.get(id)?.text + jsonChunk.message
                : jsonChunk.message,
              id,
              time: new Date().toISOString(),
            });
            return Array.from(updatedMessages.values());
          });
        }
      } catch (e) {
        console.error('Error parsing JSON:', e);
      }
  
      boundary = buffer.indexOf('\n\n');
    }
  
    return buffer;
  };



