import { ReactNode } from "react"

export interface Props {
  href: string
  children?: ReactNode
}

export default function P_a({ href, children }: Props) {
  return (
    <a href={href} target={"_blank"} className={"text-decoration-none"}>
      {children}
    </a>
  )
}
