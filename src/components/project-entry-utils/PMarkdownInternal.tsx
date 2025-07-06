import ReactMarkdown from "react-markdown"

export interface Props {
  markdown: string
}

export default function PMarkdownInternal({ markdown }: Props) {
  return <ReactMarkdown children={markdown} />
}
