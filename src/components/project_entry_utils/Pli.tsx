
export interface Props {
    children?: React.ReactNode
}

export default function Pli({children}: Props) {
    return <li>{children}</li>
}