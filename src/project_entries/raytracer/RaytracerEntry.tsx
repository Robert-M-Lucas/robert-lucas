import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import render from "./assets/render.png";
import preview from "./assets/preview.png";
import raytracing from "./assets/raytracing.svg";
import indirect from "./assets/indirect.png";
import indirect2 from "./assets/indirect2.png";
import v3 from "./assets/v3.png";
import v3_op from "./assets/v3_op.png";
import line from "./assets/line.png";
import plane from "./assets/plane.png";
import plane_intersection from "./assets/plane_intersection.png";
import finding_object from "./assets/finding_object.png";
import object_config from "./assets/object_config.png";
import light_config from "./assets/light_config.png";
import scene_config from "./assets/scene_config.png";
import failed1 from "./assets/failed1.png";
import failed2 from "./assets/failed2.png";
import failed3 from "./assets/failed3.png";
import failed4 from "./assets/failed4.png";
import failed5 from "./assets/failed5.png";

import {RUST} from "../../routes/projects/SingleProjectPage/technology.tsx";
import ProjectImage from "../../components/project_entry_utils/ProjectImage.tsx";

export const RaytracerProject: Project = {
    name: "raytracer",
    title: "Raytracer",
    subtitle: "A raytracing engine supporting reflections, refraction, direct lighting and indirect lighting",
    ms_since_epoch: null,
    image: {image: render, alt: "Raytracer render"},
    page: RaytracingEntryPage,
    technologies: [RUST],
    github: "https://github.com/Robert-M-Lucas/raytracing-two",
}

function RaytracingEntryPage() {
    return <>
        <p>I created a raytracing engine in Rust to learn the language, learn more about computer graphics, practice working with vectors in 3D space and to apply my physics knowledge.</p>

        <ProjectImage image={preview} alt={"Raytracer preview"} caption={" Preview with reduced resolution and lighting calculations"}/>

        <ProjectImage image={render} alt={"Render with full lighting effects. Note that one of the squares at the back is white in colour, but appears slightly red as it is receiving indirect lighting from the red square"}/>

        <p>The principle behind raytracing is to shoot rays from a point, to a pixel on a virtual screen and then continue the rays until they hit something that you can use to calculate the ray's colour.</p>

        <ProjectImage image={raytracing} alt={"Raytracing diagram"} caption={"Raytracing diagram"} source={{name: "Wikimedia", url: "https://commons.wikimedia.org/wiki/File:Ray_trace_diagram.svg"}}/>

        <p>The benefit of raytracing over other rendering techniques is that it supports true realtime reflection (and refraction) as when you hit a reflective surface, you can 'draw' another ray in the reflected direction and use the colour that ray finds. Direct lighting is also quite simple as you can draw a line from the point on the object you've hit to all the light sources in the scene and any light sources that have an uninterrupted path to the object contribute to its lighting.</p>

        <p>The difficult part comes with indirect lighting (shown in the full render). There is no easy way to calculate indirect lighting, so you must emit hundreds of rays from the object in random directions, calculate their colours and then apply it to the object.</p>

        <ProjectImage image={indirect} alt={"Indirect lighting diagram"} source={{name: "Scratchapixel", url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-overview/light-transport-ray-tracing-whitted.html"}}/>

        <ProjectImage image={indirect2} alt={"Indirect lighting example"} source={{name: "Scratchapixel", url: "https://www.scratchapixel.com/lessons/3d-basic-rendering/global-illumination-path-tracing/global-illumination-path-tracing-practical-implementation.html"}}/>

        <p>For developing this project, I took an approach of layering increasingly complex mathematical abstractions until I had a toolkit I could use to calculate the colour of every pixel on the screen. For example, I started with a 3D vector:</p>

        <ProjectImage image={v3} alt={"3D vector implementation code"} caption={"Snippet of 3D vector implementation with utility functions"}/>

        <ProjectImage image={v3_op} alt={"3D vector operation implementation code"} caption={"Implementing operators for 3D vectors for easier use"}/>

        <p>I'd then use a 3D vector to make a line:</p>

        <ProjectImage image={line} alt={"Line implementation code"} caption={"Snippet of implementation for a line"}/>

        <p>And then I'd use this in the calculations needed for a plane:</p>

        <ProjectImage image={plane} alt={"Plane implementation code"} caption={"Snippet of implementation for a plane"}/>
        
        <ProjectImage image={plane_intersection} alt={"Plane intersection code"} caption={"Calculating the intersection between the plane and a line by using matrices and Cramer's rule"}/>

        <p> And when inputting a pixel's ray, this (ignoring other factors such as reflections and lighting) would tell me whether to show the colour of the plane or the colour behind it for a given pixel.</p>

        <ProjectImage image={finding_object} alt={"Code for finding the closest object on a ray"} caption={"Finding the closest object given a ray (line)"}/>

        <p>Scene configuration:</p>

        <ProjectImage image={object_config} alt={"Object configuration code"} caption={"Object configuration"}/>

        <ProjectImage image={light_config} alt={"Light configuration code"} caption={"Light configuration"}/>

        <ProjectImage image={scene_config} alt={"Scene configuration code"} caption={"Scene configuration"}/>

        <p>Failed renders from development:</p>

        <ProjectImage image={failed1} alt={"Screenshot of failed render"} caption={"Incorrect screen width"}/>
        <ProjectImage image={failed2} alt={"Screenshot of failed render"} caption={"Too much light"}/>
        <ProjectImage image={failed3} alt={"Screenshot of failed render"} caption={"I don't even want to know"}/>
        <ProjectImage image={failed4} alt={"Screenshot of failed render"} caption={"Refraction is annoying"}/>
        <ProjectImage image={failed5} alt={"Screenshot of failed render"} caption={"What"}/>
    </>;
}