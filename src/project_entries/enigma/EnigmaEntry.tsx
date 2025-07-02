import P_img from "../../components/project_entry_utils/P_img.tsx"
import enigma_data from "./assets/enigma_data.png"
import python from "./assets/python.png"
import enigma from "./assets/enigma.png"
import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import {
  cSharpTechnology,
  unityTechnology,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import P_a from "../../components/project_entry_utils/P_a.tsx"

export const enigmaProject: Project = {
  name: "enigma",
  title: "Enigma Simulator",
  subtitle:
    "An enigma simulator with support for almost all the features of the real machine",
  msSinceEpoch: null,
  image: { image: enigma, alt: "TODO" },
  technologies: [cSharpTechnology, unityTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/Enigma-Simulator",
      type: githubLink,
    },
  ],
  page: EnigmaEntryPage,
}

function EnigmaEntryPage() {
  return (
    <ProjWrapper>
      <P_img image={enigma} alt={"TODO"} />
      <P_p>
        I created this project to learn more about how the Enigma machine worked
        so the UI is intentionally bare-bones. It was one of the simpler
        projects I've done however debugging the encoding was a nightmare and
        getting the machine to work backwards when you press backspace was
        difficult too especially with the way the rotors turn each other.
      </P_p>
      <P_p>
        For the rotor wiring's, I found strings describing them on
        <P_a href="https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables">
          Wikipedia
        </P_a>{" "}
        and wrote code to convert them into integer arrays representing how
        letters map to each other.
      </P_p>
      <P_img
        legacyNaturalWidth
        image={python}
        alt={"TODO"}
        caption={
          "Python program to convert rotor wiring strings to integer arrays"
        }
      />
      <P_img
        legacyNaturalWidth
        image={enigma_data}
        alt={"TODO"}
        caption={"All the data relating to the Enigma"}
      />
      <P_p>
        To get the encoding forwards you just get the array of the rotor you
        want and get the new number at the current number's index in that array.
        Backwards this is a little more complicated as you have to find the
        index of the input but a simple linear search does the trick.
      </P_p>
    </ProjWrapper>
  )
}
