import { useEffect, useRef } from "react"
import { useHeadingContext } from "../../routes/projects/SingleProjectPage/heading_context.ts"
import slugify from "slugify"
import { HeadingsProps } from "./P_headings_shared.ts"

export default function P_h2({ children, contents_title }: HeadingsProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const { registerHeading } = useHeadingContext()
  const text = contents_title ?? (typeof children === "string" ? children : "")
  const id = slugify(text, { lower: true })

  useEffect(() => {
    registerHeading({ id, level: 2, text })
  }, [id, registerHeading, text])

  return (
    <h3 id={id} ref={ref}>
      {children}
    </h3>
  )
}
