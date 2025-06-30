import { useEffect, useRef } from "react"
import { useHeadingContext } from "../../routes/projects/SingleProjectPage/heading-context.ts"
import slugify from "slugify"
import { HeadingsProps } from "./P_headings_shared.ts"

export default function P_h1({ children, contentsTitle }: HeadingsProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const { registerHeading } = useHeadingContext()
  const text = contentsTitle ?? (typeof children === "string" ? children : "")
  const id = slugify(text, { lower: true })

  useEffect(() => {
    registerHeading({ id, level: 1, text })
  }, [id, registerHeading, text])

  return (
    <h2 id={id} ref={ref}>
      {children}
    </h2>
  )
}
