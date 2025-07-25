import { ReactNode, useEffect, useRef } from "react"
import { useHeadingContext } from "../../../routes/projects/single-project-page/heading-context.ts"
import slugify from "slugify"
import { HeadingRef } from "./useHeadingRef.ts"

export interface HeadingsProps {
  children?: ReactNode
  contentsTitle?: string
  headingRef?: HeadingRef
}

interface Props {
  level: number
  hProps: HeadingsProps
}

export default function PHeadingsShared({ level, hProps }: Props) {
  const { children, contentsTitle, headingRef } = hProps
  const ref = useRef<HTMLHeadingElement>(null)
  const { headings, registerHeading } = useHeadingContext()
  const text = contentsTitle ?? (typeof children === "string" ? children : "")
  const id = slugify(text, { lower: true })

  useEffect(() => {
    registerHeading({ id, level, text })
  }, [id, level, registerHeading, text])

  useEffect(() => {
    if (headingRef && !headingRef.headingID) {
      headingRef.emitFunction({
        id: id,
        contents: children,
      })
    }
  }, [children, headingRef, id])

  let index = undefined
  let i = 0
  for (const heading of headings) {
    if (heading.level === 1) i += 1
    if (heading.id === id) {
      index = i
      break
    }
  }

  switch (level) {
    case 1:
      return (
        <h2 id={id} ref={ref} className={"pt-1"}>
          {index && `${index}. `}
          {children}
        </h2>
      )
    case 2:
      return (
        <h3 id={id} ref={ref}>
          {children}
        </h3>
      )
    case 3:
      return (
        <h4 id={id} ref={ref}>
          {children}
        </h4>
      )
    default:
      throw new Error(`Unknown heading level ${level}`)
  }
}
