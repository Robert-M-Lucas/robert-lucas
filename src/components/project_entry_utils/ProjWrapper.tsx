import { ReactNode } from "react"

export interface Props {
    children?: ReactNode
}

export default function ProjWrapper({ children }: Props) {
    return <>{children}</>
}
