import { useEffect, useRef } from "react"
import { useHeadingContext } from "./project_wrapper/heading_context.ts"
import slugify from "slugify"

export interface Props {
  children?: React.ReactNode
}

export default function P_h1({ children }: Props) {
  const ref = useRef<HTMLHeadingElement>(null)
  const { registerHeading } = useHeadingContext()
  const text = typeof children === "string" ? children : ""
  const id = slugify(text, { lower: true })

  useEffect(() => {
    registerHeading({ id, level: 1, text })
  }, [])

  return (
    <h2 id={id} ref={ref}>
      {children}
    </h2>
  )
}
