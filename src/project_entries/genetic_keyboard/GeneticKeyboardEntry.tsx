import P_img from "../../components/project_entry_utils/P_img.tsx"
import genetic_survival from "./assets/genetic_survival.png"
import keyboard from "./assets/keyboard.png"
import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import { cSharpTechnology } from "../../routes/projects/SingleProjectPage/technology.tsx"

export const geneticKeyboardProject: Project = {
  name: "genetic_keyboard",
  title: "Genetic Keyboard",
  subtitle: "Using a genetic algorithm to create the perfect keyboard",
  msSinceEpoch: null,
  image: { image: keyboard, alt: "TODO" },
  technologies: [cSharpTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/GeneticKeyboard",
      type: githubLink,
    },
  ],
  page: GeneticKeyboardEntryPage,
}

function GeneticKeyboardEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        This project was my first experience with genetic algorithms. This
        program generates a population of random keyboards, then it tests their
        speed on some sample text (James Bond: Casino Royale in this case) by
        evaluating finger travel time and finally it discards the worst half and
        combines the surviving ones to make the next generation of keyboards
        repeating the cycle.
      </P_p>

      <P_img
        image={keyboard}
        alt={"TODO"}
        caption={
          "Best keyboard layout according to the current version of my program"
        }
      />

      <P_p>
        Currently this algorithm simply discards the worst x keyboards however
        to more closely mimic natural selection, I want to make the selection
        look more like this:
      </P_p>

      <P_img
        image={genetic_survival}
        alt={"TODO"}
        caption={
          "Best top-left to worst bottom-right; Black squares are eliminated."
        }
        source={{
          name: "Carykh",
          url: "https://www.youtube.com/watch?v=GOFws_hhZs8",
        }}
      />

      <P_p>
        This could remove the need for my current solution of adding completely
        random keyboards in to each generation to prevent the algorithm from
        finding a local maximum or it could be used in conjunction with it.
      </P_p>

      <P_p>
        I also want to improve the inheritance algorithm as I believe it isn't
        too suitable for keyboards because it doesn't actually lead children to
        inherit good traits from parents. Currently, a random key position is
        selected and in that position, a key is selected randomly from either of
        the two parents. If both parents' keys have already been used, a random
        key is placed there instead. I don't believe this is a great solution as
        the most important traits of a keyboard are the keys' positions relative
        to each other - something that isn't inherited well.
      </P_p>
    </ProjWrapper>
  )
}
