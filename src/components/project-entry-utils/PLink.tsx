import { ReactNode } from "react"
import { Link } from "react-router-dom"

export interface Props {
  to: string
  children?: ReactNode
}

export default function PLink({ to, children }: Props) {
  return (
    <Link viewTransition to={to} className={"text-decoration-none"}>
      {children}
    </Link>
  )
}
