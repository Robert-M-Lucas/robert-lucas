import { a11yLight, CopyBlock } from "react-code-blocks"
import { SupportedLanguages } from "./supported-languages.ts"

export interface Props {
  code: string
  language: SupportedLanguages
}

export default function PCodeInternal({ code, language }: Props) {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={true}
      theme={a11yLight}
      customStyle={{ fontFamily: "monospace" }}
      codeBlock
    />
  )
}
