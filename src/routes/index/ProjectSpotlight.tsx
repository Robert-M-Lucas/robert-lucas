import { Card } from "react-bootstrap"
import { isProjectLegacy, Project } from "../projects/SingleProjectPage/project"
import RenderTechsAndLinks from "../../components/RenderTechsAndLinks.tsx"
import RenderButtonLinks from "../../components/RenderButtonLinks.tsx"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./blur-bottom.css"
import { getProjectPath } from "../../router.tsx"
import { useNavigate } from "react-router-dom"
import { isMobile } from "react-device-detect"
import RenderProjectName from "../../components/RenderProjectName.tsx"
import { Pause, SkipEnd, SkipStart } from "react-bootstrap-icons"

export interface Props {
  project: Project
  projectCycleTime: number
  index: number
}

export function ProjectSpotlight({ project, projectCycleTime, index }: Props) {
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

  useEffect(() => {
    setIsExiting(false)
    const timer = setTimeout(() => {
      setIsExiting(true)
    }, projectCycleTime - 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [project])

  const checkHeight = () => {
    if (img && wrapper) {
      const imgHeight = img.offsetHeight
      const wrapperHeight = wrapper.offsetHeight
      const new_f = imgHeight > wrapperHeight
      if (fadeActive !== new_f) {
        setFadeActive(new_f)
      }
    }
  }

  useEffect(() => {
    if (img) {
      img.onload = checkHeight
    }
    setTimeout(checkHeight, 500)
    window.addEventListener("resize", checkHeight)
    return () => window.removeEventListener("resize", checkHeight)
  }, [img, wrapper])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
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
          }}
          style={isExiting ? { pointerEvents: "none" } : { cursor: "pointer" }}
          onClick={async () => {
            if (!isExiting)
              navigate(getProjectPath(project.name), {
                viewTransition: true,
              })
          }}
        >
          <Card style={{ width: "min(90vw, 900px)" }}>
            <Card.Body className={isMobile ? "px-2 pt-2 pb-1" : ""}>
              <Card.Title>
                <RenderProjectName
                  title={project.short_title ?? project.title}
                  legacy={!isMobile && isProjectLegacy(project)}
                  currently_writing={!isMobile && project.currently_writing}
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
              style={{ minHeight: "33px" }}
            >
              <RenderButtonLinks
                links={isMobile ? project.links.slice(0, 2) : project.links}
              />
            </Card.Footer>
            <motion.div
              initial="start"
              animate="end"
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
              style={{
                position: "absolute",
                bottom: "5px",
                left: "0",
                color: "gray",
              }}
            >
              <SkipStart
                size={25}
                style={{ cursor: "pointer" }}
                onClick={(e) => e.stopPropagation()}
              />
              <Pause
                size={25}
                style={{ cursor: "pointer" }}
                onClick={(e) => e.stopPropagation()}
              />
              <SkipEnd
                size={25}
                style={{ cursor: "pointer" }}
                onClick={(e) => e.stopPropagation()}
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
              {index + 1}
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
