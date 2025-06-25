import {JSX} from "react";

export interface Technology {
    name: string;
    getElement: () => JSX.Element;
}

export const TYPESCRIPT: Technology = {
    name: "TypeScript",
    getElement: () => <span className={"fw-bold"} style={{color: "#1286c5"}}>TypeScript</span>,
}