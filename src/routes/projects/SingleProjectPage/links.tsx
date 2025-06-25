import {JSX} from "react";
import {Github, GooglePlay} from "react-bootstrap-icons";
import {Button} from "react-bootstrap";

export interface LinkType {
    getTextElement: (url: string) => JSX.Element;
    getButtonElement: (url: string) => JSX.Element;
}

export interface ProjectLink {
    url: string;
    type: LinkType;
}

export const GOOGLE_PLAY_LINK: LinkType = {
    getTextElement: (url: string) => <a
        className={"fw-bold"}
        style={{color: "#46af1c"}} href={url} target={"_blank"}>
        Google Play
    </a>,
    getButtonElement: (url: string) => <Button variant="success" href={url} target="_blank">
        <div className="d-flex flex-row align-items-center">
            <GooglePlay/><span className="ps-2">Google Play</span>
        </div>
    </Button>
}

export const GITHUB_LINK: LinkType = {
    getTextElement: (url: string) => <a
        className={"fw-bold"}
        style={{color: "#af8d1c"}} href={url} target={"_blank"}>
        Github
    </a>,
    getButtonElement: (url: string) => <Button variant="warning" href={url} target="_blank">
        <div className="d-flex flex-row align-items-center">
            <Github/><span className="ps-2">Github</span>
        </div>
    </Button>
}