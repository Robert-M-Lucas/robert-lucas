import P_img from "../../components/project_entry_utils/P_img.tsx"
import timer from "./assets/timer.png"
import minesweeper from "./assets/minesweeper.jpg"
import minesweeper_combined from "./assets/minesweeper_combined.png"
import {
  GITHUB_LINK,
  GOOGLE_PLAY_LINK,
} from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import {
  CSHARP,
  UNITY,
  ANDROID,
} from "../../routes/projects/SingleProjectPage/technology.tsx"

export const MinesweeperProject: Project = {
  name: "minesweeper",
  title: "Infinite Minesweeper",
  subtitle: "Minesweeper on an infinite plane",
  ms_since_epoch: null,
  image: { image: minesweeper, alt: "TODO" },
  technologies: [CSHARP, UNITY, ANDROID],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/InfiniteMinesweeper",
      type: GITHUB_LINK,
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.InfiniteMinesweeper",
      type: GOOGLE_PLAY_LINK,
    },
  ],
  page: MinesweeperEntryPage,
}

function MinesweeperEntryPage() {
  return (
    <ProjWrapper>
      <P_img
        image={minesweeper_combined}
        alt={"TODO"}
        caption={"Screenshots from the game"}
      />
      <P_p>
        This was one of my favourite projects as I loved the concept and it was
        quite challenging to implement. Optimising this game was one of the most
        difficult parts to code as due to it being an infinite plane you can't
        simply load all of the tiles at once. This lead me to create a system
        that figures out what the player can and can't see and load the tiles
        accordingly. Another issue was tile opening as when a large area would
        open it would sometimes leave the screen area and stop opening. To solve
        this I stored some data about the places where it stopped opening tiles
        so that if the player ever panned in that direction it would open the
        tiles as the area loaded resulting in a seamless experience for the
        player.
      </P_p>
      <P_p>
        Another challenge was the save system which was difficult to implement
        as the board could expand in any direction, and you couldn't use some
        sort of array as it'd need to expand in every direction. I ended up
        taking inspiration from how Minecraft's save system works by storing
        chunks as files containing their coordinates in the file name and stored
        it as a serialised dictionary with the chunks position as the key and
        the data as the value. While this could eventually slow down,
        dictionaries are very efficient at finding values from keys (O-log n)
        and in my testing it never became noticeably slow.
      </P_p>
      <P_p>
        One subtle feature that I'm quite proud of is the way I display the
        timer, score and highscore with an effect that looks like a
        seven-segment display. I created this effect by having a red segment
        font displaying the data in front of the same font but dark red
        displaying all 8s to make it look like a segment is there but turned
        off.
      </P_p>
      <P_img image={timer} alt={"TODO"} caption={"In-game timer"} />
      <P_p>
        One thing that I would change if I were to make this again is not making
        it in Unity or at least not making it with sprites the way I did. Each
        sprite in Unity has some overhead as it is a separate object that can do
        more than I need it to do which causes some performance issues and input
        latency. This type of game is far better suited to a simple 2D game
        engine where you draw images on the screen with no camera or
        gameobjects.
      </P_p>
    </ProjWrapper>
  )
}
