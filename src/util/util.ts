import { SCROLL_STORAGE_KEY } from "../routes/projects/ProjectsIndexPage.tsx"

export const IS_DEV = import.meta.env.DEV

export interface ImpImage {
  src: string
  width: number
  height: number
}

export function clearProjectScrollProgress() {
  sessionStorage.setItem(SCROLL_STORAGE_KEY, window.scrollY.toString())
}
