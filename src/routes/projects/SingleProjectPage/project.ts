import { JSX } from "react"
import { Technology } from "./technology.ts"
import { ProjectLink } from "./links.tsx"

export interface ProjectImage {
  image: string
  alt: string
}

export const PLACEHOLDER_IMAGE: ProjectImage = {
  image: "https://placehold.co/600x400",
  alt: "Placeholder image",
}

export interface Project {
  currently_working_on?: boolean
  currently_writing?: boolean
  name: string
  alt_names?: string[]
  title: string
  short_title?: string
  subtitle?: string
  ms_since_epoch: number | null // No date indicates legacy entry
  image?: ProjectImage
  technologies: Technology[]
  links: ProjectLink[]
  page: () => JSX.Element
}
