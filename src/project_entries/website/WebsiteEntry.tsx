import Pimg from "../../components/project_entry_utils/Pimg.tsx";
import place2 from "./assets/place2.png";
import place from "./assets/place.png";
import project_data from "./assets/project_data.png";
import projects_code from "./assets/projects_code.png";
import private_page from "./assets/private_page.png";
import website from "./assets/website.png";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import Pp from "../../components/project_entry_utils/Pp.tsx";
import {PYTHON, JAVASCRIPT, HTML, DJANGO, CSS, BOOTSTRAP} from "../../routes/projects/SingleProjectPage/technology.tsx";
import Pa from "../../components/project_entry_utils/Pa.tsx";
import Phr from "../../components/project_entry_utils/Phr.tsx";
    
export const WebsiteProject: Project = {
    name: "website",
    title: "Old Website",
    subtitle: "My previous website demonstrating past projects",
    ms_since_epoch: null,
    image: {image: website, alt: "TODO"},
    technologies: [PYTHON, JAVASCRIPT, BOOTSTRAP, HTML, CSS, DJANGO],
    links: [],
    page: WebsiteEntryPage
};

function WebsiteEntryPage() {
    return <ProjWrapper>
<Pp>
        I made this website to have one location to show my projects and explain a bit about me in a better format with more freedom than 
        a GitHub page while at the same time teaching me more about web development as this is only the second website I am making. I also
        used a part of this website for shortcuts and utilities for me as well as to test styles and components such as a sidebar that I
        didn't expect to use anywhere in the main website but still wanted to try. I put these in the 'private' section to experiment with
        authentication hence the 'Login' button on this website with no signup page.
    </Pp>

    <Pimg image={private_page} alt={"TODO"} caption={"An example of a private page. You can try to access this page without authentication <Pa href=\"/private\">here.</Pa>"}/>

    <Pp>
        A large priority for me with this project was to make it as maintainable as possible by simplifying the html using
        Django's template engine to create reusable HTML templates (such as the header and footer), using it
        to iterate through data and generate the HTML rather than writing it out which would make it very difficult to
        change styling on pages with repeated components such as the <Pa href="/projects">projects page</Pa>. This also
        included automatically generating the top part of the page you're reading now and making the page you're on change what button on the
        header is highlighted.
    </Pp>

    <Pimg legacyNaturalWidth image={projects_code} alt={"TODO"} caption={"Project list template"}/>

    <Pimg legacyNaturalWidth image={project_data} alt={"TODO"} caption={"Data used to generate list and start of this page"}/>

    <Phr/>

    <Pp>
        One of the latest things I've added is the <Pa href="/place">Place page</Pa>.
        It is similar to <Pa href="https://www.reddit.com/r/place">Reddit's r/place</Pa> in that it is a canvas on which any user can draw a single pixel at a
        time. On Reddit there was a lengthy time limit between pixel placements for a user however I decided not to add any. The backend code for making an image update was surprisingly
        easy despite what seemed to be Django's attempts to do anything to prevent dynamic images from working. My favourite part was realising how I could use JavaScript, despite being
        relatively inexperienced with it, to create a pixel selector as previously you would have to guess at what the coordinates of the pixel you wanted to paint were.
    </Pp>

    <Pimg image={place} alt={"TODO"}/>
    <Pimg image={place2} alt={"TODO"} caption={"Place page (outdated)"}/>

    <Pp>
        The 'Clear Canvas' button is only visible and functional for authenticated users.
    </Pp>

    <Pp>
        It does, however, have some flaws that I deemed not worth addressing for a project of this scale. One of them is the lack of a cooldown mentioned earlier that allows any user
        to spam the server which has to do file operations with every request. The system for drawing pixels is also not very robust. While it does support locking to prevent two write
        operations at once it lacks a proper queue and if I was to redesign it for a larger scale I would probably keep the image loaded in RAM and loaded by JavaScript.
    </Pp>

    <Pp>
        I have also added a live update function that updates the canvas every 10 seconds with other users changes making it a more fun experience. To achieve this seamlessly and
        without load times I use two images, one of which is currently displayed and the other loading the next image from the server. These two then swap and the process repeats.
    </Pp>

    <Phr/>

    <Pp>
        Another simple experiment I've added is the <Pa href="/chat">Chat page</Pa>. This was made quite similarly to the Place page using Python's pickle to save the chat history
        between server restarts however I still haven't implemented the live update feature meaning that to see new messages you need to refresh the page. The way I plan on
        adding a live update function is by creating a script that gets a new list of messages, finds the differences between what's currently shown and the new list, and then
        updates the page accordingly.
    </Pp>

    <Phr/>

    <Pp muted>A GitHub isn't provided for security reasons</Pp>
    </ProjWrapper>;
}