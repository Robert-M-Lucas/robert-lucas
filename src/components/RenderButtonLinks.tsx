import { ProjectLink } from "../routes/projects/SingleProjectPage/links.tsx"

export interface Props {
  links: ProjectLink[]
}

export default function RenderButtonLinks({ links }: Props) {
  if (links.length === 0) {
    return <></>
  }

  return (
    <div className="mb-1" style={{ lineHeight: "45px" }}>
      {links.map((link, i) => (
        <span key={i}>
          {link.type.getButtonElement(link.url)}{" "}
          {i !== links.length - 1 && <span className="mx-1"></span>}
        </span>
      ))}
    </div>
  )
}
