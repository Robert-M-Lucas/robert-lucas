export interface Props {
  children?: React.ReactNode
}

export default function P_li({ children }: Props) {
  return <li>{children}</li>
}
