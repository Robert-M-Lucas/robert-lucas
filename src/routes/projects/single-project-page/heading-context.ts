import { createContext, useContext } from "react"

export type Heading = {
  id: string
  level: number
  text: string
}

type HeadingContextType = {
  headings: Heading[]
  registerHeading: (heading: Heading) => void
}

export const headingContext = createContext<HeadingContextType | undefined>(
  undefined
)

export const useHeadingContext = () => {
  const ctx = useContext(headingContext)
  if (!ctx)
    throw new Error("useHeadingContext must be used within HeadingProvider")
  return ctx
}
