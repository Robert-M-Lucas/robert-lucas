import { Card } from "react-bootstrap"
import { lazy, ReactNode, Suspense } from "react"
import { SupportedLanguages } from "./supported-languages.ts"

export interface Props {
  code: string
  language: SupportedLanguages
  caption?: string | ReactNode
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const PCodeInternal = lazy(() => import("./PCodeInternal"))

export default function PCode({ code, language, caption }: Props) {
  return (
    <>
      <Card className={caption ? "mb-0" : "mb-3"}>
        <Suspense>
          <PCodeInternal code={code} language={language} />
        </Suspense>
      </Card>
      {caption && (
        <p className={"text-muted mb-3"} style={{ textAlign: "justify" }}>
          {caption}
        </p>
      )}
    </>
  )
}
