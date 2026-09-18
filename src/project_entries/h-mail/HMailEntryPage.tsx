import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"

export default function HMailEntryPage() {
  return (
    <ProjWrapper>
      <>
        <P_p>
          While this is being written, check out the{" "}
          <a
            href={
              "https://github.com/Robert-M-Lucas/h-mail/blob/master/docs/README.md"
            }
            target={"_blank"}
          >
            documentation
          </a>{" "}
          which covers implementing a compatible server, and therefore describes
          how H-Mail functions. I recommend going through the 'Flows'
          documentation in order.
        </P_p>
      </>
      {/*/!*Concept*!/*/}
      {/*<>*/}
      {/*  <P_h1>Concept</P_h1>*/}
      {/*  <P_p>Todo</P_p>*/}

      {/*  <P_h2>Concept Flaws</P_h2>*/}
      {/*  <P_p>Todo</P_p>*/}
      {/*</>*/}

      {/*/!*Protocol*!/*/}
      {/*<>*/}
      {/*  <P_h1>Protocol</P_h1>*/}
      {/*  <P_p>Todo</P_p>*/}

      {/*  <P_h2>Inter-Server Protocol</P_h2>*/}
      {/*  <P_p>Todo</P_p>*/}

      {/*  <P_h2>Server-Client Protocol</P_h2>*/}
      {/*  <P_p>Todo</P_p>*/}
      {/*</>*/}

      {/*/!*Implementations*!/*/}
      {/*<>*/}
      {/*  <P_h1>Implementations</P_h1>*/}
      {/*  <P_p>Todo</P_p>*/}

      {/*  <P_h2>Server</P_h2>*/}
      {/*  <P_p>Todo</P_p>*/}

      {/*  <P_h3>Security</P_h3>*/}
      {/*  <P_p>Todo</P_p>*/}

      {/*  <P_h2>Client</P_h2>*/}
      {/*  <P_p>Todo</P_p>*/}
      {/*</>*/}

      {/*/!*Other*!/*/}
      {/*<>*/}
      {/*  <P_h1>Other</P_h1>*/}
      {/*  <P_h2>Generating Documentation</P_h2>*/}
      {/*  <P_p>Todo</P_p>*/}

      {/*  <P_h2>Using Nix(OS)</P_h2>*/}
      {/*  <P_p>Todo</P_p>*/}
      {/*</>*/}
    </ProjWrapper>
  )
}
