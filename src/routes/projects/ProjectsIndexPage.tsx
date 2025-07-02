import FooterWrapper from "../../components/FooterWrapper"
import Header from "../../components/Header.tsx"
import { Button, Card, Container } from "react-bootstrap"
import {
  getCurrentProject,
  projectList,
} from "./SingleProjectPage/project-list.ts"
import HeaderSpacer from "../../components/HeaderSpacer.tsx"
import { useEffect, useState } from "react"
import { isProjectLegacy, Project } from "./SingleProjectPage/project.ts"
import RenderTechsAndLinks from "../../components/RenderTechsAndLinks.tsx"
import RenderProjectDate from "../../components/RenderProjectDate.tsx"
import RenderTechnologies from "../../components/RenderTechsAndLinks.tsx"
import RenderButtonLinks from "../../components/RenderButtonLinks.tsx"
import { Link, useNavigate } from "react-router-dom"
import { getProjectPath } from "../../router.tsx"
import RenderProjectName from "../../components/RenderProjectName.tsx"

const COMPACT_STORAGE_KEY = "compactProjectView"
export const SCROLL_STORAGE_KEY = "scrollProjectView"

export default function ProjectsIndexPage() {
  const [compact, setCompact] = useState(() => {
    return sessionStorage.getItem(COMPACT_STORAGE_KEY) === "true"
  })

  useEffect(() => {
    const savedScroll = sessionStorage.getItem(SCROLL_STORAGE_KEY)
    if (savedScroll) {
      window.scrollTo({
        left: 0,
        top: parseInt(savedScroll, 10),
        behavior: "instant",
      })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(SCROLL_STORAGE_KEY, window.scrollY.toString())
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCompactClick = () => {
    setCompact(!compact)
    sessionStorage.setItem(COMPACT_STORAGE_KEY, String(!compact))
  }

  const currentProject = getCurrentProject()

  return (
    <FooterWrapper>
      <Header />
      <HeaderSpacer />
      <Container className="pb-5" style={{ maxWidth: "1000px" }}>
        <div className="d-flex justify-content-between">
          <div className="pe-2">
            <h1>Projects</h1>
            <p className="text-muted">Click on any project to learn more</p>
            {currentProject && (
              <p className={"mb-0"}>
                <Link
                  viewTransition
                  className={"text-decoration-none"}
                  to={getProjectPath(currentProject.name)}
                >
                  › Jump to my current project (
                  {currentProject.shortTitle ?? currentProject.title})
                </Link>
              </p>
            )}
          </div>
          <div>
            <Button
              variant={"outline-dark"}
              onClick={handleCompactClick}
              href={"#"}
            >
              {compact ? "Switch to expanded view" : "Switch to compact view"}
            </Button>
          </div>
        </div>

        {projectList.map((project, i) => (
          <div key={i}>
            <hr />
            {compact ? (
              <CompactEntry project={project} />
            ) : (
              <ExpandedEntry project={project} />
            )}
          </div>
        ))}

        <hr />
        <Card className={"mt-5 text-center"}>
          <Card.Title className={"mt-3"}>Migration in progress</Card.Title>
          <Card.Body>
            This list is incomplete as projects are still being transferred from
            my{" "}
            <a
              href={"https://robertlucas.pythonanywhere.com"}
              target={"_blank"}
            >
              old website
            </a>
            .
          </Card.Body>
        </Card>
      </Container>
    </FooterWrapper>
  )
}

interface EntryProps {
  project: Project
}

function CompactEntry({ project }: EntryProps) {
  const navigate = useNavigate()
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={async () =>
        navigate(getProjectPath(project.name), { viewTransition: true })
      }
    >
      <RenderProjectName
        title={project.title}
        legacy={isProjectLegacy(project)}
        currentlyWriting={project.currentlyWriting}
      />
      <span className="mb-2">
        <RenderProjectDate msSinceEpoch={project.msSinceEpoch} /> |&nbsp;
        <RenderTechsAndLinks
          currentlyWorkingOn={project.currentlyWorkingOn ?? false}
          technologies={project.technologies}
          links={project.links}
        />
      </span>
      <p className={"text-muted"}>{project.subtitle}</p>
    </div>
  )
}

function ExpandedEntry({ project }: EntryProps) {
  const navigate = useNavigate()
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={async () =>
        navigate(getProjectPath(project.name), { viewTransition: true })
      }
    >
      <RenderProjectName
        title={project.title}
        currentlyWriting={project.currentlyWriting}
        margin={!project.subtitle}
        legacy={isProjectLegacy(project)}
      />
      <span className="mb-1">
        <RenderProjectDate msSinceEpoch={project.msSinceEpoch} />
        {project.technologies.length > 0 && (
          <>
            &nbsp;|&nbsp;
            <RenderTechnologies
              currentlyWorkingOn={project.currentlyWorkingOn ?? false}
              technologies={project.technologies}
            />
          </>
        )}
      </span>

      {project.image && (
        <div style={{ maxWidth: "100%" }} className="mb-2">
          <img
            className="rounded-2"
            src={project.image.image}
            alt={project.image.alt}
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
            }}
          />
        </div>
      )}

      {project.subtitle && (
        <p className="text-muted mb-2">{project.subtitle}</p>
      )}

      <RenderButtonLinks links={project.links} />
    </div>
  )
}
