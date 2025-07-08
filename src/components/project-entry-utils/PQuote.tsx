import React from "react"
import { Card } from "react-bootstrap"
import P_a from "./P_a"

export interface Props {
  children?: React.ReactNode
  author?: string
  source?: string
}

export default function PQuote({ children, author, source }: Props) {
  return (
    <Card className={"mb-3"} style={{ textAlign: "justify" }}>
      <Card.Body>
        <p className={"fst-italic mb-2"}>{children}</p>
        {(author || source) && (
          <p className={"ms-4 mb-0"}>
            {author}
            {author && source && " "}
            {source && (
              <>
                [<P_a href={source}>Source</P_a>]
              </>
            )}
          </p>
        )}
      </Card.Body>
    </Card>
  )
}
