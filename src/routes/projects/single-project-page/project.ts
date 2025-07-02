import { JSX } from "react"
import { Technology } from "./technology.ts"
import { ProjectLink } from "./links.tsx"

export interface ProjectImage {
  image: string
  alt: string
}

export const placeholderImage: ProjectImage = {
  image: "https://placehold.co/600x400",
  alt: "Placeholder image",
}

export interface Project {
  currentlyWorkingOn?: boolean
  currentlyWriting?: boolean
  name: string
  altNames?: string[]
  title: string
  shortTitle?: string
  subtitle?: string
  msSinceEpoch: number | null // No date indicates legacy entry
  image?: ProjectImage
  technologies: Technology[]
  links: ProjectLink[]
  page: () => JSX.Element
}

export function isProjectLegacy(project: Project) {
  return project.msSinceEpoch === null
}
