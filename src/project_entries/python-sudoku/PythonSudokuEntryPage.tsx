import P_img from "../../components/project_entry_utils/P_img.tsx"
import rust_timings from "./assets/rust_timings.png"
import timings from "./assets/timings.png"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import P_a from "../../components/project_entry_utils/P_a.tsx"
import P_h1 from "../../components/project_entry_utils/P_h1.tsx"
import P_h3 from "../../components/project_entry_utils/P_h3.tsx"
import P_h2 from "../../components/project_entry_utils/P_h2.tsx"
import P_ul from "../../components/project_entry_utils/P_ul.tsx"
import P_li from "../../components/project_entry_utils/P_li.tsx"

export default function PythonSudokuEntryPage() {
  return (
    <ProjWrapper>
      <P_h1>Introduction</P_h1>
      <P_p>
        I was given a challenge to simply solve Sudoku puzzles as quickly as
        possible. In Python. While I initially disliked this idea as Python is
        very, very&nbsp;
        <P_a href="https://camo.githubusercontent.com/0cb1c98bd27100216504434d3cf05ff06e4d8e8289fca4fd76aee490f6463170/68747470733a2f2f6e696b6c61732d686565722e6769746875622e696f2f73706565642d636f6d70617269736f6e2f6173736574732f6c61746573742f636f6d62696e65645f726573756c74732e706e67">
          slow
        </P_a>
        , I ended up really enjoying it.
      </P_p>
      <P_p>
        It is worth noting that for this challenge the only non-builtin library
        I could use was Numpy and that only function execution time was
        measured, import time not included. This allowed me to generate and
        cache some tables in advance with no impact on my final time.
      </P_p>
      <P_h2>Terminology</P_h2>
      <P_ul>
        <P_li>Cell - A place where a number is or can go</P_li>
        <P_li>Square - One of nine 3x3 squares of cells</P_li>
        <P_li>Group - A cell's row, column and square</P_li>
      </P_ul>
      <P_h1>Algorithmic Approaches</P_h1>
      <P_h2>Hill Climbing</P_h2>
      <P_p>
        One set of approaches to solving this problem is hill climbing
        algorithms. To use these, you must define a function for scoring the
        current state and a function for obtaining adjacent states.
      </P_p>
      <P_p>
        For the scoring function, I counted the number of 'conflicts' in the
        given state, that is, counted the number of numbers that are in the same
        row, column or square as themselves. E.g. if three 9s were in the same
        column, but the solution was perfect other than that, the state would
        get a score of 3 - with lower scores being perceived as being better. I
        defined adjacent states as being states with two numbers switched so to
        generate a random adjacent state you would swap two random numbers
        (excluding the ones fixed by the input) in the current state.
      </P_p>
      <P_p>
        Two simple implementations for hill climbing are either randomly
        selecting an adjacent state until one is found with a better score than
        the current one then moving to it and repeating or generating all the
        adjacent states and their corresponding scores, then moving to the best
        state. For both of these implementations, I found the hill climbing to
        be very slow (with only moderate optimisations) and I found that they
        would very rarely reach a solved state (for the hardest puzzles),
        instead getting stuck at local maxima very near a solved state.
      </P_p>
      <P_h3>Simulated Annealing</P_h3>
      <P_p>
        Simulated Annealing functions by having a decreasing 'temperature' value
        which it uses to probabilistically move between adjacent states. At a
        maximum temperature, all adjacent states are equally likely to be moved
        to with the bias shifting towards states with better scores as
        temperature decreases until, at a minimum temperature, the algorithm
        only moves towards the best adjacent score. This, unfortunately, only
        improved the hill climbing algorithm but didn't allow it to reliably
        solve hard puzzles and, at this point, I was making far more progress
        with backtracking.
      </P_p>
      <P_h2 contentsTitle={"Backtracking"}>
        Backtracking - Final Implementation
      </P_h2>
      <P_p>
        My final implementation used a backtracking approach, that is, guessing
        one cell at a time and when you reach a dead end going back a layer and
        trying again. If you've tried all options on the current layer and the
        layer before, go back two layers and so on. In my final solution,
        however, the algorithm would only guess around 6 cells as so much was
        being filled in by finding cells that could only possibly contain one
        value.
      </P_p>
      <P_h3>In-place Modifications</P_h3>
      <P_p>
        As this algorithm uses a depth-first backtracking approach, the solution
        grid can be passed by reference as each recursive function call simply
        needs to store what changes it made and undo them when returning. This
        is far faster than copying the grid as memory allocation is expensive
        however it isn't possible to implement for the possibilities grid
        mentioned below as there is no way to undo the removal of possibilities
        as it is a 'lossy' process.
      </P_p>
      <P_h3>Storing Possibilities</P_h3>
      <P_p>
        By storing which values each cell can contain, not just the ones they
        currently do a large number of optimisations are gained. The most
        obvious of these are not trying to fill in cells with values they can't
        have and not further exploring the current branch of the search tree if
        a cell hasn't been assigned a value and has no possible values. All
        further optimisations are only possible because of this.
      </P_p>
      <P_h3>Minimum Remaining Value</P_h3>
      <P_p>
        Instead of picking which cell to fill in at random or simply from
        top-left to bottom-right the next cell can be selected by picking the
        cell with the fewest possible values. While, ordinarily, this would not
        affect search time as the size of the search tree is the same (e.g.
        changing 5×3×4×2 to 2×3×4×5), by having a lower branching factor
        earlier, when a branch is cut off the search tree due to other
        optimisations it will remove a larger proportion of the search tree.
      </P_p>
      <P_h3>"Hidden Singles"</P_h3>
      <P_p>
        "Hidden Singles" are cells with a known value as no other cells in a
        given cell's row, column or square can contain that value. There are
        other, more complex variations of this such as if two cells in the same
        group have the same two possible values and no other possible values, no
        other cells in the group can have either of those values for obvious
        reasons. I tried implementing some of these other techniques but as the
        solution was already so well optimised, they only increased the time
        taken to find the solution.
      </P_p>
      <P_h1>✨ Python Magic ✨</P_h1>
      <P_h2>Numpy vs Lists</P_h2>
      <P_p>
        Initially, I used Numpy arrays everywhere as the example solutions were
        formatted as Numpy arrays and as Numpy arrays are generally understood
        to be faster than Python lists as they (and a large number of
        operations) on them are implemented in C, the operations also supporting
        vectorisation. After some experimentation, I found that Numpy arrays
        were faster in some contexts and Python lists in others.
      </P_p>
      <P_p>
        <i>
          <span className="text-muted">
            "Non-core library calls have significant overhead, so single-element
            accesses of numpy arrays are actually about 5x slower than the
            equivalent Python list accesses. [...]"
          </span>
        </i>{" "}
        -&nbsp;
        <P_a href="https://www.reddit.com/r/Python/comments/qcky3m/comment/hhgp8nd">
          this comment
        </P_a>{" "}
        helpfully explained why this might be and my testing revealed consistent
        results with Python lists being faster for frequent assignments and
        Numpy being faster for SIMD-like instructions i.e. ones that can be
        vectorised.
      </P_p>
      <P_p>
        To make the most of Numpy, the only non-builtin import I could use for
        this challenge, I created masks for every cell-value combination to make
        removing all possibilities of a number from the group of a cell after it
        has been filled with that number as easy as and-ing the current
        possibilities grid with the relevant mask. And, of course, this is
        exactly the use case that Numpy excels in.
      </P_p>
      <P_h2>Static Arrays</P_h2>
      <P_p>
        Surprisingly in some cases, because of just how slow Python is, it was
        faster to generate an array of solutions to an arithmetic operation
        where the input is the array index and paste it into the Python file
        rather than performing repetitive (but very simple) operations.
      </P_p>
      <P_h1>Conclusion</P_h1>
      <P_img
        image={timings}
        alt={"TODO"}
        caption={"540µ per puzzle! In Python!"}
      />
      <P_p>
        Being challenged to optimise an algorithm in Python, a famously&nbsp;
        <P_a href="https://camo.githubusercontent.com/0cb1c98bd27100216504434d3cf05ff06e4d8e8289fca4fd76aee490f6463170/68747470733a2f2f6e696b6c61732d686565722e6769746875622e696f2f73706565642d636f6d70617269736f6e2f6173736574732f6c61746573742f636f6d62696e65645f726573756c74732e706e67">
          slow
        </P_a>
        &nbsp;language, was a surprisingly fun challenge as it forced me to
        focus on algorithmic improvements as opposed to data structure and other
        niche optimisations. This implementation ended up being ~6x faster than
        &nbsp;
        <P_a href="sudoku_solver.html">my other solution</P_a> created a while
        ago in Rust - a low-level language! To give some credit to my old
        implementation, I selected the simplest backtracking algorithm for that
        project and instead focused on improving speed through Rust's data
        structures and more niche optimisations so that project did have
        different goals and thus different outcomes.
      </P_p>
      <P_p>
        The Python-specific optimisations were a fun but completely worthless
        endeavor giving me insights into the way the Python interpreter is
        implemented and its weird performance quirks which will be completely
        useless to me as Python should not be used for any performant code.
      </P_p>
      <P_p>
        I might revisit this project to make some further improvements as I
        believe that I could still make some algorithmic improvements though
        probably not to the Backtracking algorithm as it only calls the
        recursive function an average of 6 times for even the hardest puzzles so
        any improvements that would save me recursion depth would probably take
        more time to work out than they're worth. I would, however, like to
        revisit the Hill Climbing approaches as I switched completely to
        Backtracking relatively early on as it was far more promising not giving
        me time to try more approaches to Hill Climbing. I never, for example,
        tried different scoring functions, different ways of getting adjacent
        states, or different ways for interpolating the biases for the Annealing
        approach however given the speed of the Backtracking approach and how
        few recursions it needs to solve the hardest puzzles, I don't believe a
        Hill Climbing approach will be able to beat it.
      </P_p>
      <P_p>
        Were I to revisit this, however, I would revisit it in Rust as a line
        profiler revealed that my performance bottleneck was becoming Python -
        not the algorithm. I also feel that it would be fun to revisit this from
        a low-level optimisation angle.
      </P_p>
      <P_h1>Rewrite it in Rust</P_h1>
      <P_p>
        I quickly rewrote the code in Rust removing all the Python-specific
        optimisations with no low-level optimisations. As expected, the Rust
        version ran ~70x faster than the Python one resulting in a ~450x
        improvement over the previous implementation that will be referenced in
        the conclusion.
      </P_p>
      <P_img
        image={rust_timings}
        alt={"TODO"}
        caption={
          "Note that this is a test set containing puzzles of various difficulties"
        }
      />
    </ProjWrapper>
  )
}
