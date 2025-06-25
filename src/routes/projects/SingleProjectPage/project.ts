import {JSX} from "react";
import {Technology} from "./technology.ts";

export interface ProjectImage {
    image: string;
    alt: string;
}

export interface Project {
    name: string;
    alt_names?: string[];
    title: string;
    subtitle?: string;
    ms_since_epoch: number | null; // No date indicates legacy entry
    image?: ProjectImage;
    technologies: Technology[];
    github?: string;
    google_play?: string;
    page: () => JSX.Element
}