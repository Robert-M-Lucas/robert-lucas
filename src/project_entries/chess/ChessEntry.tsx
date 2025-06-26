import Pimg from "../../components/project_entry_utils/Pimg.tsx";
import heatmap from "./assets/heatmap.png";
import alphabeta from "./assets/alphabeta.png";
import minimax from "./assets/minimax.png";
import dolly_zoom from "./assets/dolly_zoom.svg";
import chess from "./assets/chess.png";
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import Pp from "../../components/project_entry_utils/Pp.tsx";
import {CSHARP, NETCODE, UNITY} from "../../routes/projects/SingleProjectPage/technology.tsx";
    
export const ChessProject: Project = {
    currently_working_on: false,
    name: "chess",
    title: "Chess",
    subtitle: "A hybrid 3D-2D chess game with local play, multiplayer, custom net code and a chess AI using a minimax algorithm",
    ms_since_epoch: null,
    image: {image: chess, alt: "TODO"},
    technologies: [CSHARP, NETCODE, UNITY],
    links: [
        {url: "https://github.com/Robert-M-Lucas/Chess3D", type: GITHUB_LINK}
    ],
    page: ChessEntryPage
};

function ChessEntryPage() {
    return <ProjWrapper>

    <Pp>
        When I created this game I wanted it to support singleplayer, multiplayer and vs AI and it now supports all three (as well as AI vs AI for fun
        and testing). 
    </Pp>
    <Pp>
        The singleplayer was relatively easy to implement however there were some interesting parts to creating it such as using an exponential function to
        smoothly raise and lower the squares as well as using a virtual dolly zoom to smoothly change between 3D and a 2D orthographic effect.
    </Pp>

    <Pimg image={dolly_zoom} alt={"TODO"} caption={"The dolly zoom equation I used."} source={{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dolly_zoom#Calculating_distances"}}/>

    <Pp>
        The multiplayer was the most fun part to code as all I had to do was modify net code I had made previously to be reusable as well as add some improvements.
        The net code functions by having each packet have its length in bytes follows by a UID that tells the recipient how to handle the packet such as splitting
        up a piece move packet into int move_from_x, int move_from_y, int move_to_x, int move_to_y. The system also functions by having one player run a server and
        a client and the other run just a server. This allows the client code to be fully reusable as well as allowing the server to be separated from a client in the
        future while not adding too much overhead. The connection currently works by entering the host's IP while they have a server open.
    </Pp>

    <Pp>
        For the AI I used a custom Minimax algorithm that essentially assumes that at every move the player will make the best move for themselves (worst for the AI)
        and the AI will do the same. This can be quite difficult to imagine so a diagram is useful.
    </Pp>

    <Pimg image={minimax} alt={"TODO"} caption={"Minimax diagram - AI would be maximising and player would be minimising."} source={{name: "Medium", url: "https://medium.com/@SereneBiologist/the-anatomy-of-a-chess-ai-2087d0d565"}}/>
    
    <Pp>
        One of the optimisations I implemented was Alpha-Beta pruning. Essentially if you find that the node won't be chosen in the above layer no matter what there is
        no reason to continue exploring its children. For example in the diagram below '8' on the bottom level was found and as the third layer is maximising you know that the
        node above will have a value of '8' or higher no matter what. As the layer above that (the second layer) is minimising and the adjacent node '4' has been found the
        '8' (or more) node won't be picked no matter what is found so we can stop searching its children. I found this to be one of the most difficult things to implement
        due to it being somewhat confusing to implement with recursion and it being difficult to check if it is working properly due to how large the tree becomes in a chess game.
    </Pp>
    
    <Pimg image={alphabeta} alt={"TODO"} caption={"Alpha-Beta pruning diagram"} source={{name: "Medium", url: "https://medium.com/@SereneBiologist/the-anatomy-of-a-chess-ai-2087d0d565"}}/>
    
    <Pp>
        I also experimented with multithreading the AI but found it to be significantly slower despite limiting the threads to one less than the number of logical threads
        available. It also made the graphical part of the game (Unity) lag so I decided against using multithreading at all. I'm planning to add support for transposition
        tables using Zobrist Hashing which would allow the AI to use previous evaluations of boards it has already seen instead of recalculating them.
    </Pp>
    <Pp>
        For calculating the score of a board I used a combination of giving values to pieces, as well as adding a heatmap to tell the AI that <i>generally</i> certain pieces
        are better in certain places such as the rooks being in the middle ranks. I'm also planning to give the AI a book of openings to help it at the start of the
        game.
    </Pp>

    <Pimg legacyNaturalWidth image={heatmap} alt={"TODO"} caption={"Pawn heatmap - AI starts at top"}/>

    <Pp>
        For the networking I used a library I had previously made for other projects with a few updates. The library essentially works by allowing you to define 'packets' which have a 
        UID and contain serialisable data. You can then send a packet which will be converted to bytes and sent to the recipient which can define how to handle certain packets.
        This allows you to work with named, typed data at all points when interacting with the library.
    </Pp>
    <Pp>
        The formatting and sending of packets is a bit more complicated. First is the length of the whole packet so the recipient knows when this packet ends and the next starts.
        Next is the UID which defines how the recipient should decode and handle the packet. Then there are pairs of data length bytes and the actual data so the recipient know how
        to split up the data for decoding. The packets don't need to contain names for each item of data or their type as the UID provides all of this.
    </Pp>
    <Pp>
        This doesn't even cover the large amount of internal builtin packets that handle clients connecting, disconnecting, being kicked, connecting with a password and more that is all
        handled behind the scenes by the library.
    </Pp>
    </ProjWrapper>;
}