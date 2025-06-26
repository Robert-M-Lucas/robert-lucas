import Pimg from "../../components/project_entry_utils/Pimg.tsx"
import failed5 from "./assets/failed5.png"
import failed4 from "./assets/failed4.png"
import failed3 from "./assets/failed3.png"
import failed2 from "./assets/failed2.png"
import failed1 from "./assets/failed1.png"
import scene_config from "./assets/scene_config.png"
import light_config from "./assets/light_config.png"
import object_config from "./assets/object_config.png"
import finding_object from "./assets/finding_object.png"
import plane_intersection from "./assets/plane_intersection.png"
import plane from "./assets/plane.png"
import line from "./assets/line.png"
import v3_op from "./assets/v3_op.png"
import v3 from "./assets/v3.png"
import indirect2 from "./assets/indirect2.png"
import indirect from "./assets/indirect.png"
import raytracing from "./assets/raytracing.svg"
import render from "./assets/render.png"
import preview from "./assets/preview.png"
import { GITHUB_LINK } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import Pp from "../../components/project_entry_utils/Pp.tsx"
import { RUST } from "../../routes/projects/SingleProjectPage/technology.tsx"

export const RaytracingProject: Project = {
    name: "raytracing",
    title: "Raytracing Engine",
    subtitle:
        "A raytracing engine supporting reflections, refraction, direct lighting and indirect lighting",
    ms_since_epoch: null,
    image: { image: render, alt: "TODO" },
    technologies: [RUST],
    links: [
        {
            url: "https://github.com/Robert-M-Lucas/raytracing-two",
            type: GITHUB_LINK,
        },
    ],
    page: RaytracingEntryPage,
}

function RaytracingEntryPage() {
    return (
        <ProjWrapper>
            <Pp>
                I created a raytracing engine in Rust to learn the language,
                learn more about computer graphics, practice working with
                vectors in 3D space and to apply my physics knowledge.
            </Pp>
            <Pimg
                image={preview}
                alt={"TODO"}
                caption={
                    "Preview with reduced resolution and lighting calculations"
                }
            />
            <Pimg
                image={render}
                alt={"TODO"}
                caption={
                    "Render with full lighting effects. Note that one of the squares at the back is white in colour, but appears slightly red as it is receiving indirect lighting from the red square"
                }
            />
            <Pp>
                The principle behind raytracing is to shoot rays from a point,
                to a pixel on a virtual screen and then continue the rays until
                they hit something that you can use to calculate the ray's
                colour.
            </Pp>
            <Pimg
                image={raytracing}
                alt={"TODO"}
                caption={"Raytracing diagram"}
                source={{
                    name: "Wikimedia",
                    url: "https://commons.wikimedia.org/wiki/File:Ray_trace_diagram.svg",
                }}
            />
            <Pp>
                The benefit of raytracing over other rendering techniques is
                that it supports true realtime reflection (and refraction) as
                when you hit a reflective surface, you can 'draw' another ray in
                the reflected direction and use the colour that ray finds.
                Direct lighting is also quite simple as you can draw a line from
                the point on the object you've hit to all the light sources in
                the scene and any light sources that have an uninterrupted path
                to the object contribute to its lighting.
            </Pp>
            <Pp>
                The difficult part comes with indirect lighting (shown in the
                full render). There is no easy way to calculate indirect
                lighting, so you must emit hundreds of rays from the object in
                random directions, calculate their colours and then apply it to
                the object.
            </Pp>
            <Pimg
                image={indirect}
                alt={"TODO"}
                source={{
                    name: "Scratchapixel",
                    url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-overview/light-transport-ray-tracing-whitted.html",
                }}
            />
            <Pimg
                image={indirect2}
                alt={"TODO"}
                source={{
                    name: "Scratchapixel",
                    url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/global-illumination-path-tracing/global-illumination-path-tracing-practical-implementation.html",
                }}
            />
            <Pp>
                For developing this project, I took an approach of layering
                increasingly complex mathematical abstractions until I had a
                toolkit I could use to calculate the colour of every pixel on
                the screen. For example, I started with a 3D vector:
            </Pp>
            <Pimg
                legacyNaturalWidth
                image={v3}
                alt={"TODO"}
                caption={
                    "Snippet of 3D vector implementation with utility functions"
                }
            />
            <Pimg
                legacyNaturalWidth
                image={v3_op}
                alt={"TODO"}
                caption={"Implementing operators for 3D vectors for easier use"}
            />
            <Pp>I'd then use a 3D vector to make a line:</Pp>
            <Pimg
                legacyNaturalWidth
                image={line}
                alt={"TODO"}
                caption={"Snippet of implementation for a line"}
            />
            <Pp>
                And then I'd use this in the calculations needed for a plane:
            </Pp>
            <Pimg
                legacyNaturalWidth
                image={plane}
                alt={"TODO"}
                caption={"Snippet of implementation for a plane"}
            />
            <Pimg
                legacyNaturalWidth
                image={plane_intersection}
                alt={"TODO"}
                caption={
                    "Calculating the intersection between the plane and a line by using matrices and Cramer's rule"
                }
            />
            <Pp>
                And when inputting a pixel's ray, this (ignoring other factors
                such as reflections and lighting) would tell me whether to show
                the colour of the plane or the colour behind it for a given
                pixel.
            </Pp>
            <Pimg
                legacyNaturalWidth
                image={finding_object}
                alt={"TODO"}
                caption={"Finding the closest object given a ray (line)"}
            />
            <Pp>Scene configuration:</Pp>
            <Pimg
                legacyNaturalWidth
                image={object_config}
                alt={"TODO"}
                caption={"Object configuration"}
            />
            <Pimg
                legacyNaturalWidth
                image={light_config}
                alt={"TODO"}
                caption={"Light configuration"}
            />
            <Pimg
                legacyNaturalWidth
                image={scene_config}
                alt={"TODO"}
                caption={"Scene configuration"}
            />
            <Pp>Failed renders from development</Pp>
            <Pimg
                image={failed1}
                alt={"TODO"}
                caption={"Incorrect screen width"}
            />
            <Pimg image={failed2} alt={"TODO"} caption={"Too much light"} />
            <Pimg
                image={failed3}
                alt={"TODO"}
                caption={"I don't even want to know"}
            />
            <Pimg
                image={failed4}
                alt={"TODO"}
                caption={"Refraction is annoying"}
            />
            <Pimg image={failed5} alt={"TODO"} caption={"What"} />
        </ProjWrapper>
    )
}
