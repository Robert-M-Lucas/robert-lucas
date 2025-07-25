import FooterWrapper from "../../components/FooterWrapper"
import Header from "../../components/Header.tsx"
import { Button, Card, CardBody, Container } from "react-bootstrap"
import {
  flagshipProject,
  projectList,
} from "./single-project-page/project-list.ts"
import HeaderSpacer from "../../components/HeaderSpacer.tsx"
import { useEffect, useState } from "react"
import { isProjectLegacy, Project } from "./single-project-page/project.ts"
import RenderTechsAndLinks from "../../components/RenderTechsAndLinks.tsx"
import RenderProjectDate from "../../components/RenderProjectDate.tsx"
import RenderTechnologies from "../../components/RenderTechsAndLinks.tsx"
import RenderButtonLinks from "../../components/RenderButtonLinks.tsx"
import { useNavigate } from "react-router-dom"
import { getProjectPath } from "../../router.tsx"
import RenderProjectName from "../../components/RenderProjectName.tsx"
import {
  allTechnologies,
  Technology,
} from "./single-project-page/technology.tsx"
import "./project-index-page.css"
import { useQuery } from "../../util/useQuery.ts"
import { redirectWithShiftAndViewTransition } from "../../util/util.ts"

const compactStorageKey = "compactProjectView"
export const scrollStorageKey = "scrollProjectView"

function projectShouldShow(
  projectTechnologies: Technology[],
  filters: Set<string>
) {
  if (filters.size === 0) return true
  for (const ft of filters) {
    let has = false
    for (const pt of projectTechnologies) {
      if (pt.id === ft) {
        has = true
      }
    }
    if (!has) return false
  }
  return true
}

export default function ProjectsIndexPage() {
  const [compact, setCompact] = useState(() => {
    return sessionStorage.getItem(compactStorageKey) === "true"
  })

  const query = useQuery()
  const [filters, setFilters] = useState<Set<string>>(new Set())
  const [dummy, setDummy] = useState<boolean>(false)

  useEffect(() => {
    const techs = query.get("techs")
    if (!techs) return
    setFilters(() => {
      const filters = new Set<string>()
      for (const tech of techs.split(",")) {
        filters.add(tech)
      }
      setDummy((dummy) => !dummy)
      return filters
    })
  }, [])

  useEffect(() => {
    const savedScroll = sessionStorage.getItem(scrollStorageKey)
    if (savedScroll) {
      window.scrollTo({
        left: 0,
        top: parseInt(savedScroll, 10),
        behavior: "instant",
      })
    } else {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "instant",
      })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(scrollStorageKey, window.scrollY.toString())
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCompactClick = () => {
    setCompact(!compact)
    sessionStorage.setItem(compactStorageKey, String(!compact))
  }

  const filteredProjects = projectList.filter((project) =>
    projectShouldShow(project.technologies, filters)
  )

  return (
    <FooterWrapper>
      <Header />
      <HeaderSpacer />
      <Container className="pb-5" style={{ maxWidth: "1000px" }}>
        <div className="d-flex justify-content-between">
          <div className="pe-2">
            <h1 className="display-3">Projects</h1>
            <p className="text-muted">Click on any project to learn more</p>
            {/*{currentProject && (*/}
            {/*  <p className={"mb-0"}>*/}
            {/*    <Link*/}
            {/*      viewTransition*/}
            {/*      className={"text-decoration-none"}*/}
            {/*      to={getProjectPath(currentProject.name)}*/}
            {/*    >*/}
            {/*      › Jump to my current project (*/}
            {/*      {currentProject.shortTitle ?? currentProject.title})*/}
            {/*    </Link>*/}
            {/*  </p>*/}
            {/*)}*/}
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

        <div className={"d-flex flex-wrap justify-content-between"}>
          {allTechnologies.map((technology, i) => {
            const highlight = filters.has(technology.id)
            return (
              <Button
                variant={highlight ? "success" : "outline-secondary"}
                className={
                  "mb-1 mx-1 flex-grow-1" + (highlight ? "" : " hover-light")
                }
                key={i}
                style={{ padding: "6px 6px 4px 6px" }}
                onClick={
                  filters.has(technology.id)
                    ? () => {
                        filters.delete(technology.id)
                        setFilters(filters)
                        setDummy(!dummy)
                      }
                    : () => {
                        const nFilters = filters.add(technology.id)
                        setFilters(nFilters)
                        setDummy(!dummy)
                      }
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

        {filters.size === 0 && (
          <div className={"mt-3"}>
            {/*<hr />*/}
            <Card className="shadow">
              <CardBody>
                <ExpandedEntry project={flagshipProject} flagship />
              </CardBody>
            </Card>
          </div>
        )}

        {filteredProjects.map((project, i) => (
          <div key={i}>
            <hr />
            {compact ? (
              <CompactEntry project={project} highlights={filters} />
            ) : (
              <ExpandedEntry project={project} highlights={filters} />
            )}
          </div>
        ))}

        <hr />

        {filteredProjects.length === 0 ? (
          <Card className={"mt-5 text-center"}>
            <Card.Title className={"mt-3"}>No Projects</Card.Title>
            <Card.Body>
              While no projects were found with the selected filters, I may
              still have worked on a similar project that hasn't made it onto
              this website - feel free to ask me :)
            </Card.Body>
          </Card>
        ) : (
          <Card className={"mt-5 text-center"}>
            <Card.Title className={"mt-3"}>No More Projects</Card.Title>
            <Card.Body>
              While there are no more projects for the selected filters, I may
              still have worked on a similar project that hasn't made it onto
              this website - feel free to ask me :)
            </Card.Body>
          </Card>
        )}
      </Container>
    </FooterWrapper>
  )
}

interface EntryProps {
  project: Project
  highlights?: Set<string>
  flagship?: boolean
}

function CompactEntry({ project, highlights }: EntryProps) {
  const navigate = useNavigate()
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={(e) =>
        redirectWithShiftAndViewTransition(
          navigate,
          getProjectPath(project.name),
          e
        )
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
          highlights={highlights}
          links={project.links}
        />
      </span>
      <p className={"text-muted"}>{project.subtitle}</p>
    </div>
  )
}

function ExpandedEntry({ project, highlights, flagship }: EntryProps) {
  const navigate = useNavigate()
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={(e) =>
        redirectWithShiftAndViewTransition(
          navigate,
          getProjectPath(project.name),
          e
        )
      }
    >
      <RenderProjectName
        title={project.title}
        currentlyWriting={project.currentlyWriting}
        margin={!project.subtitle}
        legacy={isProjectLegacy(project)}
      />
      {flagship && (
        <h6 className="card-subtitle mb-1 text-body-secondary">
          Featured Project
        </h6>
      )}
      <span className="mb-1">
        <RenderProjectDate msSinceEpoch={project.msSinceEpoch} />
        {project.technologies.length > 0 && (
          <>
            &nbsp;|&nbsp;
            <RenderTechnologies
              currentlyWorkingOn={project.currentlyWorkingOn ?? false}
              technologies={project.technologies}
              highlights={highlights}
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
