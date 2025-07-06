import { lazy } from "react"
import { Card } from "react-bootstrap"

export interface Props {
  markdown: string
  caption?: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const PMarkdownInternal = lazy(() => import("./PMarkdownInternal"))

export default function PMarkdown({ markdown, caption }: Props) {
  return (
    <>
      <Card className={caption ? "mb-0" : "mb-3"}>
        <Card.Body>
          <PMarkdownInternal markdown={markdown} />
        </Card.Body>
      </Card>
      {caption && <p className={"text-muted mb-3"}>{caption}</p>}
    </>
  )
}
