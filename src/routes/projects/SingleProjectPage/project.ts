import {JSX} from "react";
import {Technology} from "./technology.ts";
import {ProjectLink} from "./links.tsx";

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
    links: ProjectLink[];
    page: () => JSX.Element
}