import P_img from "../../components/project_entry_utils/P_img.tsx"
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
import { githubLink } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project_entry_utils/P_p.tsx"
import { rustTechnology } from "../../routes/projects/SingleProjectPage/technology.tsx"

export const RaytracingProject: Project = {
  name: "raytracing",
  title: "Raytracing Engine",
  subtitle:
    "A raytracing engine supporting reflections, refraction, direct lighting and indirect lighting",
  msSinceEpoch: null,
  image: { image: render, alt: "TODO" },
  technologies: [rustTechnology],
  links: [
    {
      url: "https://github.com/Robert-M-Lucas/raytracing-two",
      type: githubLink,
    },
  ],
  page: RaytracingEntryPage,
}

function RaytracingEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        I created a raytracing engine in Rust to learn the language, learn more
        about computer graphics, practice working with vectors in 3D space and
        to apply my physics knowledge.
      </P_p>
      <P_img
        image={preview}
        alt={"TODO"}
        caption={"Preview with reduced resolution and lighting calculations"}
      />
      <P_img
        image={render}
        alt={"TODO"}
        caption={
          "Render with full lighting effects. Note that one of the squares at the back is white in colour, but appears slightly red as it is receiving indirect lighting from the red square"
        }
      />
      <P_p>
        The principle behind raytracing is to shoot rays from a point, to a
        pixel on a virtual screen and then continue the rays until they hit
        something that you can use to calculate the ray's colour.
      </P_p>
      <P_img
        image={raytracing}
        alt={"TODO"}
        caption={"Raytracing diagram"}
        source={{
          name: "Wikimedia",
          url: "https://commons.wikimedia.org/wiki/File:Ray_trace_diagram.svg",
        }}
      />
      <P_p>
        The benefit of raytracing over other rendering techniques is that it
        supports true realtime reflection (and refraction) as when you hit a
        reflective surface, you can 'draw' another ray in the reflected
        direction and use the colour that ray finds. Direct lighting is also
        quite simple as you can draw a line from the point on the object you've
        hit to all the light sources in the scene and any light sources that
        have an uninterrupted path to the object contribute to its lighting.
      </P_p>
      <P_p>
        The difficult part comes with indirect lighting (shown in the full
        render). There is no easy way to calculate indirect lighting, so you
        must emit hundreds of rays from the object in random directions,
        calculate their colours and then apply it to the object.
      </P_p>
      <P_img
        image={indirect}
        alt={"TODO"}
        source={{
          name: "Scratchapixel",
          url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-overview/light-transport-ray-tracing-whitted.html",
        }}
      />
      <P_img
        image={indirect2}
        alt={"TODO"}
        source={{
          name: "Scratchapixel",
          url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/global-illumination-path-tracing/global-illumination-path-tracing-practical-implementation.html",
        }}
      />
      <P_p>
        For developing this project, I took an approach of layering increasingly
        complex mathematical abstractions until I had a toolkit I could use to
        calculate the colour of every pixel on the screen. For example, I
        started with a 3D vector:
      </P_p>
      <P_img
        legacyNaturalWidth
        image={v3}
        alt={"TODO"}
        caption={"Snippet of 3D vector implementation with utility functions"}
      />
      <P_img
        legacyNaturalWidth
        image={v3_op}
        alt={"TODO"}
        caption={"Implementing operators for 3D vectors for easier use"}
      />
      <P_p>I'd then use a 3D vector to make a line:</P_p>
      <P_img
        legacyNaturalWidth
        image={line}
        alt={"TODO"}
        caption={"Snippet of implementation for a line"}
      />
      <P_p>And then I'd use this in the calculations needed for a plane:</P_p>
      <P_img
        legacyNaturalWidth
        image={plane}
        alt={"TODO"}
        caption={"Snippet of implementation for a plane"}
      />
      <P_img
        legacyNaturalWidth
        image={plane_intersection}
        alt={"TODO"}
        caption={
          "Calculating the intersection between the plane and a line by using matrices and Cramer's rule"
        }
      />
      <P_p>
        And when inputting a pixel's ray, this (ignoring other factors such as
        reflections and lighting) would tell me whether to show the colour of
        the plane or the colour behind it for a given pixel.
      </P_p>
      <P_img
        legacyNaturalWidth
        image={finding_object}
        alt={"TODO"}
        caption={"Finding the closest object given a ray (line)"}
      />
      <P_p>Scene configuration:</P_p>
      <P_img
        legacyNaturalWidth
        image={object_config}
        alt={"TODO"}
        caption={"Object configuration"}
      />
      <P_img
        legacyNaturalWidth
        image={light_config}
        alt={"TODO"}
        caption={"Light configuration"}
      />
      <P_img
        legacyNaturalWidth
        image={scene_config}
        alt={"TODO"}
        caption={"Scene configuration"}
      />
      <P_p>Failed renders from development</P_p>
      <P_img image={failed1} alt={"TODO"} caption={"Incorrect screen width"} />
      <P_img image={failed2} alt={"TODO"} caption={"Too much light"} />
      <P_img
        image={failed3}
        alt={"TODO"}
        caption={"I don't even want to know"}
      />
      <P_img image={failed4} alt={"TODO"} caption={"Refraction is annoying"} />
      <P_img image={failed5} alt={"TODO"} caption={"What"} />
    </ProjWrapper>
  )
}
