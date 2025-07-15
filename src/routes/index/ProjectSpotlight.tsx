import { Card } from "react-bootstrap"
import { isProjectLegacy } from "../projects/single-project-page/project"
import RenderTechsAndLinks from "../../components/RenderTechsAndLinks.tsx"
import RenderButtonLinks from "../../components/RenderButtonLinks.tsx"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import "./blur-bottom.css"
import { getProjectPath } from "../../router.tsx"
import { useNavigate } from "react-router-dom"
import { isMobile } from "react-device-detect"
import RenderProjectName from "../../components/RenderProjectName.tsx"
import { Pause, Play, SkipEnd, SkipStart } from "react-bootstrap-icons"
import { showcaseProjectList } from "../projects/single-project-page/project-list.ts"
import { redirectWithShiftAndViewTransition } from "../../util/util.ts"
import "./project-spotlight.css"

const projectCycleTime = 15000
const cardTransitionTime = 1000

export function ProjectSpotlight() {
  const [projectIndex, setProjectIndex] = useState<number>(
    Math.floor(Math.random() * showcaseProjectList.length)
  )
  const [paused, setPaused] = useState(false)

  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null)
  const wrapperRef = (wrapper: HTMLDivElement) => {
    setWrapper(wrapper)
  }
  const [img, setImg] = useState<HTMLImageElement | null>(null)
  const imgRef = (img: HTMLImageElement) => {
    setImg(img)
  }
  const [fadeActive, setFadeActive] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const navigate = useNavigate()

  const controls = useAnimationControls()
  const progressControls = useAnimationControls()

  const currentTimeout = useRef<NodeJS.Timeout | null>(null)

  const startTimeout = () => {
    controls.start("visible").then()
    progressControls.set("start")
    progressControls.start("end").then()
    replaceTimeout(
      setTimeout(
        () => {
          skipFunc(skipNext)
        },
        projectCycleTime - cardTransitionTime * 2
      )
    )
  }

  const replaceTimeout = (timeout: NodeJS.Timeout) => {
    stopTimeout()
    currentTimeout.current = timeout
  }

  const stopTimeout = () => {
    if (currentTimeout.current) {
      window.clearTimeout(currentTimeout.current)
      currentTimeout.current = null
    }
  }

  const skipFunc = (changeIndex: () => void) => {
    if (isExiting) return
    setIsExiting(true)
    controls.start("hidden").then()

    replaceTimeout(
      setTimeout(() => {
        changeIndex()
        controls.set("hidden")

        if (paused) {
          controls.start("visible").then()
          progressControls.set("start")
          progressControls.stop()
        } else {
          startTimeout()
        }
        setIsExiting(false)
      }, cardTransitionTime + 500)
    )
  }

  const skipNext = () => {
    setProjectIndex((prev) => {
      if (prev + 1 == showcaseProjectList.length) {
        return 0
      } else {
        return prev + 1
      }
    })
  }

  const skipPrev = () => {
    setProjectIndex((prev) => {
      if (prev == 0) {
        return showcaseProjectList.length - 1
      } else {
        return prev - 1
      }
    })
  }

  const togglePause = () => {
    if (isExiting) return
    if (paused) {
      setPaused(false)
      controls.set("reset")
      startTimeout()
    } else {
      setPaused(true)
      stopTimeout()
      progressControls.stop()
      progressControls.set("start")
      controls.stop()
    }
  }

  useEffect(() => {
    if (!currentTimeout.current) {
      startTimeout()
    }
    return () => {
      stopTimeout()
    }
  }, [])

  useEffect(() => {
    const checkHeight = () => {
      if (img && wrapper) {
        const imgHeight = img.offsetHeight
        const wrapperHeight = wrapper.offsetHeight
        const newF = imgHeight > wrapperHeight
        if (fadeActive !== newF) {
          setFadeActive(newF)
        }
      }
    }

    if (img) {
      img.onload = checkHeight
    }
    setTimeout(checkHeight, 500)
    window.addEventListener("resize", checkHeight)
    return () => window.removeEventListener("resize", checkHeight)
  }, [img, wrapper])

  const project = showcaseProjectList[projectIndex]

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      exit="hidden"
      transition={{
        duration: cardTransitionTime / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      variants={{
        hidden: {
          filter: "blur(10px)",
          transform: "translateY(10%)",
          opacity: 0,
        },
        visible: {
          filter: "blur(0)",
          transform: "translateY(0)",
          opacity: 1,
        },
        reset: {
          filter: "blur(0)",
          transform: "translateY(0)",
          opacity: 1,
        },
      }}
      style={isExiting ? { pointerEvents: "none" } : { cursor: "pointer" }}
      onClick={(e) => {
        if (!isExiting)
          redirectWithShiftAndViewTransition(
            navigate,
            getProjectPath(project.name),
            e
          )
      }}
    >
      <Card className="shadow" style={{ width: "min(90vw, 900px)" }}>
        <Card.Body className={isMobile ? "px-2 pt-2 pb-1" : ""}>
          <Card.Title>
            <RenderProjectName
              title={project.shortTitle ?? project.title}
              legacy={!isMobile && isProjectLegacy(project)}
              currentlyWriting={!isMobile && project.currentlyWriting}
            />
          </Card.Title>
          <Card.Subtitle>
            <RenderTechsAndLinks technologies={project.technologies} />
          </Card.Subtitle>
          <div>
            {project.image && (
              <div
                ref={wrapperRef}
                className={`w-100 image-wrapper ${fadeActive ? "fade-active" : ""}`}
              >
                <img
                  ref={imgRef}
                  className="rounded-2"
                  src={project.image.image}
                  alt={project.image.alt}
                ></img>
                <div className="fade-overlay" />
              </div>
            )}
            <p className="mb-0">{project.subtitle}</p>
          </div>
        </Card.Body>
        <Card.Footer
          className={
            "d-flex justify-content-center align-items-center bg-white"
          }
          style={{
            minHeight: "33px",
            paddingBottom:
              isMobile && project.links.length > 0 ? "25px" : undefined,
          }}
        >
          <RenderButtonLinks
            links={isMobile ? project.links.slice(0, 2) : project.links}
          />
        </Card.Footer>
        <motion.div
          initial="start"
          animate={progressControls}
          transition={{
            duration: projectCycleTime / 1000,
          }}
          variants={{
            start: {
              width: "0%",
            },
            end: {
              width: "100%",
            },
          }}
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "5px",
            backgroundColor: "lightgrey",
            color: "black",
          }}
        ></motion.div>
        <div
          style={
            isMobile
              ? {
                  position: "absolute",
                  bottom: "5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "gray",
                }
              : {
                  position: "absolute",
                  bottom: "5px",
                  left: "0",
                  color: "gray",
                }
          }
        >
          <SkipStart
            size={25}
            style={{ cursor: "pointer" }}
            className={"hover-darken"}
            onClick={(e) => {
              skipFunc(skipPrev)
              e.stopPropagation()
            }}
          />
          {paused ? (
            <Play
              size={25}
              style={{ cursor: "pointer" }}
              className={"hover-darken"}
              onClick={(e) => {
                e.stopPropagation()
                togglePause()
              }}
            />
          ) : (
            <Pause
              size={25}
              style={{ cursor: "pointer" }}
              className={"hover-darken"}
              onClick={(e) => {
                e.stopPropagation()
                togglePause()
              }}
            />
          )}
          <SkipEnd
            size={25}
            style={{ cursor: "pointer" }}
            className={"hover-darken"}
            onClick={(e) => {
              skipFunc(skipNext)
              e.stopPropagation()
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            right: "5px",
            color: "gray",
          }}
        >
          {projectIndex + 1}
        </div>
      </Card>
    </motion.div>
  )
}
