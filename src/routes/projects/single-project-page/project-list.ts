import { Project } from "./project.ts"
import { pythonSudokuProject } from "../../../project_entries/python-sudoku/python-sudoku.tsx"
import { aStarProject } from "../../../project_entries/astar/astar.tsx"
import { bezierProject } from "../../../project_entries/bezier/bezier.tsx"
import { chessProject } from "../../../project_entries/chess/chess.tsx"
import { compressionProject } from "../../../project_entries/compression/compression.tsx"
import { compileTimeRegexProject } from "../../../project_entries/constant-regex/compile-time-regex.tsx"
import { enigmaProject } from "../../../project_entries/enigma/enigma.tsx"
import { fractalProject } from "../../../project_entries/fractal/fractal.tsx"
import { geneticKeyboardProject } from "../../../project_entries/genetic-keyboard/genetic-keyboard.tsx"
import { geometricPatternProject } from "../../../project_entries/geometric-pattern/geometric-pattern.tsx"
import { minesweeperProject } from "../../../project_entries/minesweeper/minesweeper.tsx"
import { piProject } from "../../../project_entries/pi/pi.tsx"
import { portfolioTwoProject } from "../../../project_entries/portfolio_two/portfolio-two.tsx"
import { programmingLangProject } from "../../../project_entries/programming-lang/programming-lang.tsx"
import { programmingLang2Project } from "../../../project_entries/programming-lang-2/programming-lang-2.tsx"
import { raytracingProject } from "../../../project_entries/raytracing/raytracing.tsx"
import { rssProject } from "../../../project_entries/rss/rss.tsx"
import { sudokuSolverProject } from "../../../project_entries/sudoku-solver/sudoku-solver.tsx"
import { terrainGeneratorProject } from "../../../project_entries/terrain-generator/terrain-generator.tsx"
import { websiteProject } from "../../../project_entries/website/website.tsx"
import { whython4Project } from "../../../project_entries/whython-4/whython-4.tsx"
import { whython7Project } from "../../../project_entries/whython-7/whython-7.tsx"
import { whython8Project } from "../../../project_entries/whython-8/whython-8.tsx"

export const projectList = [
  portfolioTwoProject,
  rssProject,
  compileTimeRegexProject,
  whython8Project,
  whython7Project,
  pythonSudokuProject,
  raytracingProject,
  terrainGeneratorProject,
  websiteProject,
  chessProject,
  minesweeperProject,
  fractalProject,
  whython4Project,
  programmingLang2Project,
  geneticKeyboardProject,
  aStarProject,
  enigmaProject,
  programmingLangProject,
  bezierProject,
  piProject,
  compressionProject,
  geometricPatternProject,
]

export const showcaseProjectList = [
  portfolioTwoProject,
  rssProject,
  compileTimeRegexProject,
  whython8Project,
  pythonSudokuProject,
  raytracingProject,
  terrainGeneratorProject,
  websiteProject,
  chessProject,
  minesweeperProject,
  fractalProject,
  whython4Project,
  sudokuSolverProject,
  geneticKeyboardProject,
  aStarProject,
  enigmaProject,
  bezierProject,
  geometricPatternProject,
]

export function getCurrentProject() {
  let currentProject: Project | null = null
  for (const project of projectList) {
    if (project.currentlyWorkingOn) {
      currentProject = project
      break
    }
  }
  return currentProject
}
