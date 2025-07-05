import P_img from "../../components/project-entry-utils/P_img.tsx"
import low_poly from "./assets/low_poly.png"
import with_water from "./assets/with_water.png"
import all_layers from "./assets/all_layers.png"
import two_layers from "./assets/two_layers.png"
import one_layer from "./assets/one_layer.png"
import perlin from "./assets/perlin.png"
import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"

export default function TerrainGeneratorEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        By generating a plane made of triangles and raising and lowering points
        on it using perlin noise you can make smooth hills
      </P_p>
      <P_img
        image={perlin}
        alt={"TODO"}
        caption={"Perlin noise."}
        source={{
          name: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Perlin_noise",
        }}
      />
      <P_img
        image={one_layer}
        alt={"TODO"}
        caption={"Terrain generated with one layer of Perlin noise."}
      />
      <P_p>
        This doesn't, however, look very realistic. To improve this we can add
        multiple layers of noise each with different scales and amplitudes.
      </P_p>
      <P_img
        image={two_layers}
        alt={"TODO"}
        caption={"Terrain generated with two layers of Perlin noise."}
      />
      <P_img
        image={all_layers}
        alt={"TODO"}
        caption={"Terrain generated with five layers of Perlin noise."}
      />
      <P_p>
        Then we can add water by adding a minimum to the height and colouring it
        blue
      </P_p>
      <P_img image={with_water} alt={"TODO"} caption={"With water."} />
      <P_p>
        And as the mesh is procedurally generated, the poly count can be freely
        increased and decreased based on resolution requirements.
      </P_p>
      <P_img
        image={low_poly}
        alt={"TODO"}
        caption={"The same location with fewer triangles."}
      />
    </ProjWrapper>
  )
}
