import { useEffect, useState } from "react"
import Pmarkdown from "./Pmarkdown.tsx"

export interface Props {
  markdownSrc: string
  caption?: string
}

export default function PmarkdownSrc({ markdownSrc, caption }: Props) {
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    fetch(markdownSrc)
      .then((r) => r.text())
      .then((text) => {
        setMarkdown(text)
      })
  }, [markdownSrc])

  return <Pmarkdown markdown={markdown} caption={caption} />
}
