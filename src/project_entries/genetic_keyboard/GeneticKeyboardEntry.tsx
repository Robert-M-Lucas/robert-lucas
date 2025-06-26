import ProjImage from "../../components/project_entry_utils/ProjImage.tsx";
import genetic_survival from "./assets/genetic_survival.png";
import keyboard from "./assets/keyboard.png";
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import ProjParagraph from "../../components/project_entry_utils/ProjParagraph.tsx";
import {CSHARP} from "../../routes/projects/SingleProjectPage/technology.tsx";
    
export const GeneticKeyboardProject: Project = {
    currently_working_on: false,
    name: "genetic_keyboard",
    title: "Genetic Keyboard",
    subtitle: "Using a genetic algorithm to create the perfect keyboard",
    ms_since_epoch: null,
    image: {image: keyboard, alt: "TODO"},
    technologies: [CSHARP],
    links: [
        {url: "https://github.com/Robert-M-Lucas/GeneticKeyboard", type: GITHUB_LINK}
    ],
    page: GeneticKeyboardEntryPage
};

function GeneticKeyboardEntryPage() {
    return <ProjWrapper>
    <ProjParagraph>
        This project was my first experience with genetic algorithms. This program generates a population of random keyboards, then it tests their speed
        on some sample text (James Bond: Casino Royale in this case) by evaluating finger travel time and finally it discards the worst half and combines the surviving ones
        to make the next generation of keyboards repeating the cycle.
    </ProjParagraph>

    <ProjImage image={keyboard} alt={"TODO"} caption={"Best keyboard layout according to the current version of my program"}/>

    <ProjParagraph>
        Currently this algorithm simply discards the worst x keyboards however to more closely mimic natural selection, I want to make the selection look more like this:
    </ProjParagraph>

    <ProjImage image={genetic_survival} alt={"TODO"} caption={"Best top-left to worst bottom-right; Black squares are eliminated."} source={{name: "Carykh", url: "https://www.youtube.com/watch?v=GOFws_hhZs8"}}/>

    <ProjParagraph>
        This could remove the need for my current solution of adding completely random keyboards in to each generation to prevent the algorithm from finding a local maximum
        or it could be used in conjunction with it.
    </ProjParagraph>

    <ProjParagraph>
        I also want to improve the inheritance algorithm as I believe it isn't too suitable for keyboards because it doesn't actually lead children to inherit good traits from parents.
        Currently, a random key position is selected and in that position, a key is selected randomly from either of the two parents. If both parents' keys have already been used, 
        a random key is placed there instead. I don't believe this is a great solution as the most important traits of a keyboard are the keys' positions relative to each other
        - something that isn't inherited well.
    </ProjParagraph>
    </ProjWrapper>;
}