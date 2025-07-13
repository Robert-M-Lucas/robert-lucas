import React, { RefObject, useEffect, useRef, useState } from "react"
import FooterWrapper from "../../components/FooterWrapper.tsx"
import Header from "../../components/Header.tsx"
import { ProjectSpotlight } from "./ProjectSpotlight.tsx"
import { getCurrentProject } from "../projects/single-project-page/project-list.ts"
import { AnimatePresence, motion, Transition } from "framer-motion"
import {
  getProjectPath,
  getProjectTechnologyQuery,
  projectsPath,
} from "../../router.tsx"
import { Link, useNavigate } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import { clearProjectScrollProgress } from "../../util/util.ts"
import { isMobile } from "react-device-detect"
import ScrollToTop from "../../components/ScrollToTop.tsx"
import { allTechnologies } from "../projects/single-project-page/technology.tsx"
import "./index-page.css"

const transition: Transition = { duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
}

export default function IndexPage() {
  const [currentHeading, setCurrentHeading] = useState("Robert Lucas")
  const [showHeading, setShowHeading] = useState(true)
  const [initialHeadingHeight, setInitialHeadingHeight] = useState(0)
  const headingRef = useRef<HTMLDivElement | null>(null)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const navigate = useNavigate()

  const timeout: RefObject<NodeJS.Timeout | null> = useRef(null)

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      if (headingRef.current)
        setInitialHeadingHeight(headingRef.current.clientHeight)
      setShowHeading(false)
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
      timeout.current = setTimeout(() => {
        setShowHeading(true)
        setCurrentHeading("Click on any project")
        setShowSubtitle(true)
      }, 1500)
    }, 5000)

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [])

  const currentProject = getCurrentProject()

  return (
    <FooterWrapper>
      <ScrollToTop />
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100dvh" }}
      >
        <Header />

        <div>
          <div
            className={
              "d-flex flex-column justify-content-center align-items-center"
            }
            style={isMobile ? { marginTop: "10px" } : { height: "15vh" }}
          >
            <AnimatePresence>
              {showHeading && (
                <motion.div
                  ref={headingRef}
                  key={currentHeading.split(" ").length}
                  initial="hidden"
                  animate="visible"
                  exit={"hidden"}
                  transition={{ staggerChildren: 0.15 }}
                  className={
                    "d-flex flex-column justify-content-center align-items-center"
                  }
                  variants={
                    initialHeadingHeight === 0
                      ? {}
                      : {
                          hidden: { height: `${initialHeadingHeight}px` },
                          visible: { height: "auto" },
                        }
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
                  {showSubtitle && currentProject && (
                    <motion.span transition={transition} variants={variants}>
                      <Link
                        viewTransition
                        className={"text-decoration-none"}
                        to={getProjectPath(currentProject.name)}
                      >
                        › Jump to my current project
                      </Link>
                      &nbsp;&nbsp;/&nbsp;&nbsp;
                      <Link
                        viewTransition
                        className={"text-decoration-none"}
                        to={projectsPath}
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
            style={isMobile ? { height: "60vh" } : { height: "63vh" }}
          >
            <ProjectSpotlight />
          </div>
        </div>

        <Button
          className={
            "text-nowrap mb-2 mx-2" + (isMobile ? "" : " align-self-center")
          }
          variant={"outline-success"}
          onClick={() => {
            window.location.hash = ""
            window.location.hash = "#continued"
          }}
          style={{
            position: "relative",
            bottom: 0,
          }}
        >
          Technology, experience, education
        </Button>

        {/*<Header hidden />*/}
      </div>
      <section id={"continued"}>
        <Container className="mt-4">
          <h1>Technology</h1>
          <p className="text-muted">
            Click on a technology to see project using it
          </p>
          <div className={"d-flex flex-wrap justify-content-between"}>
            {allTechnologies.map((technology, i) => {
              return (
                <Button
                  variant={"outline-secondary"}
                  className={"mb-1 mx-1 flex-grow-1 hover-light"}
                  key={i}
                  style={{ padding: "6px 6px 4px 6px" }}
                  onClick={() =>
                    navigate(getProjectTechnologyQuery([technology.id]), {
                      viewTransition: true,
                    })
                  }
                >
                  <span
                    className="badge rounded-pill bg-white"
                    style={{
                      color: technology.color,
                      fontSize: "0.9em",
                      padding: "5px 10px 3px 10px",
                    }}
                  >
                    {technology.getIcon()} {technology.name}
                  </span>
                </Button>
              )
            })}
          </div>

          <h1>Experience</h1>
          <h1>Education</h1>
        </Container>
      </section>
    </FooterWrapper>
  )
}
