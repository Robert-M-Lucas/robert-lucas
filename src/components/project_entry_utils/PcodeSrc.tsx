import { useEffect, useState } from "react"
import Pcode from "./Pcode.tsx"

export interface Props {
  codeSrc: string
  language: string
  caption?: string
}

export default function PcodeSrc({ codeSrc, language, caption }: Props) {
  const [code, setCode] = useState("")

  useEffect(() => {
    fetch(codeSrc)
      .then((r) => r.text())
      .then((text) => {
        setCode(text)
      })
  }, [codeSrc])

  return <Pcode code={code} language={language} caption={caption} />
}
