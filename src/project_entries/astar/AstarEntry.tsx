import Pimg from "../../components/project_entry_utils/Pimg.tsx"
import astar from "./assets/astar.webp"
import { GOOGLE_PLAY_LINK } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import Pp from "../../components/project_entry_utils/Pp.tsx"
import {
  CSHARP,
  UNITY,
  ANDROID,
} from "../../routes/projects/SingleProjectPage/technology.tsx"

export const AstarProject: Project = {
  name: "astar",
  title: "A* Pathfinding",
  subtitle:
    "A simple program that demonstrates the A* pathfinding algorithm for PC and Android",
  ms_since_epoch: null,
  image: { image: astar, alt: "TODO" },
  technologies: [CSHARP, UNITY, ANDROID],
  links: [
    {
      url: "https://play.google.com/store/apps/details?id=com.RobertAppDev.AStar2D",
      type: GOOGLE_PLAY_LINK,
    },
  ],
  page: AstarEntryPage,
}

function AstarEntryPage() {
  return (
    <ProjWrapper>
      <Pimg image={astar} alt={"TODO"} />
      <Pp>
        This project was meant to just be me learning how the algorithm works
        however in making it I realised I could easily make it into a
        demonstration of the algorithm.
      </Pp>
      <Pp>
        While overall this project ended up being simpler than I expected there
        were a few Unity-related quirks I had to work around. In Unity normally
        your code goes in the 'Update()' method however this is tied to
        framerate. To make it faster and to make the time reading somewhat
        accurate I moved the pathfinding calculations to a separate thread which
        required a buffer for graphical updates. Every tile also has text on it
        showing the current fscore and gscore which caused low framerates. To
        combat this I made the text only load in when zoomed in and only render
        text within the screen.
      </Pp>
      <Pp muted>
        A GitHub isn't provided as the latest version of the source code has
        been lost.
      </Pp>
    </ProjWrapper>
  )
}
