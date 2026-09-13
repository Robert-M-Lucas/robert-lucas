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
import { ArrowDown, Globe, GraphDownArrow } from "react-bootstrap-icons"

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
            <h2 className={"mb-0"}>
              Trio Motion Technology{" "}
              <a href={"https://triomotion.com/"} target={"_blank"}>
                <Globe size={"20px"} />
              </a>
            </h2>
            <small className="text-body-secondary">
              2025 - 2026 | Year-Long Professional Placement
            </small>
            <p className={"mt-2"}>-</p>
            <h2 className={"mb-0"}>
              Private English, Maths, & Computer Science Tutoring
            </h2>
            <small className="text-body-secondary">
              2023 - 2025 | For A-Level, GCSEs, and SATs
            </small>
            <p className={"mt-2"}>
              Creating and teaching tailored lesson plans for SATs, GCSE, and
              A-Level students in English, mathematics, and computer science to
              complement in-class work, helping them improve upon their
              weaknesses and reinforce their strengths.
            </p>
            <h2 className={"mb-0"}>
              Vestcom{" "}
              <a href={"https://vestcom.com/"} target={"_blank"}>
                <Globe size={"20px"} />
              </a>
            </h2>
            <small className="text-body-secondary">
              June 2021 (4 weeks) | Software Development Internship
            </small>
            <p className={"mt-2"}>
              Learning about the structure of a software company (including
              marketing, project management and software development) and
              gaining an understanding of how a complex full-stack system (iRex
              M3) can be created and maintained through multiple meetings with
              the founder of iRex and CGO of Vestcom. The last two weeks were
              spent as a tester alongside the development team whilst continuing
              to learn about the company.
            </p>
          </div>
          <div className={"mb-4"}>
            <h1 className={"display-3"}>Education</h1>
            <h2 className={"mb-0"}>Computer Science - University of Bath</h2>
            <small className="text-body-secondary">
              2023 - 2027 | BSc (Hons) Computer Science with Professional
              Placement
            </small>
            <p className={"mt-2"}>
              Attained a first for Year 1 finishing in the top twenty-five
              students for the year. Modules taken:
              <ul>
                <li>
                  <b>Programming 1 & 2</b>: Object-oriented, imperative, and
                  functional programming. Individual tasks and group project
                  management and execution using the Agile methodology. Achieved
                  the maximum contribution score awarded by other group members
                  in all applicable projects due to a willingness to take a
                  leadership role and go above and beyond in time dedication to
                  the project.
                </li>
                <li>
                  <b>Artificial Intelligence</b>: Fundamentals of AI including
                  ethical considerations, algorithms, and probability with
                  Bayesian Networks. Created a full neural network with
                  backpropagation and k-fold cross-validation for the final
                  coursework.
                </li>
                <li>
                  <b>Discrete Mathematics and Databases</b>: Sets, functions,
                  relations, finite state machines, propositional and predicate
                  calculus. Relational algebra, design, queries, injection
                  attacks and legal considerations for databases.
                </li>
                <li>
                  <b>Computational Mathematics</b>: Linear algebra, series,
                  elemental number theory, and mathematical foundations of
                  cryptography including public key cryptography.
                </li>
              </ul>
            </p>
            <p>
              Attained a first for Year 2. Modules taken:
              <ul>
                <li>
                  <b>Software Engineering</b>: -
                </li>
                <li>
                  <b>Algorithms and Complexity</b>: -
                </li>
                <li>
                  <b>Machine Learning</b>: -
                </li>
                <li>
                  <b>Visual Computing</b>: -
                </li>
                <li>
                  <b>Human-Computer Interaction</b>: -
                </li>
                <li>
                  <b>Advanced Programming</b>: -
                </li>
              </ul>
            </p>
            <p>
              Year 3 will include a year-long project, reinforcement learning,
              logic and semantics, computational complexity, advanced computer
              graphics, and advanced computer vision.
            </p>
            <h2 className={"mb-0"}>Mark Rutherford Sixth Form</h2>
            <small className="text-body-secondary">
              2021 - 2023 | A in Maths, Further Maths, Computer Science, and
              Physics
            </small>
            <p className={"mt-2"}>
              A in Mathematics, Further Mathematics, Physics, and Computer
              Science. Founded and ran a STEM club for younger years during this
              time.
            </p>
            <h2>Awards</h2>
            <p>
              Year 13 (2022 – 2023)
              <ul>
                <li>
                  National Cyber Awards – Cyber Student of the Year Finalist
                  <br />
                  <a
                    href={"https://thenationalcyberawards.org/2022-finalists/"}
                    target={"_blank"}
                  >
                    https://thenationalcyberawards.org/2022-finalists/
                  </a>
                </li>
                <li>UKMT Senior Maths Challenge – GOLD</li>
              </ul>
            </p>
            <p>
              Year 12 (2021 – 2022)
              <ul>
                <li>UKMT Senior Maths Challenge – SILVER</li>
                <li>Bebras Challenge – Distinction</li>
                <li>Extended Project Qualification (Computer Science) – A*</li>
              </ul>
            </p>
            <p>
              Year 11 (2020 – 2021)
              <ul>
                <li>UKMT Intermediate Maths Challenge – Gold</li>
              </ul>
            </p>
          </div>
        </Container>
      </section>
    </FooterWrapper>
  )
}
