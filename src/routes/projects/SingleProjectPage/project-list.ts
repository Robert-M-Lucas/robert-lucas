import { portfolioTwoProject } from "../../../project_entries/portfolio_two/PortfolioTwoEntry.tsx"
import { raytracingProject } from "../../../project_entries/raytracing/RaytracingEntry.tsx"
import { whython7Project } from "../../../project_entries/whython-7/Whython7Entry.tsx"
import { pythonSudokuProject } from "../../../project_entries/python_sudoku/PythonSudokuEntry.tsx"
import { terrainGeneratorProject } from "../../../project_entries/terrain_generator/TerrainGeneratorEntry.tsx"
import { websiteProject } from "../../../project_entries/website/WebsiteEntry.tsx"
import { chessProject } from "../../../project_entries/chess/ChessEntry.tsx"
import { minesweeperProject } from "../../../project_entries/minesweeper/MinesweeperEntry.tsx"
import { fractalProject } from "../../../project_entries/fractal/FractalEntry.tsx"
import { whython4Project } from "../../../project_entries/whython-4/Whython4Entry.tsx"
import { programmingLang2Project } from "../../../project_entries/programming_lang_2/ProgrammingLang2Entry.tsx"
import { SudokuSolverProject } from "../../../project_entries/sudoku_solver/SudokuSolverEntry.tsx"
import { geneticKeyboardProject } from "../../../project_entries/genetic_keyboard/GeneticKeyboardEntry.tsx"
import { aStarProject } from "../../../project_entries/astar/AstarEntry.tsx"
import { enigmaProject } from "../../../project_entries/enigma/EnigmaEntry.tsx"
import { programmingLangProject } from "../../../project_entries/programming_lang/ProgrammingLangEntry.tsx"
import { bezierProject } from "../../../project_entries/bezier/BezierEntry.tsx"
import { piProject } from "../../../project_entries/pi/PiEntry.tsx"
import { compressionProject } from "../../../project_entries/compression/CompressionEntry.tsx"
import { geometricPatternProject } from "../../../project_entries/geometric_pattern/GeometricPatternEntry.tsx"
import { compileTimeRegexProject } from "../../../project_entries/constant_regex/CompileTimeRegexEntry.tsx"
import { whython8Project } from "../../../project_entries/whython-8/Whython8Entry.tsx"
import { rssProject } from "../../../project_entries/rss/RssEntry.tsx"
import { Project } from "./project.ts"

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
  SudokuSolverProject,
  geneticKeyboardProject,
  aStarProject,
  enigmaProject,
  bezierProject,
  geometricPatternProject,
]

export function getCurrentProject() {
  let current_project: Project | null = null
  for (const project of projectList) {
    if (project.currentlyWorkingOn) {
      current_project = project
      break
    }
  }
  return current_project
}
