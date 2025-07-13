import { Context, createContext, Dispatch, SetStateAction } from "react"
import { PImgProps } from "../project-entry-utils/P_img.tsx"

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ImageViewerContext: Context<{
  setImage?: Dispatch<SetStateAction<PImgProps | null>>
}> = createContext({})
