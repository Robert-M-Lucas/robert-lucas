import { a11yLight, CopyBlock } from "react-code-blocks"
import { Card } from "react-bootstrap"
import { ReactNode } from "react"

export type supportedLanguages =
  | "abap"
  | "actionscript"
  | "ada"
  | "arduino"
  | "autoit"
  | "c"
  | "clojure"
  | "cs"
  | "c"
  | "cpp"
  | "coffeescript"
  | "csharp"
  | "css"
  | "cuda"
  | "d"
  | "dart"
  | "delphi"
  | "elixir"
  | "elm"
  | "erlang"
  | "fortran"
  | "foxpro"
  | "fsharp"
  | "go"
  | "graphql"
  | "gql"
  | "groovy"
  | "haskell"
  | "haxe"
  | "html"
  | "java"
  | "javascript"
  | "json"
  | "julia"
  | "jsx"
  | "js"
  | "kotlin"
  | "latex"
  | "lisp"
  | "livescript"
  | "lua"
  | "mathematica"
  | "makefile"
  | "matlab"
  | "objectivec"
  | "objective"
  | "objective"
  | "objectpascal"
  | "ocaml"
  | "octave"
  | "perl"
  | "php"
  | "powershell"
  | "prolog"
  | "puppet"
  | "python"
  | "qml"
  | "r"
  | "racket"
  | "restructuredtext"
  | "rest"
  | "ruby"
  | "rust"
  | "sass"
  | "less"
  | "scala"
  | "scheme"
  | "shell"
  | "smalltalk"
  | "sql"
  | "standardml"
  | "sml"
  | "swift"
  | "tcl"
  | "tex"
  | "text"
  | "tsx"
  | "ts"
  | "typescript"
  | "vala"
  | "vbnet"
  | "verilog"
  | "vhdl"
  | "xml"
  | "xquery"
  | "yaml"

export interface Props {
  code: string
  language: supportedLanguages
  caption?: string | ReactNode
}

export default function PCode({ code, language, caption }: Props) {
  return (
    <>
      <Card className={caption ? "mb-0" : "mb-3"}>
        <CopyBlock
          text={code}
          language={language}
          showLineNumbers={true}
          theme={a11yLight}
          codeBlock
        />
      </Card>
      {caption && <p className={"text-muted mb-3"}>{caption}</p>}
    </>
  )
}
