import { Context, createContext, Dispatch, SetStateAction } from "react"

export interface ImageSource {
  name: string
  url: string
}

export interface PImgProps {
  image: string
  alt: string
  caption?: string | React.ReactNode
  source?: ImageSource
  legacyNaturalWidth?: boolean
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ImageViewerContext: Context<{
  setImage?: Dispatch<SetStateAction<PImgProps | null>>
}> = createContext({})
