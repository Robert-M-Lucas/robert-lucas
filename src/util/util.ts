import { scrollStorageKey } from "../routes/projects/ProjectsIndexPage.tsx"

export const isDev = import.meta.env.DEV

export interface ImpImage {
  src: string
  width: number
  height: number
}

export function clearProjectScrollProgress() {
  sessionStorage.setItem(scrollStorageKey, window.scrollY.toString())
}

export function copyText(text: string) {
  navigator.clipboard.writeText(text).then()
}
