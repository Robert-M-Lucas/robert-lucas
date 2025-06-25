import {JSX} from "react";
import {Typescript} from "react-bootstrap-icons";
import Rust from "../../../components/Rust.tsx";

export interface Technology {
    getElement: () => JSX.Element;
}

export const CURRENTLY_WORKING_ON: Technology = {
    getElement: () => <span className={"fw-bold"} style={{color: "#000000"}}>Currently Working On</span>,
}

export const TYPESCRIPT: Technology = {
    getElement: () => <span className={"fw-bold"} style={{color: "#1286c5"}}><Typescript style={{marginBottom: "4px", marginRight: "4px"}}/>TypeScript</span>,
}

export const RUST: Technology = {
    getElement: () => <span className={"fw-bold"} style={{color: "#c56c12"}}><Rust style={{marginBottom: "4px", marginRight: "4px"}}/>Rust</span>,
}