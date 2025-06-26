import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import django_image from "./assets/django_image.txt"
import django_code from "./assets/djanco_code.txt"
import react_image from "./assets/react_image.txt"
import react_code from "./assets/react_code.txt"

import {
  BOOTSTRAP,
  CSS,
  HTML,
  JAVASCRIPT,
  REACT,
  TYPESCRIPT,
} from "../../routes/projects/SingleProjectPage/technology.tsx"
import {
  createCustomLink,
  GITHUB_LINK,
} from "../../routes/projects/SingleProjectPage/links.tsx"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import Pp from "../../components/project_entry_utils/Pp.tsx"
import Pa from "../../components/project_entry_utils/Pa.tsx"
import PLink from "../../components/project_entry_utils/PLink.tsx"
import { getProjectPath } from "../../router.tsx"
import { WebsiteProject } from "../website/WebsiteEntry.tsx"
import PcodeSrc from "../../components/project_entry_utils/PcodeSrc.tsx"

export const PortfolioTwoProject: Project = {
  currently_working_on: true,
  currently_writing: true,
  name: "portfolio_two",
  title: "Portfolio Website (This Website)",
  short_title: "Portfolio Website",
  subtitle: "This website, created to replace my old portfolio website",
  ms_since_epoch: 1750860747000,
  page: PortfolioTwoEntryPage,
  technologies: [TYPESCRIPT, REACT, BOOTSTRAP, HTML, JAVASCRIPT, CSS],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/robert-lucas",
      type: GITHUB_LINK,
    },
    {
      url: "https://robertlucas.pythonanywhere.com",
      type: createCustomLink("Old Website"),
    },
  ],
}

function PortfolioTwoEntryPage() {
  return (
    <ProjWrapper>
      <Pp>
        This website was created to replace my{" "}
        <Pa href={"https://robertlucas.pythonanywhere.com"}>
          old portfolio website
        </Pa>
        , the ported write-up of which you can find{" "}
        <PLink to={getProjectPath(WebsiteProject.name)}>here</PLink>. It was
        created using Django, a templating framework for Python (i.e. a
        framework where the server is responsible for generating individual
        webpages to send to the client). This contrasts React's approach (with
        which this website is created with) where the website is a single bundle
        sent to the client (although some parts can be loaded dynamically if too
        big).
      </Pp>

      <Pp>
        Django's approach creates a large amount of friction with dynamic
        content as you are presented with the choice of either statically
        rendering data into a template on the server, then sending this to the
        client, or sending the client Javascript to load content dynamically.
        The first option can cause first-page-load delays as the server fetches
        data for the page, whereas the latter can be very difficult to
        implement, as it must be done over conventional web requests, with all
        the drawbacks, and hard to integrate libraries of vanilla JS.
      </Pp>

      <PcodeSrc
        codeSrc={django_code}
        language={"html"}
        caption={"Old HTML template code for showing the project list"}
      />

      <PcodeSrc
        codeSrc={react_code}
        language={"tsx"}
        caption={"React code for the expanded project list view"}
      />

      <Pp>
        Not only does React code save time in creating dynamic UI, it also
        encourages better design patterns as better abstractions are easier to
        make.
      </Pp>

      <PcodeSrc
        codeSrc={django_image}
        language={"html"}
        caption={"Old HTML template code for inserting an image"}
      />

      <PcodeSrc
        codeSrc={react_image}
        language={"tsx"}
        caption={"The current equivalent"}
      />

      <Pp>
        Finally, the vast number of React-compatible libraries allow the easy
        inclusion of additional functionality (such as the addition of the above
        code blocks) whereas in Django, the extra effort required to add these
        led me to use images instead.
      </Pp>
    </ProjWrapper>
  )
}
