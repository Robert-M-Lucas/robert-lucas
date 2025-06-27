import Latex from "react-latex-next"
import "katex/dist/katex.min.css"

export interface Props {
  latex: string
}

export default function PLatex({ latex }: Props) {
  return (
    <>
      <Latex>${latex}$</Latex>
    </>
  )
}
