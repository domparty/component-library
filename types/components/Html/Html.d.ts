import { ReactNode } from "react";
export interface HtmlProps {
    children: ReactNode;
    className?: string;
    comp?: string;
}
declare function Html({ className, children, comp: C }: HtmlProps): JSX.Element;
export default Html;
