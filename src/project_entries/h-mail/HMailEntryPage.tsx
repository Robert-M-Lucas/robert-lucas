import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"
import P_h1 from "../../components/project-entry-utils/headings/P_h1.tsx"
import P_h2 from "../../components/project-entry-utils/headings/P_h2.tsx"
import P_h3 from "../../components/project-entry-utils/headings/P_h3.tsx"

export default function HMailEntryPage() {
  return (
    <ProjWrapper>
      {/*Concept*/}
      <>
        <P_h1>Concept</P_h1>
        <P_p>Todo</P_p>

        <P_h2>Concept Flaws</P_h2>
        <P_p>Todo</P_p>
      </>

      {/*Protocol*/}
      <>
        <P_h1>Protocol</P_h1>
        <P_p>Todo</P_p>

        <P_h2>Inter-Server Protocol</P_h2>
        <P_p>Todo</P_p>

        <P_h2>Server-Client Protocol</P_h2>
        <P_p>Todo</P_p>
      </>

      {/*Implementations*/}
      <>
        <P_h1>Implementations</P_h1>
        <P_p>Todo</P_p>

        <P_h2>Server</P_h2>
        <P_p>Todo</P_p>

        <P_h3>Security</P_h3>
        <P_p>Todo</P_p>

        <P_h2>Client</P_h2>
        <P_p>Todo</P_p>
      </>

      {/*Other*/}
      <>
        <P_h1>Other</P_h1>
        <P_h2>Generating Documentation</P_h2>
        <P_p>Todo</P_p>

        <P_h2>Using Nix(OS)</P_h2>
        <P_p>Todo</P_p>
      </>
    </ProjWrapper>
  )
}
