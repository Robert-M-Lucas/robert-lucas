import { ReactNode } from "react"
import { Property } from "csstype"

export interface Props {
  muted?: boolean
  children?: ReactNode
  textAlign?: Property.TextAlign
}

export default function P_p({ muted = false, children, textAlign }: Props) {
  return (
    <p
      className={"mb-3" + (muted ? " text-muted" : "")}
      style={{ textAlign: textAlign ?? "justify" }}
    >
      {children}
    </p>
  )
}
