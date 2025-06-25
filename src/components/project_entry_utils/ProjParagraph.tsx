
export interface Props {
    children?: React.ReactNode
}

export default function ProjParagraph({children}: Props) {
    return <p className="mb-3">{children}</p>
}