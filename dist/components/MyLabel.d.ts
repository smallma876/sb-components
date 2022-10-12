/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Es es el texto
     */
    label: string;
    /**
     * Este es el tamanio del texto
     */
    size: "normal" | "h1" | "h2" | "h3";
    allCaps: boolean;
    color: "primary" | "secondary" | "tertiary";
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, label, size, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
