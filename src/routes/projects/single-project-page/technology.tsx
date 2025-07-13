import { JSX, lazy, Suspense } from "react"
import {
  Android,
  BootstrapFill,
  Cpu,
  Css,
  FileEarmarkBinaryFill,
  GpuCard,
  HddNetwork,
  Javascript,
  Typescript,
  Unity,
} from "react-bootstrap-icons"

export interface Technology {
  id: string
  name: string
  getElement: () => JSX.Element
}

export const typescriptTechnology: Technology = {
  id: "typescript",
  name: "TypeScript",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#3178c6" }}>
      <Typescript style={{ marginBottom: "4px", marginRight: "4px" }} />
      TypeScript
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const ReactIcon = lazy(() => import("../../../components/icons/ReactIcon"))
export const reactTechnology: Technology = {
  id: "react",
  name: "React",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#61dafb" }}>
      <Suspense>
        <ReactIcon style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      React
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Rust = lazy(() => import("../../../components/icons/Rust"))
export const rustTechnology: Technology = {
  id: "rust",
  name: "Rust",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#f74c00" }}>
      <Suspense>
        <Rust style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      Rust
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Java = lazy(() => import("../../../components/icons/Java"))
export const javaTechnology: Technology = {
  id: "java",
  name: "Java",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#5382a1" }}>
      <Suspense>
        <Java style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      Java
    </span>
  ),
}

export const gpuTechnology: Technology = {
  id: "gpu",
  name: "GPU",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#77b900" }}>
      <GpuCard style={{ marginBottom: "4px", marginRight: "4px" }} />
      GPU
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const CSharp = lazy(() => import("../../../components/icons/CSharp"))
export const cSharpTechnology: Technology = {
  id: "csharp",
  name: "C#",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#390091" }}>
      <Suspense>
        <CSharp style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      C#
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Python = lazy(() => import("../../../components/icons/Python"))
export const pythonTechnology: Technology = {
  id: "python",
  name: "Python",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#3671a2" }}>
      <Suspense>
        <Python style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      Python
    </span>
  ),
}

export const unityTechnology: Technology = {
  id: "unity",
  name: "Unity",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#000000" }}>
      <Unity style={{ marginBottom: "4px", marginRight: "4px" }} />
      Unity
    </span>
  ),
}

export const androidTechnology: Technology = {
  id: "android",
  name: "Android",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#2edf85" }}>
      <Android style={{ marginRight: "4px" }} />
      Android
    </span>
  ),
}

export const netcodeTechnology: Technology = {
  id: "netcode",
  name: "Netcode",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#000000" }}>
      <HddNetwork style={{ marginBottom: "4px", marginRight: "4px" }} />
      Netcode
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const CPlusPlus = lazy(() => import("../../../components/icons/CPlusPlus"))
export const cppTechnology: Technology = {
  id: "cpp",
  name: "C++",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#608ac2" }}>
      <Suspense>
        <CPlusPlus style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      C++
    </span>
  ),
}

// Not original colour bc awful contrast
export const javascriptTechnology: Technology = {
  id: "javascript",
  name: "JavaScript",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#ead30f" }}>
      <Javascript style={{ marginBottom: "4px", marginRight: "4px" }} />
      JavaScript
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Html = lazy(() => import("../../../components/icons/Html"))
export const htmlTechnology: Technology = {
  id: "html",
  name: "HTML",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#e44d26" }}>
      <Suspense>
        <Html style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      HTML
    </span>
  ),
}

export const cssTechnology: Technology = {
  id: "css",
  name: "CSS",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#214ce5" }}>
      <Css style={{ marginBottom: "4px", marginRight: "4px" }} />
      CSS
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Django = lazy(() => import("../../../components/icons/Django"))
export const djangoTechnology: Technology = {
  id: "django",
  name: "Django",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#092e20" }}>
      <Suspense>
        <Django style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      Django
    </span>
  ),
}

export const bootstrapTechnology: Technology = {
  id: "bootstrap",
  name: "Bootstrap",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#7952b3" }}>
      <BootstrapFill style={{ marginBottom: "4px", marginRight: "4px" }} />
      Bootstrap
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const x86_64_AsmTechnology: Technology = {
  id: "x86_64",
  name: "x86-64 ASM",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#782a2a" }}>
      <Cpu style={{ marginBottom: "4px", marginRight: "4px" }} />
      x86-64 ASM
    </span>
  ),
}

export const compilersTechnology: Technology = {
  id: "compilers",
  name: "Compilers",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#3365b8" }}>
      <FileEarmarkBinaryFill
        style={{ marginBottom: "4px", marginRight: "4px" }}
      />
      Compilers
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Firebase = lazy(() => import("../../../components/icons/Firebase"))
export const firebaseTechnology: Technology = {
  id: "firebase",
  name: "Firebase",
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#DD2C00" }}>
      <Suspense>
        <Firebase style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      Firebase
    </span>
  ),
}

export const allTechnologies: Technology[] = [
  typescriptTechnology,
  reactTechnology,
  rustTechnology,
  javaTechnology,
  gpuTechnology,
  cSharpTechnology,
  pythonTechnology,
  unityTechnology,
  androidTechnology,
  netcodeTechnology,
  cppTechnology,
  javascriptTechnology,
  htmlTechnology,
  cssTechnology,
  djangoTechnology,
  bootstrapTechnology,
  x86_64_AsmTechnology,
  compilersTechnology,
  firebaseTechnology,
]
