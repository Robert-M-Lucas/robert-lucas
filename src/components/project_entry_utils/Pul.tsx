export interface Props {
    children?: React.ReactNode
}

export default function Pul({ children }: Props) {
    return <ul>{children}</ul>
}
