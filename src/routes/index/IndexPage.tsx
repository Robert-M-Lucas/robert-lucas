import { RefObject, useEffect, useRef, useState } from "react"
import FooterWrapper from "../../components/FooterWrapper.tsx"
import Header from "../../components/Header.tsx"
import { ProjectSpotlight } from "./ProjectSpotlight.tsx"
import {
  getCurrentProject,
  SHOWCASE_PROJECT_LIST,
} from "../projects/SingleProjectPage/project_list.ts"
import React from "react"
import { AnimatePresence, motion, Transition } from "framer-motion"
import { getProjectPath, PROJECTS_PATH } from "../../router.tsx"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { clearProjectScrollProgress } from "../../util/util.ts"

export const projectCycleTime = 15000

const transition: Transition = { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
}

export default function IndexPage() {
  const [projectIndex, setProjectIndex] = useState<number>(
    Math.floor(Math.random() * SHOWCASE_PROJECT_LIST.length)
  )
  const [currentHeading, setCurrentHeading] = useState("Robert Lucas")
  const [showHeading, setShowHeading] = useState(true)
  const [showSubtitle, setShowSubtitle] = useState(false)

  const timeout: RefObject<NodeJS.Timeout | null> = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => {
        if (prev + 1 == SHOWCASE_PROJECT_LIST.length) {
          return 0
        } else {
          return prev + 1
        }
      })
    }, projectCycleTime)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      setShowHeading(false)
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
      timeout.current = setTimeout(() => {
        setShowHeading(true)
        setCurrentHeading("Click on any project")
        setShowSubtitle(true)
      }, 1200)
    }, 5000)

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [])

  const current_project = getCurrentProject()

  return (
    <FooterWrapper>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100vh" }}
      >
        <Header />

        <div
          className={
            "d-flex flex-column justify-content-end align-items-center"
          }
          style={{ height: "20vh" }}
        >
          <AnimatePresence>
            {showHeading && (
              <motion.div
                key={currentHeading.split(" ").length}
                initial="hidden"
                whileInView="visible"
                exit={"hidden"}
                transition={{ staggerChildren: 0.15 }}
                className={
                  "d-flex flex-column justify-content-center align-items-center"
                }
              >
                <h1 className={"display-1 fw-bold text-center"}>
                  {currentHeading.split(" ").map((word, index) => (
                    <React.Fragment key={index}>
                      <motion.span
                        className="inline-block"
                        transition={transition}
                        variants={variants}
                      >
                        {word}
                      </motion.span>
                      {index < currentHeading.split(" ").length - 1 && " "}
                    </React.Fragment>
                  ))}
                </h1>
                {showSubtitle && current_project && (
                  <motion.span transition={transition} variants={variants}>
                    <Link
                      viewTransition
                      className={"text-decoration-none"}
                      to={getProjectPath(current_project.name)}
                    >
                      › Jump to my current project
                    </Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <Link
                      viewTransition
                      className={"text-decoration-none"}
                      to={PROJECTS_PATH}
                      onClick={() => {
                        clearProjectScrollProgress()
                      }}
                    >
                      All projects
                    </Link>
                  </motion.span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={
            "d-flex flex-column justify-content-center align-items-center"
          }
          style={{ height: "60vh" }}
        >
          <ProjectSpotlight
            project={SHOWCASE_PROJECT_LIST[projectIndex]}
            projectCycleTime={projectCycleTime}
          />
        </div>

        <Button
          className={"text-nowrap"}
          variant={"outline-success"}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.hash = ""
            window.location.hash = "#continued"
          }}
        >
          Technology, experience, education
        </Button>

        <Header hidden />
      </div>
      <section id={"continued"}>
        <p>Hello</p>
      </section>
    </FooterWrapper>
  )
}
