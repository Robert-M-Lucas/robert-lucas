import { ReactNode } from "react"

export interface Props {
  href: string | undefined
  children?: ReactNode
}

export default function PHeadingLink({ href, children }: Props) {
  return (
    <a
      href={href ? `#${href}` : ""}
      className={"text-decoration-none" + (href ? "" : " text-muted")}
    >
      #{children}
    </a>
  )
}
