import { Technology } from "../routes/projects/single-project-page/technology.tsx"
import { ProjectLink } from "../routes/projects/single-project-page/links.tsx"

export interface Props {
  currentlyWorkingOn?: boolean
  technologies: Technology[]
  links?: ProjectLink[]
}

export default function RenderTechsAndLinks({
  currentlyWorkingOn,
  technologies,
  links,
}: Props) {
  if (
    technologies.length === 0 &&
    (links === undefined || links!.length === 0)
  ) {
    return (
      <>
        {currentlyWorkingOn && (
          <i className="text-muted">Currently working on</i>
        )}
      </>
    )
  }

  return (
    <span>
      {currentlyWorkingOn && (
        <>
          <i className="text-muted">Currently working on</i> |&nbsp;
        </>
      )}

      {technologies.map((technology, i) => (
        <span key={i}>
          <span
            className={"fw-bold text-nowrap"}
            style={{ color: technology.color }}
          >
            {technology.getIcon()} {technology.name}
          </span>

          {i !== technologies.length - 1 && <>&nbsp;•&nbsp;</>}
        </span>
      ))}

      {technologies.length > 0 && links && links.length > 0 && <>|&nbsp;</>}

      {links &&
        links.map((link, i) => (
          <span key={i}>
            {link.type.getTextElement(link.url)}{" "}
            {i !== links.length - 1 && <>•&nbsp;</>}
          </span>
        ))}
    </span>
  )
}
