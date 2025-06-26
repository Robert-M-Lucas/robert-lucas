export interface Props {
  title: string
  margin?: boolean
  legacy?: boolean
  large?: boolean
  currently_writing?: boolean
}

export default function RenderProjectName({
  title,
  margin = false,
  legacy = false,
  large = false,
  currently_writing = false,
}: Props) {
  return large ? (
    <h1 className={margin ? "mb-3" : "mb-0"}>
      {title}
      {legacy && <span className={"text-muted"}> [Legacy]</span>}
      {currently_writing && (
        <span className={"text-muted"}> [Currently Writing]</span>
      )}
    </h1>
  ) : (
    <h2 className={margin ? "mb-3" : "mb-0"}>
      {title}
      {legacy && <span className={"text-muted"}> [Legacy]</span>}
      {currently_writing && (
        <span className={"text-muted"}> [Currently Writing]</span>
      )}
    </h2>
  )
}
