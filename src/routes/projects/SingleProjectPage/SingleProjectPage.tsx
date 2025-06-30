import { Link, useNavigate, useParams } from "react-router-dom"
import { ProjectList } from "./project-list.ts"
import FooterWrapper from "../../../components/FooterWrapper.tsx"
import Header from "../../../components/Header.tsx"
import { Container } from "react-bootstrap"
import { isProjectLegacy, Project } from "./project.ts"
import { getProjectPath, PROJECTS_PATH } from "../../../router.tsx"
import HeaderSpacer from "../../../components/HeaderSpacer.tsx"
import RenderTechnologies from "../../../components/RenderTechsAndLinks.tsx"
import RenderButtonLinks from "../../../components/RenderButtonLinks.tsx"
import RenderProjectDate from "../../../components/RenderProjectDate.tsx"
import FullscreenCenter from "../../../components/FullscreenCenter.tsx"
import P_img from "../../../components/project_entry_utils/P_img.tsx"
import RenderLegacyWarning from "../../../components/RenderLegacyWarning.tsx"
import RenderProjectName from "../../../components/RenderProjectName.tsx"
import RenderIsWritingWarning from "../../../components/RenderIsWritingWarning.tsx"
import ScrollToTop from "../../../components/ScrollToTop.tsx"
import { useState } from "react"
import { Heading, HeadingContext } from "./heading-context.ts"
import ProjContents from "../../../components/project_entry_utils/ProjContents.tsx"
import useWindowDimensions from "../../../util/useWindowDimensions.tsx"

export default function SingleProjectPage() {
  const params = useParams()
  const navigate = useNavigate()

  if (params.project) {
    for (const project of ProjectList) {
      if (project.name === params.project) {
        return SingleProjectPageRenderer(project)
      }
    }

    for (const project of ProjectList) {
      if (project.alt_names) {
        for (const alt_name of project.alt_names) {
          if (alt_name === params.project) {
            setTimeout(
              () =>
                navigate(getProjectPath(project.name), {
                  replace: true,
                  viewTransition: true,
                }),
              0
            )
            return <FullscreenCenter>Redirecting</FullscreenCenter>
          }
        }
      }
    }

    throw Error("Project '" + params.project + "' not found")
  }

  throw Error("No project specified")
}

export const maxProjectTextWidth = 1000

function SingleProjectPageRenderer(project: Project) {
  const [headings, setHeadings] = useState<Heading[]>([])

  const registerHeading = (heading: Heading) => {
    setHeadings((prev) => {
      for (const existing of prev) {
        if (existing.id == heading.id) {
          return prev
        }
      }
      return [...prev, heading]
    })
  }

  const screenDimensions = useWindowDimensions()
  const remaining = (screenDimensions.width - maxProjectTextWidth) / 2
  const render_contents_left = remaining > 340

  return (
    <FooterWrapper>
      <ScrollToTop />
      <Header />
      <HeaderSpacer />
      <HeadingContext.Provider value={{ headings, registerHeading }}>
        {render_contents_left && <ProjContents renderLeft={remaining} />}
        <Container style={{ maxWidth: maxProjectTextWidth }}>
          <div>
            <Link
              viewTransition
              to={PROJECTS_PATH}
              className="text-decoration-none"
            >
              ‹ Projects List
            </Link>
          </div>

          <RenderProjectName
            title={project.title}
            margin={!project.subtitle}
            legacy={isProjectLegacy(project)}
            large
          />
          <div className="mb-1">
            <RenderProjectDate ms_since_epoch={project.ms_since_epoch} />
            {project.technologies.length > 0 && (
              <>
                &nbsp;|&nbsp;
                <RenderTechnologies
                  currently_working_on={project.currently_working_on}
                  technologies={project.technologies}
                />
              </>
            )}
          </div>

          {project.image && (
            <P_img image={project.image.image} alt={project.image.alt} />
          )}

          {project.subtitle && (
            <p className="text-muted mb-2">{project.subtitle}</p>
          )}

          <RenderButtonLinks links={project.links} />

          {!render_contents_left && <ProjContents />}

          <hr />

          {isProjectLegacy(project) && <RenderLegacyWarning />}
          {project.currently_writing && <RenderIsWritingWarning />}

          {project.page()}
        </Container>
      </HeadingContext.Provider>
    </FooterWrapper>
  )
}
