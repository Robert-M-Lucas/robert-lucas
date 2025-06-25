
export interface ImageSource {
    name: string;
    url: string;
}

export interface Props {
    image: string;
    alt: string;
    caption?: string;
    source?: ImageSource;
}

export default function ProjectImage({image, alt, caption, source}: Props) {
    return <div style={{maxWidth: "100%"}} className="mb-2">
        <img className="rounded-2" src={image} alt={alt} style={{maxWidth: "100%"}}/>
        {caption && <p className="text-muted mb-0">{caption} {source &&
        <>[Source: <a href={source.url} target="_blank">{source.name}</a>]</>
        }</p>}
    </div>
}