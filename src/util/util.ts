import { scrollStorageKey } from "../routes/projects/ProjectsIndexPage.tsx"
import { NavigateFunction } from "react-router-dom"
import React from "react"

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

export function redirectWithShiftAndViewTransition(
  navigate: NavigateFunction,
  to: string,
  event: React.MouseEvent
) {
  if (event.ctrlKey) {
    window.open(to, "_blank")
  } else if (event.shiftKey) {
    window.open(to, "_blank", "location=yes")
  } else {
    navigate(to, { viewTransition: true })
  }
}
