import { lazy, ReactNode, Suspense, useState } from "react"
import { PImgProps } from "../project-entry-utils/P_img.tsx"
import { ImageViewerContext } from "./image-viewer-context.ts"

export interface Props {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const ProjImageViewerInternal = lazy(() => import("./ProjImageViewerInternal"))

export default function ProjImageViewerContext({ children }: Props) {
  const [image, setImage] = useState<PImgProps | null>(null)
  const handleClose = () => setImage(null)

  return (
    <>
      <Suspense>
        <ProjImageViewerInternal handleClose={handleClose} image={image} />
      </Suspense>

      <ImageViewerContext.Provider value={{ setImage }}>
        {children}
      </ImageViewerContext.Provider>
    </>
  )
}
