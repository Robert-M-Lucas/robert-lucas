import P_img from "../../components/project-entry-utils/P_img.tsx"
import astar from "./assets/astar.webp"
import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"

export default function AstarEntryPage() {
  return (
    <ProjWrapper>
      <P_img image={astar} alt={"TODO"} />
      <P_p>
        This project was meant to just be me learning how the algorithm works
        however in making it I realised I could easily make it into a
        demonstration of the algorithm.
      </P_p>
      <P_p>
        While overall this project ended up being simpler than I expected there
        were a few Unity-related quirks I had to work around. In Unity normally
        your code goes in the 'Update()' method however this is tied to
        framerate. To make it faster and to make the time reading somewhat
        accurate I moved the pathfinding calculations to a separate thread which
        required a buffer for graphical updates. Every tile also has text on it
        showing the current fscore and gscore which caused low framerates. To
        combat this I made the text only load in when zoomed in and only render
        text within the screen.
      </P_p>
      <P_p muted>
        A GitHub isn't provided as the latest version of the source code has
        been lost.
      </P_p>
    </ProjWrapper>
  )
}
