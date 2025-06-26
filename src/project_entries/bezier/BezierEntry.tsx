import Pimg from "../../components/project_entry_utils/Pimg.tsx"
import bezier from "./assets/bezier.gif"
import { GITHUB_LINK } from "../../routes/projects/SingleProjectPage/links.tsx"
import { Project } from "../../routes/projects/SingleProjectPage/project.ts"
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx"
import Pp from "../../components/project_entry_utils/Pp.tsx"
import { PYTHON } from "../../routes/projects/SingleProjectPage/technology.tsx"

export const BezierProject: Project = {
    name: "bezier",
    title: "Bézier Curves",
    subtitle: "Demonstation of how bezier curves are formed. Created in PyGame",
    ms_since_epoch: null,
    image: { image: bezier, alt: "TODO" },
    technologies: [PYTHON],
    links: [
        {
            url: "https://github.com/Robert-M-Lucas/Bezier-Curves",
            type: GITHUB_LINK,
        },
    ],
    page: BezierEntryPage,
}

function BezierEntryPage() {
    return (
        <ProjWrapper>
            <Pimg
                image={bezier}
                alt={"TODO"}
                caption={
                    "My program demonstrating how Bezier curves are generated"
                }
            />
            <Pp>
                While this certainly isn't the most efficient way to create
                Bézier Curves, it is the nicest way of demonstrating how they
                are created I've seen. In the above animation every dot moves
                along its line at a constant speed, and it's really surprising
                that when these are put together it creates a smooth curve. In
                the simple demonstration I made in python you can toggle the
                visibility of each layer of working (grey, blue, green) to see
                how the curve is built up or turn off the working entirely and
                just have a solid line that responds to any changes you make
                immediately.
            </Pp>
            <Pp>
                An interesting problem with Bézier Curves is that getting a
                curve with an even resolution is very difficult. In the
                animation above, despite the points that create the curve moving
                at a constant speed along their lines, the white dot that draws
                the curve changes in speed as it moves. This means that getting
                points at a constant interval will lead to a higher resolution
                when the dot is moving slowly and a lower resolution when it's
                moving more quickly. In my case I could afford to brute force it
                and take a large number of points due to the simplicity of the
                program but in a performance limited application this wouldn't
                be good enough.
            </Pp>
            <Pp>
                Bezier curves are very useful showing up in both graphic design
                tools to make smooth curves as well as video games to, for
                example, make smooth curves in roads.
            </Pp>
            <Pp>
                While I haven't yet found a good opportunity, I'm hoping to
                eventually use Bézier Curves in a Unity project.
            </Pp>
        </ProjWrapper>
    )
}
