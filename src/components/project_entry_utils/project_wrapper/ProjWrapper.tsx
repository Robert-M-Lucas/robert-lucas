import { ReactNode, useState } from "react"
import { Heading, HeadingContext } from "./heading_context.ts"
import ProjContents from "../ProjContents.tsx"

export interface Props {
  children?: ReactNode
}

export default function ProjWrapper({ children }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([])

  const registerHeading = (heading: Heading) => {
    setHeadings((prev) => [...prev, heading])
  }

  return (
    <HeadingContext.Provider value={{ headings, registerHeading }}>
      <ProjContents />
      <article>{children}</article>
    </HeadingContext.Provider>
  )
}
