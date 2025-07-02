import { JSX, useEffect, useState } from "react"
import {
  BoxSeamFill,
  Clipboard2Check,
  Github,
  Globe,
  GooglePlay,
  Terminal,
} from "react-bootstrap-icons"
import { Button } from "react-bootstrap"
import { copyText } from "../../../util/util.ts"

export interface LinkType {
  getTextElement: (url: string) => JSX.Element
  getButtonElement: (url: string) => JSX.Element
}

export interface ProjectLink {
  url: string
  type: LinkType
}

export const googlePlayLink: LinkType = {
  getTextElement: (url: string) => (
    <a
      className={"fw-bold text-nowrap"}
      style={{ color: "#46af1c" }}
      href={url}
      target={"_blank"}
      onClick={(e) => e.stopPropagation()}
    >
      <GooglePlay style={{ marginBottom: "4px", marginRight: "4px" }} />
      Google Play
    </a>
  ),
  getButtonElement: (url: string) => (
    <Button
      variant="success"
      href={url}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="d-flex flex-row align-items-center">
        <GooglePlay />
        <span className="ps-2">Google Play</span>
      </div>
    </Button>
  ),
}

export const githubLink: LinkType = {
  getTextElement: (url: string) => (
    <a
      className={"fw-bold text-nowrap"}
      style={{ color: "#000000" }}
      href={url}
      target={"_blank"}
      onClick={(e) => e.stopPropagation()}
    >
      <Github style={{ marginBottom: "4px", marginRight: "4px" }} />
      Github
    </a>
  ),
  getButtonElement: (url: string) => (
    <Button
      variant="dark"
      href={url}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="d-flex flex-row align-items-center">
        <Github />
        <span className="ps-2">Github</span>
      </div>
    </Button>
  ),
}

export const cratesLink: LinkType = {
  getTextElement: (url: string) => (
    <a
      className={"fw-bold text-nowrap"}
      style={{ color: "#e8af40" }}
      href={url}
      target={"_blank"}
      onClick={(e) => e.stopPropagation()}
    >
      <BoxSeamFill style={{ marginBottom: "4px", marginRight: "4px" }} />
      Crates.io
    </a>
  ),
  getButtonElement: (url: string) => (
    <Button
      variant="warning"
      href={url}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="d-flex flex-row align-items-center">
        <BoxSeamFill />
        <span className="ps-2">Crates.io</span>
      </div>
    </Button>
  ),
}

export const copyableCommandLink: LinkType = {
  getTextElement: (url: string) => (
    <CopyableCommandLinkButton url={url} isButton={false} />
  ),
  getButtonElement: (url: string) => (
    <CopyableCommandLinkButton url={url} isButton={true} />
  ),
}

function CopyableCommandLinkButton({
  url,
  isButton,
}: {
  url: string
  isButton: boolean
}) {
  const [clicked, setClicked] = useState(false)
  const [timeoutS, setTimeoutS] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutS) {
        window.clearTimeout(timeoutS)
      }
    }
  }, [timeoutS])

  return (
    <>
      {isButton ? (
        <Button
          variant={clicked ? "outline-success" : "outline-secondary"}
          onClick={(e) => {
            e.stopPropagation()
            copyText(url)
            setClicked(true)
            setTimeoutS(
              setTimeout(() => {
                setClicked(false)
              }, 3000)
            )
          }}
        >
          <div className="d-flex flex-row align-items-center font-monospace">
            {clicked ? (
              <Clipboard2Check style={{ marginBottom: "2px" }} />
            ) : (
              <Terminal style={{ marginBottom: "2px" }} />
            )}
            <span className="ps-2">{url}</span>
          </div>
        </Button>
      ) : (
        <a
          className={
            "fw-bold font-monospace text-nowrap" +
            (clicked ? " text-success" : " text-secondary")
          }
          onClick={(e) => {
            e.stopPropagation()
            copyText(url)
            setClicked(true)
            setTimeoutS(
              setTimeout(() => {
                setClicked(false)
              }, 2000)
            )
          }}
        >
          {clicked ? (
            <Clipboard2Check
              style={{ marginBottom: "4px", marginRight: "4px" }}
            />
          ) : (
            <Terminal style={{ marginBottom: "4px", marginRight: "4px" }} />
          )}
          {url}
        </a>
      )}
    </>
  )
}

export function createCustomLink(name: string): LinkType {
  return {
    getTextElement: (url: string) => (
      <a
        className={"fw-bold text-nowrap"}
        style={{ color: "#0dcaf0" }}
        href={url}
        target={"_blank"}
        onClick={(e) => e.stopPropagation()}
      >
        <Globe style={{ marginBottom: "4px", marginRight: "4px" }} />
        {name}
      </a>
    ),
    getButtonElement: (url: string) => (
      <Button
        variant="info"
        href={url}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex flex-row align-items-center">
          <Globe />
          <span className="ps-2">{name}</span>
        </div>
      </Button>
    ),
  }
}
