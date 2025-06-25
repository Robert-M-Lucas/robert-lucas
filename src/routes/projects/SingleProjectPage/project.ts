import {JSX} from "react";
import {Technology} from "./technology.ts";


export interface Project {
    name: string;
    title: string;
    subtitle?: string;
    ms_since_epoch: number | null; // No date indicates legacy entry
    description?: string;
    image?: string;
    technologies: Technology[];
    github?: string;
    google_play?: string;
    page: () => JSX.Element
}