import P_img from "../../components/project_entry_utils/P_img.tsx"
import astar from "./assets/astar.webp"
import { googlePlayLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import {
  cSharpTechnology,
  unityTechnology,
  androidTechnology,
} from "../../routes/projects/SingleProjectPage/technology.tsx"

export const AstarProject: Project = {
  name: "astar",
  title: "A* Pathfinding",
  subtitle:
    "A simple program that demonstrates the A* pathfinding algorithm for PC and Android",
  msSinceEpoch: null,
  image: { image: astar, alt: "TODO" },
  technologies: [cSharpTechnology, unityTechnology, androidTechnology],
  links: [
    {
      url: "https://play.google.com/store/apps/details?id=com.RobertAppDev.AStar2D",
      type: googlePlayLink,
    },
  ],
  page: AstarEntryPage,
}

function AstarEntryPage() {
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
