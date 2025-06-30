import {
  Heading,
  useHeadingContext,
} from "../../routes/projects/SingleProjectPage/heading-context.ts"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Triangle } from "react-bootstrap-icons"

export interface Props {
  renderLeft?: number
}

export default function ProjContents({ renderLeft }: Props) {
  const { headings } = useHeadingContext()
  const [toggleSections, setToggleSections] = useState<Record<number, boolean>>(
    {}
  )

  const groupedHeadings: { id: string; text: string; children: Heading[] }[] =
    []
  let headingIndex = 0

  headings.forEach((heading) => {
    if (heading.level === 1) {
      headingIndex++
      groupedHeadings.push({
        id: heading.id,
        text: `${headingIndex}. ${heading.text}`,
        children: [],
      })
    } else if (groupedHeadings.length > 0) {
      groupedHeadings[groupedHeadings.length - 1].children.push(heading)
    }
  })

  const toggleSection = (index: number) => {
    setToggleSections((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <nav
      style={
        renderLeft
          ? {
              position: "absolute",
              marginLeft: "17px",
              maxWidth: renderLeft - 34,
            }
          : undefined
      }
    >
      <div className="list-group mb-3">
        {groupedHeadings.map((section, index) => (
          <>
            <a
              className="list-group-item list-group-item-action small d-flex justify-content-between"
              href={`#${section.id}`}
              style={{ cursor: "pointer" }}
            >
              <span>{section.text}</span>
              {groupedHeadings[index].children.length > 0 && !renderLeft ? (
                <motion.div
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{ height: "auto" }}
                  animate={{ rotate: toggleSections[index] ? -180 : -90 }}
                >
                  <Triangle
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      toggleSection(index)
                      e.stopPropagation()
                    }}
                  />
                </motion.div>
              ) : (
                <div></div>
              )}
            </a>

            <AnimatePresence initial={false}>
              {(toggleSections[index] || renderLeft) &&
                groupedHeadings[index].children.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.children.map(({ id, level, text }) => (
                      <a
                        key={id}
                        className="list-group-item list-group-item-action small"
                        href={`#${id}`}
                      >
                        <span style={{ paddingLeft: (level - 1) * 32 }}>
                          {text}
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
            </AnimatePresence>
          </>
        ))}
      </div>
    </nav>
  )
}
