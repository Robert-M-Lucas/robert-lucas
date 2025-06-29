import React from "react"
import { useHeadingContext } from "./project_wrapper/heading_context.ts"

const ProjContents: React.FC = () => {
  const { headings } = useHeadingContext()

  return (
    <nav className="toc">
      <ul>
        {headings.map(({ id, level, text }) => (
          <li key={id} style={{ marginLeft: (level - 1) * 16 }}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ProjContents
