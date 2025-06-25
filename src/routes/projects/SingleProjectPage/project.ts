import {JSX} from "react";


export interface Project {
    name: string;
    title: string;
    subtitle?: string;
    page: () => JSX.Element
}