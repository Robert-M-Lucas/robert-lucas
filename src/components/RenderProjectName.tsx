export interface Props {
  title: string
  margin?: boolean
  legacy?: boolean
  large?: boolean
  currentlyWriting?: boolean
}

export default function RenderProjectName({
  title,
  margin = false,
  legacy = false,
  large = false,
  currentlyWriting = false,
}: Props) {
  return large ? (
    <h1 className={margin ? "mb-3" : "mb-0"}>
      {title}
      {legacy && <span className={"text-muted"}>&nbsp;• [Legacy]</span>}
      {currentlyWriting && (
        <span className={"text-muted"}>&nbsp;• [Currently Writing]</span>
      )}
    </h1>
  ) : (
    <h2 className={margin ? "mb-3" : "mb-0"}>
      {title}
      {legacy && <span className={"text-muted"}>&nbsp;• [Legacy Project]</span>}
      {currentlyWriting && (
        <span className={"text-muted"}>&nbsp;• [Currently Writing]</span>
      )}
    </h2>
  )
}
