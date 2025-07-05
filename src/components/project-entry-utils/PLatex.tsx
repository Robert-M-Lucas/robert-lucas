import "katex/dist/katex.min.css"
import { lazy, Suspense } from "react"

export interface Props {
  latex: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Latex = lazy(() => import("react-latex-next"))

export default function PLatex({ latex }: Props) {
  return (
    <>
      <Suspense>
        <Latex>${latex}$</Latex>
      </Suspense>
    </>
  )
}
