import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import P_a from "../../components/project_entry_utils/P_a.tsx"

export default function PiEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        I made this program after me teacher told me about this as I thought it
        was very strange that pi showed up in a physics simulation. This is a
        very inefficient way to calculate pi, but I wrote it in C++ to make it
        as fast as possible. I found that{" "}
        <P_a href="https://www.youtube.com/watch?v=jsYwFizhncE">
          this YouTube video
        </P_a>{" "}
        gives an excellent explanation of the phenomenon.
      </P_p>
      <P_p>
        This was mostly a maths problem as I needed to rearrange the equations
        for elastic collisions to give me the output I wanted.
      </P_p>
    </ProjWrapper>
  )
}
