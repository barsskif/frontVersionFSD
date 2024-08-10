import { ReactNode } from "react";

export interface  ICustomHeading<T>{
    level: T;
    children: ReactNode;
    className?: string;
}