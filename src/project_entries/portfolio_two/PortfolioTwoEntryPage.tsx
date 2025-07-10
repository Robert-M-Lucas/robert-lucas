import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"

export default function PortfolioTwoEntryPage() {
  return (
    <ProjWrapper>
      {/*<P_p>*/}
      {/*  This website was created to replace my{" "}*/}
      {/*  <P_a href={"https://robertlucas.pythonanywhere.com"}>*/}
      {/*    old portfolio website*/}
      {/*  </P_a>*/}
      {/*  , the ported write-up of which you can find{" "}*/}
      {/*  <PProjLink to={websiteProject}>here</PProjLink>. It was created using*/}
      {/*  Django, a templating framework for Python (i.e. a framework where the*/}
      {/*  server is responsible for generating individual webpages to send to the*/}
      {/*  client). This contrasts React's approach (with which this website is*/}
      {/*  created with) where the website is a single bundle sent to the client*/}
      {/*  (although some parts can be loaded dynamically if too big).*/}
      {/*</P_p>*/}

      {/*<P_p>*/}
      {/*  Django's approach creates a large amount of friction with dynamic*/}
      {/*  content as you are presented with the choice of either statically*/}
      {/*  rendering data into a template on the server, then sending this to the*/}
      {/*  client, or sending the client Javascript to load content dynamically.*/}
      {/*  The first option can cause first-page-load delays as the server fetches*/}
      {/*  data for the page, whereas the latter can be very difficult to*/}
      {/*  implement, as it must be done over conventional web requests, with all*/}
      {/*  the drawbacks, and hard to integrate libraries of vanilla JS.*/}
      {/*</P_p>*/}

      {/*<PCodeSrc*/}
      {/*  codeSrc={django_code}*/}
      {/*  language={"html"}*/}
      {/*  caption={"Old HTML template code for showing the project list"}*/}
      {/*/>*/}

      {/*<PCodeSrc*/}
      {/*  codeSrc={react_code}*/}
      {/*  language={"tsx"}*/}
      {/*  caption={"React code for the expanded project list view"}*/}
      {/*/>*/}

      {/*<P_p>*/}
      {/*  Not only does React code save time in creating dynamic UI, it also*/}
      {/*  encourages better design patterns as better abstractions are easier to*/}
      {/*  make.*/}
      {/*</P_p>*/}

      {/*<PCodeSrc*/}
      {/*  codeSrc={django_image}*/}
      {/*  language={"html"}*/}
      {/*  caption={"Old HTML template code for inserting an image"}*/}
      {/*/>*/}

      {/*<PCodeSrc*/}
      {/*  codeSrc={react_image}*/}
      {/*  language={"tsx"}*/}
      {/*  caption={"The current equivalent"}*/}
      {/*/>*/}

      {/*<P_p>*/}
      {/*  Finally, the vast number of React-compatible libraries allow the easy*/}
      {/*  inclusion of additional functionality (such as the addition of the above*/}
      {/*  code blocks) whereas in Django, the extra effort required to add these*/}
      {/*  led me to use images instead.*/}
      {/*</P_p>*/}
    </ProjWrapper>
  )
}
