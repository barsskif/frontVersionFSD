import { TextareaHTMLAttributes } from "react";

interface AdditionalProps {
    inputquestion: string;
    setinputquestion: React.Dispatch<React.SetStateAction<string>>;
    sendFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }
  
export type InputQuestionsProps = TextareaHTMLAttributes<HTMLTextAreaElement> & AdditionalProps;