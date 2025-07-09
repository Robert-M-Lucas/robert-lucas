import { ReactNode } from "react"

export interface Props {
  heading_id: string | undefined
  children?: ReactNode
}

export default function PHeadingLink({ heading_id, children }: Props) {
  return (
    <a
      href={heading_id ? `#${heading_id}` : ""}
      className={"text-decoration-none" + (heading_id ? "" : " text-muted")}
    >
      #{children}
    </a>
  )
}
