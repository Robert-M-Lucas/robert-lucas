import React, {
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { ImageViewerContext } from "../image-viewer/image-viewer-context.ts"

export interface ImageSource {
  name: string
  url: string
}

export interface PImgProps {
  image: string
  alt: string
  caption?: string | React.ReactNode
  source?: ImageSource
  legacyNaturalWidth?: boolean
}

export default function P_img(props: PImgProps) {
  const { image, alt, caption, source, legacyNaturalWidth } = props
  const imgRef: RefObject<HTMLImageElement | null> = useRef(null)
  const [width, setWidth] = useState("auto")

  useEffect(() => {
    if (!imgRef) return
    if (legacyNaturalWidth) {
      const img = imgRef.current
      if (img == null) return
      const handleLoad = () => {
        if (img && img.naturalWidth) {
          setWidth(`${img.naturalWidth / 2}px`)
        }
      }

      if (img?.complete) {
        handleLoad()
      } else {
        img.addEventListener("load", handleLoad)
        return () => img.removeEventListener("load", handleLoad)
      }
    }
  }, [image, legacyNaturalWidth, imgRef])

  const { setImage } = useContext(ImageViewerContext)

  return (
    <div style={{ maxWidth: "100%" }} className="mb-2">
      <img
        ref={imgRef}
        className="rounded-2"
        src={image}
        alt={alt}
        style={{
          width: width === "auto" ? "auto" : `${width}`,
          maxWidth: "100%",
          maxHeight: legacyNaturalWidth ? undefined : "80vh",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log(setImage)
          setImage!(props)
        }}
      />
      {caption && (
        <p className="text-muted mb-0">
          {caption}{" "}
          {source && (
            <>
              [Source:{" "}
              <a href={source.url} target="_blank">
                {source.name}
              </a>
              ]
            </>
          )}
        </p>
      )}
    </div>
  )
}
