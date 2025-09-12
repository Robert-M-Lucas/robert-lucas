import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"
import P_h1 from "../../components/project-entry-utils/headings/P_h1.tsx"
import P_h2 from "../../components/project-entry-utils/headings/P_h2.tsx"

export default function HMailEntryPage() {
  return (
    <ProjWrapper>
      <P_h1>Concept</P_h1>
      <P_p>Todo</P_p>
      <P_h2>Weaknesses</P_h2>


      <P_h1>Protocol</P_h1>
      <P_h2>Inter-Server Protocol</P_h2>
      <P_h2>Server-Client Protocol</P_h2>


      <P_h1>Implementations</P_h1>
      <P_h2>Server</P_h2>
      <P_h2>Client</P_h2>

    </ProjWrapper>
  )
}
