import Pimg from "../../components/project_entry_utils/Pimg.tsx";
import output2 from "./assets/output2.png";
import output from "./assets/output.png";
import input from "./assets/input.png";
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import Pp from "../../components/project_entry_utils/Pp.tsx";
import {RUST, PYTHON} from "../../routes/projects/SingleProjectPage/technology.tsx";
import Phr from "../../components/project_entry_utils/Phr.tsx";
    
export const SudokuSolverProject: Project = {
    currently_working_on: false,
    name: "sudoku_solver",
    title: "Sudoku Solver",
    subtitle: "Solving sudoku puzzles",
    ms_since_epoch: null,
    image: {image: output2, alt: "TODO"},
    technologies: [RUST, PYTHON],
    links: [
        {url: "https://github.com/Robert-M-Lucas/sudoku-solver-2/tree/master", type: GITHUB_LINK}
    ],
    page: SudokuSolverEntryPage
};

function SudokuSolverEntryPage() {
    return <ProjWrapper>

    <Pp>
        I wanted to try this problem first by trying my own solutions and then researching other solutions online. 
    </Pp>
    <Pp>
        For my solution I started by keeping track of which cells could contain which values by applying the Sudoku rules and, if a cell had only one possible value, placing a 
        number there. While this did work quickly and efficiently for medium-difficulty puzzles, hard puzzles where after applying all the rules cells didn't have a single value
        wasn't as easy. My current solution is to guess a cell's value from its possible numbers and then see if that puzzle is solvable. This can then repeat for multiple guesses.
        Currently, this is a little bit buggy and sometimes so slow it doesn't reach the solution so I'm working on optimising it and, if it's still too slow, I will look online for
        existing solutions.
    </Pp>
    <Pimg image={input} alt={"TODO"} caption={"Input"}/>
    <Pimg image={output} alt={"TODO"} caption={"Output"}/>
    <Phr/>
    <Pp>
        I revisited this project using rust with a combination of algorithmic solving and bruteforce solving. I tested multiple different combinations and found
        solving as much as possible using the Sudoku rules first, then brute-forcing the rest to be the fastest approach. It is able to solve most Sudokus in milliseconds.
    </Pp>
    <Pimg legacyNaturalWidth image={output2} alt={"TODO"} caption={"Unsolved and solved"}/>
    </ProjWrapper>;
}