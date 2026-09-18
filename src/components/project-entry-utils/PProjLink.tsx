import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Project } from "../../routes/projects/single-project-page/project.ts"
import { FileEarmarkText } from "react-bootstrap-icons"
import { getProjectPath } from "../../routingConstants.ts"

export interface Props {
  to: Project
  children?: ReactNode
}

export default function PProjLink({ to, children }: Props) {
  return (
    <Link
      viewTransition
      to={getProjectPath(to.name)}
      className={"text-decoration-none"}
    >
      <FileEarmarkText /> {children}
    </Link>
  )
}
