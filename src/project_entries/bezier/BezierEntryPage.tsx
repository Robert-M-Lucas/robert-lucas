import P_img from "../../components/project-entry-utils/P_img.tsx"
import bezier from "./assets/bezier.gif"
import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"

export default function BezierEntryPage() {
  return (
    <ProjWrapper>
      <P_img
        image={bezier}
        alt={"TODO"}
        caption={"My program demonstrating how Bezier curves are generated"}
      />
      <P_p>
        While this certainly isn't the most efficient way to create Bézier
        Curves, it is the nicest way of demonstrating how they are created I've
        seen. In the above animation every dot moves along its line at a
        constant speed, and it's really surprising that when these are put
        together it creates a smooth curve. In the simple demonstration I made
        in python you can toggle the visibility of each layer of working (grey,
        blue, green) to see how the curve is built up or turn off the working
        entirely and just have a solid line that responds to any changes you
        make immediately.
      </P_p>
      <P_p>
        An interesting problem with Bézier Curves is that getting a curve with
        an even resolution is very difficult. In the animation above, despite
        the points that create the curve moving at a constant speed along their
        lines, the white dot that draws the curve changes in speed as it moves.
        This means that getting points at a constant interval will lead to a
        higher resolution when the dot is moving slowly and a lower resolution
        when it's moving more quickly. In my case I could afford to brute force
        it and take a large number of points due to the simplicity of the
        program but in a performance limited application this wouldn't be good
        enough.
      </P_p>
      <P_p>
        Bezier curves are very useful showing up in both graphic design tools to
        make smooth curves as well as video games to, for example, make smooth
        curves in roads.
      </P_p>
      <P_p>
        While I haven't yet found a good opportunity, I'm hoping to eventually
        use Bézier Curves in a Unity project.
      </P_p>
    </ProjWrapper>
  )
}
