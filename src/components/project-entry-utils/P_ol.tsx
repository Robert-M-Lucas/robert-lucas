export interface Props {
  children?: React.ReactNode
}

export default function P_ol({ children }: Props) {
  return <ol>{children}</ol>
}
