import {RefObject, useEffect, useRef, useState} from "react";

export interface ImageSource {
    name: string;
    url: string;
}

export interface Props {
    image: string;
    alt: string;
    caption?: string;
    source?: ImageSource;
    legacyNaturalWidth?: boolean;
}

export default function ProjImage({image, alt, caption, source, legacyNaturalWidth}: Props) {
    const imgRef: RefObject<HTMLImageElement | null> = useRef(null);
    const [width, setWidth] = useState("auto");

    useEffect(() => {
        if (!imgRef) return;
        if (legacyNaturalWidth) {
            const img = imgRef.current;
            if (img == null) return;
            const handleLoad = () => {
                if (img && img.naturalWidth) {
                    setWidth(`${img.naturalWidth / 2}`);
                }
            };

            if (img?.complete) {
                handleLoad();
            } else {
                img.addEventListener("load", handleLoad);
                return () => img.removeEventListener("load", handleLoad);
            }
        }
    }, [image, legacyNaturalWidth, imgRef]);


    return <div style={{maxWidth: "100%"}} className="mb-3">
        <img ref={imgRef} className="rounded-2" src={image} alt={alt} style={{ width: width === "auto" ? "auto" : `${width}px`, maxWidth: "100%"}}/>
        {caption && <p className="text-muted mb-0">{caption} {source &&
        <>[Source: <a href={source.url} target="_blank">{source.name}</a>]</>
        }</p>}
    </div>
}