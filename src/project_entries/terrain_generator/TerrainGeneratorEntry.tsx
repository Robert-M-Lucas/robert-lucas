import Pimg from "../../components/project_entry_utils/Pimg.tsx"
import low_poly from "./assets/low_poly.png"
import with_water from "./assets/with_water.png"
import all_layers from "./assets/all_layers.png"
import two_layers from "./assets/two_layers.png"
import one_layer from "./assets/one_layer.png"
import perlin from "./assets/perlin.png"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import Pp from "../../components/project_entry_utils/Pp.tsx"
import {
    CSHARP,
    UNITY,
} from "../../routes/projects/SingleProjectPage/technology.tsx"

export const TerrainGeneratorProject: Project = {
    name: "terrain_generator",
    title: "Random Terrain Generator",
    subtitle: "Generating terrain meshes in Unity using Perlin noise",
    ms_since_epoch: null,
    image: { image: with_water, alt: "TODO" },
    technologies: [CSHARP, UNITY],
    links: [],
    page: TerrainGeneratorEntryPage,
}

function TerrainGeneratorEntryPage() {
    return (
        <ProjWrapper>
            <Pp>
                By generating a plane made of triangles and raising and lowering
                points on it using perlin noise you can make smooth hills
            </Pp>
            <Pimg
                image={perlin}
                alt={"TODO"}
                caption={"Perlin noise."}
                source={{
                    name: "Wikipedia",
                    url: "https://en.wikipedia.org/wiki/Perlin_noise",
                }}
            />
            <Pimg
                image={one_layer}
                alt={"TODO"}
                caption={"Terrain generated with one layer of Perlin noise."}
            />
            <Pp>
                This doesn't, however, look very realistic. To improve this we
                can add multiple layers of noise each with different scales and
                amplitudes.
            </Pp>
            <Pimg
                image={two_layers}
                alt={"TODO"}
                caption={"Terrain generated with two layers of Perlin noise."}
            />
            <Pimg
                image={all_layers}
                alt={"TODO"}
                caption={"Terrain generated with five layers of Perlin noise."}
            />
            <Pp>
                Then we can add water by adding a minimum to the height and
                colouring it blue
            </Pp>
            <Pimg image={with_water} alt={"TODO"} caption={"With water."} />
            <Pp>
                And as the mesh is procedurally generated, the poly count can be
                freely increased and decreased based on resolution requirements.
            </Pp>
            <Pimg
                image={low_poly}
                alt={"TODO"}
                caption={"The same location with fewer triangles."}
            />
        </ProjWrapper>
    )
}
