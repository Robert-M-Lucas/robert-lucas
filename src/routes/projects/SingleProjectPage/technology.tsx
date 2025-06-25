import {JSX} from "react";
import {Typescript} from "react-bootstrap-icons";
import Rust from "../../../components/Rust.tsx";
import ReactIcon from "../../../components/ReactIcon.tsx";

export interface Technology {
    getElement: () => JSX.Element;
}

export const TYPESCRIPT: Technology = {
    getElement: () => <span className={"fw-bold"} style={{color: "#3178c6"}}><Typescript style={{marginBottom: "4px", marginRight: "4px"}}/>TypeScript</span>,
}

export const REACT: Technology = {
    getElement: () => <span className={"fw-bold"} style={{color: "#61dafb"}}><ReactIcon style={{marginBottom: "4px", marginRight: "4px"}}/>React</span>,
}

export const RUST: Technology = {
    getElement: () => <span className={"fw-bold"} style={{color: "#c56c12"}}><Rust style={{marginBottom: "4px", marginRight: "4px"}}/>Rust</span>,
}