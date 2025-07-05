import P_img from "../../components/project-entry-utils/P_img.tsx"
import output2 from "./assets/output2.png"
import output from "./assets/output.png"
import input from "./assets/input.png"
import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"
import P_hr from "../../components/project-entry-utils/P_hr.tsx"

export default function SudokuSolverEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        I wanted to try this problem first by trying my own solutions and then
        researching other solutions online.
      </P_p>
      <P_p>
        For my solution I started by keeping track of which cells could contain
        which values by applying the Sudoku rules and, if a cell had only one
        possible value, placing a number there. While this did work quickly and
        efficiently for medium-difficulty puzzles, hard puzzles where after
        applying all the rules cells didn't have a single value wasn't as easy.
        My current solution is to guess a cell's value from its possible numbers
        and then see if that puzzle is solvable. This can then repeat for
        multiple guesses. Currently, this is a little bit buggy and sometimes so
        slow it doesn't reach the solution so I'm working on optimising it and,
        if it's still too slow, I will look online for existing solutions.
      </P_p>
      <P_img image={input} alt={"TODO"} caption={"Input"} />
      <P_img image={output} alt={"TODO"} caption={"Output"} />
      <P_hr />
      <P_p>
        I revisited this project using rust with a combination of algorithmic
        solving and bruteforce solving. I tested multiple different combinations
        and found solving as much as possible using the Sudoku rules first, then
        brute-forcing the rest to be the fastest approach. It is able to solve
        most Sudokus in milliseconds.
      </P_p>
      <P_img
        legacyNaturalWidth
        image={output2}
        alt={"TODO"}
        caption={"Unsolved and solved"}
      />
    </ProjWrapper>
  )
}
