import strftime from "strftime"

export interface Props {
  msSinceEpoch: number | null
}

function getDayWithSuffix(dayString: string): string {
  const day = parseInt(dayString)
  if (day >= 11 && day <= 13) {
    return `${day}th`
  }

  const suffixes: { [key: number]: string } = {
    1: "st",
    2: "nd",
    3: "rd",
  }

  const suffix = suffixes[day % 10] || "th"
  return `${day}${suffix}`
}

function formatDate(msSinceEpoch: number) {
  return (
    getDayWithSuffix(strftime("%d")) +
    strftime(" %B '%y", new Date(msSinceEpoch))
  )
}

export default function RenderProjectDate({ msSinceEpoch }: Props) {
  return (
    <span className="text-muted text-nowrap">
      {msSinceEpoch ? formatDate(msSinceEpoch) : "Legacy Project - No Date"}
    </span>
  )
}
