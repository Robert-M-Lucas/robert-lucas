
export interface Props {
    muted?: boolean;
    children?: React.ReactNode
}

export default function ProjParagraph({muted=false, children}: Props) {
    return <p className={"mb-3" + (muted ? " text-muted" : "")} style={{textAlign: "justify"}}>{children}</p>
}