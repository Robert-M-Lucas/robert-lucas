import React, { ReactNode, useState } from "react"

export interface HeadingRef {
  headingID: string | undefined
  headingContents: ReactNode | undefined
  emitFunction: React.Dispatch<React.SetStateAction<HeadingInfo | undefined>>
}

interface HeadingInfo {
  id: string
  contents: ReactNode
}

export default function useHeadingRef(): HeadingRef {
  const [headingInfo, setHeadingInfo] = useState<undefined | HeadingInfo>(
    undefined
  )

  return {
    headingID: headingInfo?.id,
    headingContents: headingInfo?.contents,
    emitFunction: setHeadingInfo,
  }
}
