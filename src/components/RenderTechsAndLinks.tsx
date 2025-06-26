import { Technology } from "../routes/projects/SingleProjectPage/technology.tsx"
import { ProjectLink } from "../routes/projects/SingleProjectPage/links.tsx"

export interface Props {
  currently_working_on?: boolean
  technologies: Technology[]
  links?: ProjectLink[]
}

export default function RenderTechsAndLinks({
  currently_working_on,
  technologies,
  links,
}: Props) {
  if (
    technologies.length === 0 &&
    (links === undefined || links!.length === 0)
  ) {
    return (
      <>
        {currently_working_on && (
          <i className="text-muted">Currently working on</i>
        )}
      </>
    )
  }

  return (
    <span>
      {currently_working_on && (
        <>
          <i className="text-muted">Currently working on</i> |&nbsp;
        </>
      )}

      {technologies.map((technology, i) => (
        <span key={i}>
          {technology.getElement()}{" "}
          {i !== technologies.length - 1 && <>•&nbsp;</>}
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
