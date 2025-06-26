import ProjImage from "../../components/project_entry_utils/ProjImage.tsx";
import enigma_data from "./assets/enigma_data.png";
import python from "./assets/python.png";
import enigma from "./assets/enigma.png";
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import ProjParagraph from "../../components/project_entry_utils/ProjParagraph.tsx";
import {CSHARP, UNITY} from "../../routes/projects/SingleProjectPage/technology.tsx";
import ProjLink from "../../components/project_entry_utils/ProjLink.tsx";
    
export const EnigmaProject: Project = {
    currently_working_on: false,
    name: "enigma",
    title: "Enigma Simulator",
    subtitle: "An enigma simulator with support for almost all the features of the real machine",
    ms_since_epoch: null,
    image: {image: enigma, alt: "TODO"},
    technologies: [CSHARP, UNITY],
    links: [
        {url: "https://github.com/Robert-M-Lucas/Enigma-Simulator", type: GITHUB_LINK}
    ],
    page: EnigmaEntryPage
};

function EnigmaEntryPage() {
    return <ProjWrapper>

    <ProjImage image={enigma} alt={"TODO"}/>
    <ProjParagraph>
        I created this project to learn more about how the Enigma machine worked so the UI is intentionally bare-bones. It was one of the simpler projects I've done however
        debugging the encoding was a nightmare and getting the machine to work backwards when you press backspace was difficult too especially with the way the rotors turn
        each other.
    </ProjParagraph>
    <ProjParagraph>
        For the rotor wiring's, I found strings describing them on
        <ProjLink href="https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables">Wikipedia</ProjLink> and wrote code to convert
        them into integer arrays representing how letters map to each other.
    </ProjParagraph>
    <ProjImage image={python} alt={"TODO"} caption={"Python program to convert rotor wiring strings to integer arrays"}/>
    <ProjImage image={enigma_data} alt={"TODO"} caption={"All the data relating to the Enigma"}/>
    <ProjParagraph>
        To get the encoding forwards you just get the array of the rotor you want and get the new number at the current number's index in that array. Backwards this is a little
        more complicated as you have to find the index of the input but a simple linear search does the trick.
    </ProjParagraph>
    </ProjWrapper>;
}