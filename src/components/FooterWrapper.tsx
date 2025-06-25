import {ReactNode} from "react";
import {Footer} from "./Footer.tsx";

export interface Props {
    children?: ReactNode;
}

export default function FooterWrapper({children}: Props) {
    return <div className="d-flex flex-column justify-content-between" style={{minHeight: "100vh", width: "100vw", maxWidth: "100%"}}>
        <div>{children}</div>
        <Footer/>
    </div>;
}