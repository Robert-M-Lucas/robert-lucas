import ProjImage from "../../components/project_entry_utils/ProjImage.tsx";
import compression from "./assets/compression.png";
import {GITHUB_LINK} from "../../routes/projects/SingleProjectPage/links.tsx";
import {Project} from "../../routes/projects/SingleProjectPage/project.ts";
import ProjWrapper from "../../components/project_entry_utils/ProjWrapper.tsx";
import ProjParagraph from "../../components/project_entry_utils/ProjParagraph.tsx";
import {CSHARP} from "../../routes/projects/SingleProjectPage/technology.tsx";
    
export const CompressionProject: Project = {
    currently_working_on: false,
    name: "compression",
    title: "Compression Algorithm",
    subtitle: "A simple program to test custom compression algoritms and combinations of algorithms",
    ms_since_epoch: null,
    image: {image: compression, alt: "TODO"},
    technologies: [CSHARP],
    links: [
        {url: "https://github.com/Robert-M-Lucas/CompressionAlgorithm", type: GITHUB_LINK}
    ],
    page: CompressionEntryPage
};

function CompressionEntryPage() {
    return <ProjWrapper>

    <ProjParagraph>
        This was a quick project I made to test compression algorithms and how they worked with different file types. I found that dictionary encoding worked best with text (I used the
        full text of Casino Royale to test this) which makes sense as some characters are very common in text. For images, I found delta encoding followed by Run Length Encoding (RLE) works
        best which makes sense as delta encoding adds no file size and increases the likelihood of long runs as instead of runs just being repeated pixels, they could be repeated pixels or
        constant gradients.
    </ProjParagraph>
    <ProjImage image={compression} alt={"TODO"} caption={"My program showing a compression ration of 0.4 on raw bytes however still being 3.37x worse than PNG"}/>
    </ProjWrapper>;
}