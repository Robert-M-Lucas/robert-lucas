import { useEffect, useState } from "react"
import PMarkdown from "./PMarkdown.tsx"

export interface Props {
  markdownSrc: string
  caption?: string
}

export default function PMarkdownSrc({ markdownSrc, caption }: Props) {
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    fetch(markdownSrc)
      .then((r) => r.text())
      .then((text) => {
        setMarkdown(text)
      })
  }, [markdownSrc])

  return <PMarkdown markdown={markdown} caption={caption} />
}
