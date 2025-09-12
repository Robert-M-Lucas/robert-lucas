import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"
import P_a from "../../components/project-entry-utils/P_a.tsx"
import { websiteProject } from "../website/website.tsx"
import PProjLink from "../../components/project-entry-utils/PProjLink.tsx"
import PCodeSrc from "../../components/project-entry-utils/p-code/PCodeSrc.tsx"
import code from "./assets/code.png"
import django_image from "./assets/django_image.txt"
import react_image from "./assets/react_image.txt"
import PLatex from "../../components/project-entry-utils/PLatex.tsx"
import P_img from "../../components/project-entry-utils/P_img.tsx"
import P_h1 from "../../components/project-entry-utils/headings/P_h1.tsx"
import P_h2 from "../../components/project-entry-utils/headings/P_h2.tsx"
import P_h3 from "../../components/project-entry-utils/headings/P_h3.tsx"

export default function PortfolioTwoEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        This website was created to replace my{" "}
        <P_a href={"https://robertlucas.pythonanywhere.com"}>
          old portfolio website
        </P_a>{" "}
        (link may be inactive), the ported write-up of which you can find{" "}
        <PProjLink to={websiteProject}>here</PProjLink>.
      </P_p>

      <P_p>
        One of the first languages I learnt to code was Python, and as I was
        learning it I stumbled across Django - a Python web framework with
        static pages and templating. In hindsight, this was quite a bad starting
        point for web development as more abstracted frameworks such as React.
      </P_p>

      <P_p>
        As there is more friction between templating code and HTML than in
        frameworks such as React, I very often found myself copy-pasting code
        making refactoring a nightmare, not to mention the JavaScript which had
        to manually reference HTML elements and, of course, could not interact
        with the templating logic. The end result of all of this was a spaghetti
        of relationships that would break when I wanted to make small tweaks, or
        I simply wouldn't implement some features due to the time requirement.
      </P_p>

      <PCodeSrc
        codeSrc={django_image}
        language={"html"}
        caption={"Old HTML template code for inserting an image"}
      />

      <PCodeSrc
        codeSrc={react_image}
        language={"tsx"}
        caption={"The current equivalent"}
      />

      <P_p>
        Other than massive improvements in code structuring, being able to
        easily integrate code libraries has greatly improved the quality of the
        website as in the old website, things that I didn't have time to make
        such as proper code blocks would be replaced by easier solutions such as
        images of code, which are harder to modify or style.
      </P_p>

      <div className={"text-center"}>
        <PLatex
          latex={
            "\\int_{0}^{\\infty} e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}"
          }
        />
        <P_p textAlign={"center"} muted>
          Latex rendering example
        </P_p>
      </div>

      <P_img
        image={code}
        alt={"Image of code from this website"}
        caption={"Try clicking on me!"}
      />

      <P_h1>This heading will appear in the contents</P_h1>
      <P_h2>Subheading - it's all automatic</P_h2>
      <P_h3>SubSubheading</P_h3>
      <P_h1>Other heading</P_h1>
    </ProjWrapper>
  )
}
