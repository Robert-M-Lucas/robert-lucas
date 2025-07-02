import { useEffect, useRef } from "react"
import { useHeadingContext } from "../../routes/projects/single-project-page/heading-context.ts"
import slugify from "slugify"
import { HeadingsProps } from "./P_headings_shared.ts"

export default function P_h1({ children, contentsTitle }: HeadingsProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const { headings, registerHeading } = useHeadingContext()
  const text = contentsTitle ?? (typeof children === "string" ? children : "")
  const id = slugify(text, { lower: true })

  useEffect(() => {
    registerHeading({ id, level: 1, text })
  }, [id, registerHeading, text])

  let index = undefined
  let i = 0
  for (const heading of headings) {
    if (heading.level === 1) i += 1
    if (heading.id === id) {
      index = i
      break
    }
  }

  return (
    <h2 id={id} ref={ref}>
      {index && `${index}. `}
      {children}
    </h2>
  )
}
