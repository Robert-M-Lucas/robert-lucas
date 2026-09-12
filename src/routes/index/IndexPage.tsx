import React, { RefObject, useEffect, useRef, useState } from "react"
import FooterWrapper from "../../components/FooterWrapper.tsx"
import Header from "../../components/Header.tsx"
import { ProjectSpotlight } from "./ProjectSpotlight.tsx"
import { flagshipProject } from "../projects/single-project-page/project-list.ts"
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
import { scrollStorageKey } from "../projects/ProjectsIndexPage.tsx"
import { ArrowDown, GraphDownArrow } from "react-bootstrap-icons"

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

  const timeout: RefObject<ReturnType<typeof setTimeout> | null> = useRef(null)

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
                  {showSubtitle && (
                    <motion.span transition={transition} variants={variants}>
                      <Link
                        viewTransition
                        className={"text-decoration-none"}
                        to={getProjectPath(flagshipProject.name)}
                      >
                        › Jump to featured project
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
          variant={"outline-primary"}
          onClick={() => {
            document
              .getElementById("continued")
              ?.scrollIntoView({ behavior: "smooth" })
          }}
          style={{
            position: "relative",
            bottom: 0,
          }}
        >
          Technology, Experience, Education{" "}
          <ArrowDown style={{ marginBottom: "3px" }} />
        </Button>

        {/*<Header hidden />*/}
      </div>
      <section id={"continued"}>
        <Container className="pt-4">
          <div className={"mb-4"}>
            <h1 className={"display-3"}>Technology</h1>
            <p className="text-muted">
              Click on a technology to see projects using it
            </p>
            <div className={"d-flex flex-wrap justify-content-between mb-3"}>
              {allTechnologies.map((technology, i) => {
                return (
                  <Button
                    variant={"outline-secondary"}
                    className={"mb-1 mx-1 flex-grow-1 hover-light"}
                    key={i}
                    style={{ padding: "6px 6px 4px 6px" }}
                    onClick={() => {
                      sessionStorage.removeItem(scrollStorageKey)
                      navigate(getProjectTechnologyQuery([technology.id]), {
                        viewTransition: true,
                      })
                    }}
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
          </div>

          <div className={"mb-4"}>
            <h1 className={"display-3"}>Experience</h1>
            <h2>Trio Motion Technology</h2>

            <p>
              In placerat elit non mi gravida lacinia id quis nulla. Nullam
              dolor mi, porttitor nec sapien a, facilisis mattis ex. Cras ut
              ornare lacus, a iaculis velit. Morbi placerat nisi vitae venenatis
              viverra. Quisque eu pulvinar ante. Donec porta arcu vel odio
              sollicitudin, eu aliquam arcu imperdiet. Aenean hendrerit
              fermentum ante eget ornare. Pellentesque ullamcorper nisl tortor,
              in vehicula tellus efficitur nec. Curabitur ac ligula interdum,
              ultricies tortor nec, sodales erat. Donec fringilla maximus nisl
              sit amet accumsan. Morbi a nisl lobortis augue egestas imperdiet
              in aliquam mauris. Phasellus nec augue fringilla arcu condimentum
              bibendum id eu quam. Aliquam posuere ornare est, at vulputate
              ipsum malesuada ut. Etiam consequat vestibulum fermentum.
            </p>
          </div>
          <div className={"mb-4"}>
            <h1 className={"display-3"}>Education</h1>
            <h2>University of Bath</h2>
            <p>
              In placerat elit non mi gravida lacinia id quis nulla. Nullam
              dolor mi, porttitor nec sapien a, facilisis mattis ex. Cras ut
              ornare lacus, a iaculis velit. Morbi placerat nisi vitae venenatis
              viverra. Quisque eu pulvinar ante. Donec porta arcu vel odio
              sollicitudin, eu aliquam arcu imperdiet. Aenean hendrerit
              fermentum ante eget ornare. Pellentesque ullamcorper nisl tortor,
              in vehicula tellus efficitur nec. Curabitur ac ligula interdum,
              ultricies tortor nec, sodales erat. Donec fringilla maximus nisl
              sit amet accumsan. Morbi a nisl lobortis augue egestas imperdiet
              in aliquam mauris. Phasellus nec augue fringilla arcu condimentum
              bibendum id eu quam. Aliquam posuere ornare est, at vulputate
              ipsum malesuada ut. Etiam consequat vestibulum fermentum.
            </p>
            <h2>Mark Rutherford Sixth Form</h2>
            <p>
              In placerat elit non mi gravida lacinia id quis nulla. Nullam
              dolor mi, porttitor nec sapien a, facilisis mattis ex. Cras ut
              ornare lacus, a iaculis velit. Morbi placerat nisi vitae venenatis
              viverra. Quisque eu pulvinar ante. Donec porta arcu vel odio
              sollicitudin, eu aliquam arcu imperdiet. Aenean hendrerit
              fermentum ante eget ornare. Pellentesque ullamcorper nisl tortor,
              in vehicula tellus efficitur nec. Curabitur ac ligula interdum,
              ultricies tortor nec, sodales erat. Donec fringilla maximus nisl
              sit amet accumsan. Morbi a nisl lobortis augue egestas imperdiet
              in aliquam mauris. Phasellus nec augue fringilla arcu condimentum
              bibendum id eu quam. Aliquam posuere ornare est, at vulputate
              ipsum malesuada ut. Etiam consequat vestibulum fermentum.
            </p>
          </div>
        </Container>
      </section>
    </FooterWrapper>
  )
}
