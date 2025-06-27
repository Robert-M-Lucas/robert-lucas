export interface Props {
  children?: React.ReactNode
}

export default function Pol({ children }: Props) {
  return <ol>{children}</ol>
}
