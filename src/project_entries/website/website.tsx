import { Project } from "../../routes/projects/single-project-page/project.ts"
import website from "./assets/website.png"
import {
  bootstrapTechnology,
  cssTechnology,
  djangoTechnology,
  htmlTechnology,
  javascriptTechnology,
  pythonTechnology,
} from "../../routes/projects/single-project-page/technology.tsx"
import WebsiteEntryPage from "./WebsiteEntryPage.tsx"

export const websiteProject: Project = {
  name: "website",
  title: "Old Website",
  subtitle: "My previous website demonstrating past projects",
  msSinceEpoch: null,
  image: { image: website, alt: "TODO" },
  technologies: [
    pythonTechnology,
    javascriptTechnology,
    bootstrapTechnology,
    htmlTechnology,
    cssTechnology,
    djangoTechnology,
  ],
  links: [],
  page: WebsiteEntryPage,
}
