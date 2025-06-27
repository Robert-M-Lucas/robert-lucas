export interface Props {
  children?: React.ReactNode
}

export default function PMono({ children }: Props) {
  return (
    <span
      className={"font-monospace rounded-1"}
      style={{ backgroundColor: "#EEEEEE", padding: "3px 7px 3px 7px" }}
    >
      {children}
    </span>
  )
}
