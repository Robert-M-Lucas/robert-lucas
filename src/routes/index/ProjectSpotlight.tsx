import { Card } from "react-bootstrap"
import { Project } from "../projects/SingleProjectPage/project"
import RenderTechsAndLinks from "../../components/RenderTechsAndLinks.tsx"
import RenderButtonLinks from "../../components/RenderButtonLinks.tsx"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./blur-bottom.css"
import { getProjectPath } from "../../router.tsx"
import { useNavigate } from "react-router-dom"

export interface Props {
  project: Project
  projectCycleTime: number
}

export function ProjectSpotlight({ project, projectCycleTime }: Props) {
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
    setTimeout(checkHeight, 100)
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
          style={{ cursor: "pointer" }}
          onClick={async () =>
            navigate(getProjectPath(project.name), {
              viewTransition: true,
            })
          }
        >
          <Card style={{ width: "min(90vw, 900px)" }}>
            <Card.Body>
              <Card.Title>
                <h1>{project.title}</h1>
              </Card.Title>
              <Card.Subtitle>
                <RenderTechsAndLinks technologies={project.technologies} />
              </Card.Subtitle>
              <Card.Text>
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
              </Card.Text>
            </Card.Body>
            {project.links.length !== 0 && (
              <Card.Footer
                className={
                  "d-flex justify-content-center align-items-center bg-white"
                }
              >
                <RenderButtonLinks links={project.links} />
              </Card.Footer>
            )}
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
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
