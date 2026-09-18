export const indexPath = "/"
export const projectsPath = "/projects"
export const getProjectPath = (project: string) => `${projectsPath}/${project}`
export const getProjectTechnologyQuery = (technologies: string[]) =>
  `${projectsPath}?techs=${technologies.join(",")}`
