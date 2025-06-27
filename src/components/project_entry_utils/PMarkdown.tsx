import { Card } from "react-bootstrap"
import ReactMarkdown from "react-markdown"

export interface Props {
  markdown: string
  caption?: string
}

export default function PMarkdown({ markdown, caption }: Props) {
  return (
    <>
      <Card className={caption ? "mb-0" : "mb-3"}>
        <Card.Body>
          <ReactMarkdown children={markdown} />
        </Card.Body>
      </Card>
      {caption && <p className={"text-muted mb-3"}>{caption}</p>}
    </>
  )
}
