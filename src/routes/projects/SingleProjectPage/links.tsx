import {JSX} from "react";
import {BoxSeamFill, Github, Globe, GooglePlay} from "react-bootstrap-icons";
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
        style={{color: "#46af1c"}} href={url} target={"_blank"}
        onClick={(e) => e.stopPropagation()}>
        <GooglePlay style={{marginBottom: "4px", marginRight: "4px"}}/>
        Google Play
    </a>,
    getButtonElement: (url: string) => <Button variant="success" href={url} target="_blank"
                                               onClick={(e) => e.stopPropagation()}>
        <div className="d-flex flex-row align-items-center">
            <GooglePlay/><span className="ps-2">Google Play</span>
        </div>
    </Button>
}

export const GITHUB_LINK: LinkType = {
    getTextElement: (url: string) => <a
        className={"fw-bold"}
        style={{color: "#000000"}} href={url} target={"_blank"}
        onClick={(e) => e.stopPropagation()}>
        <Github style={{marginBottom: "4px", marginRight: "4px"}}/>
        Github
    </a>,
    getButtonElement: (url: string) => <Button variant="dark" href={url} target="_blank"
                                               onClick={(e) => e.stopPropagation()}>
        <div className="d-flex flex-row align-items-center">
            <Github/><span className="ps-2">Github</span>
        </div>
    </Button>
}

export const CRATES_LINK: LinkType = {
    getTextElement: (url: string) => <a
        className={"fw-bold"}
        style={{color: "#e8af40"}} href={url} target={"_blank"}
        onClick={(e) => e.stopPropagation()}>
        <BoxSeamFill style={{marginBottom: "4px", marginRight: "4px"}}/>
        Crates.io
    </a>,
    getButtonElement: (url: string) => <Button variant="warning" href={url} target="_blank"
                                               onClick={(e) => e.stopPropagation()}>
        <div className="d-flex flex-row align-items-center">
            <BoxSeamFill/><span className="ps-2">Crates.io</span>
        </div>
    </Button>
}

export function createCustomLink(name: string): LinkType {
    return {
        getTextElement: (url: string) => <a
            className={"fw-bold"}
            style={{color: "#0dcaf0"}} href={url} target={"_blank"}
            onClick={(e) => e.stopPropagation()}>
            <Globe style={{marginBottom: "4px", marginRight: "4px"}}/>
            {name}
        </a>,
        getButtonElement: (url: string) => <Button variant="info" href={url} target="_blank"
                                                   onClick={(e) => e.stopPropagation()}>
            <div className="d-flex flex-row align-items-center">
                <Globe/><span className="ps-2">{name}</span>
            </div>
        </Button>
    }
}