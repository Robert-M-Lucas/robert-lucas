import P_img from "../../components/project-entry-utils/P_img.tsx"
import compression from "./assets/compression.png"
import ProjWrapper from "../../components/project-entry-utils/project_wrapper/ProjWrapper.tsx"
import P_p from "../../components/project-entry-utils/P_p.tsx"

export default function CompressionEntryPage() {
  return (
    <ProjWrapper>
      <P_p>
        This was a quick project I made to test compression algorithms and how
        they worked with different file types. I found that dictionary encoding
        worked best with text (I used the full text of Casino Royale to test
        this) which makes sense as some characters are very common in text. For
        images, I found delta encoding followed by Run Length Encoding (RLE)
        works best which makes sense as delta encoding adds no file size and
        increases the likelihood of long runs as instead of runs just being
        repeated pixels, they could be repeated pixels or constant gradients.
      </P_p>
      <P_img
        image={compression}
        alt={"TODO"}
        caption={
          "My program showing a compression ration of 0.4 on raw bytes however still being 3.37x worse than PNG"
        }
      />
    </ProjWrapper>
  )
}
