import { a11yLight, CopyBlock } from "react-code-blocks"
import { Card } from "react-bootstrap"

export interface Props {
  code: string
  language: string
  caption?: string
}

export default function Pcode({ code, language, caption }: Props) {
  return (
    <>
      <Card className={caption ? "mb-0" : "mb-3"}>
        <CopyBlock
          text={code}
          language={language}
          showLineNumbers={true}
          theme={a11yLight}
          codeBlock
        />
      </Card>
      {caption && <p className={"text-muted mb-3"}>{caption}</p>}
    </>
  )
}
