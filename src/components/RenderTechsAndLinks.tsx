import { Technology } from "../routes/projects/single-project-page/technology.tsx"
import { ProjectLink } from "../routes/projects/single-project-page/links.tsx"

export interface Props {
  currentlyWorkingOn?: boolean
  technologies: Technology[]
  links?: ProjectLink[]
  highlights?: Set<string>
}

function shouldHighlight(
  technology: Technology,
  highlights: Set<string>
): boolean {
  for (const t of highlights) {
    if (t === technology.id) return true
  }
  return false
}

export default function RenderTechsAndLinks({
  currentlyWorkingOn,
  technologies,
  links,
  highlights,
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

      {technologies.map((technology, i) => {
        const highlight = highlights && shouldHighlight(technology, highlights)
        return (
          <span key={i}>
            <span
              className={
                "fw-bold mb-1 text-nowrap" +
                (highlight ? " badge rounded-pill" : "")
              }
              style={{
                ...{ color: technology.color },
                ...(highlight
                  ? {
                      outlineWidth: "2px",
                      outlineStyle: "solid",
                      fontSize: "16px",
                      padding: "2px 7px 0 7px",
                      outlineColor: "rgb(25, 135, 84)",
                      backgroundColor: "rgb(235,241,238)",
                    }
                  : {}),
              }}
            >
              {technology.getIcon()} {technology.name}
            </span>

            {i !== technologies.length - 1 && <>&nbsp;•&nbsp;</>}
          </span>
        )
      })}

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
