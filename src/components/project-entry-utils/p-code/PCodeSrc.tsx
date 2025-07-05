import { ReactNode, useEffect, useState } from "react"
import { SupportedLanguages } from "./supported-languages.ts"
import PCode from "./PCode.tsx"

export interface Props {
  codeSrc: string
  language: SupportedLanguages
  caption?: string | ReactNode
}

export default function PCodeSrc({ codeSrc, language, caption }: Props) {
  const [code, setCode] = useState("")

  useEffect(() => {
    fetch(codeSrc)
      .then((r) => r.text())
      .then((text) => {
        setCode(text)
      })
  }, [codeSrc])

  return <PCode code={code} language={language} caption={caption} />
}
