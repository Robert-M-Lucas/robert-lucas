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
  color: string
  getIcon: () => JSX.Element
}

export const typescriptTechnology: Technology = {
  id: "typescript",
  name: "TypeScript",
  color: "#3178c6",
  getIcon: () => <Typescript style={{ marginBottom: "4px" }} />,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const ReactIcon = lazy(() => import("../../../components/icons/ReactIcon"))
export const reactTechnology: Technology = {
  id: "react",
  name: "React",
  color: "#61dafb",
  getIcon: () => (
    <Suspense>
      <ReactIcon style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Rust = lazy(() => import("../../../components/icons/Rust"))
export const rustTechnology: Technology = {
  id: "rust",
  name: "Rust",
  color: "#f74c00",
  getIcon: () => (
    <Suspense>
      <Rust style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Java = lazy(() => import("../../../components/icons/Java"))
export const javaTechnology: Technology = {
  id: "java",
  name: "Java",
  color: "#5382a1",
  getIcon: () => (
    <Suspense>
      <Java style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

export const gpuTechnology: Technology = {
  id: "gpu",
  name: "GPU",
  color: "#77b900",
  getIcon: () => <GpuCard style={{ marginBottom: "4px" }} />,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const CSharp = lazy(() => import("../../../components/icons/CSharp"))
export const cSharpTechnology: Technology = {
  id: "csharp",
  name: "C#",
  color: "#390091",
  getIcon: () => (
    <Suspense>
      <CSharp style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Python = lazy(() => import("../../../components/icons/Python"))
export const pythonTechnology: Technology = {
  id: "python",
  name: "Python",
  color: "#3671a2",
  getIcon: () => (
    <Suspense>
      <Python style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

export const unityTechnology: Technology = {
  id: "unity",
  name: "Unity",
  color: "#000000",
  getIcon: () => <Unity style={{ marginBottom: "4px" }} />,
}

export const androidTechnology: Technology = {
  id: "android",
  name: "Android",
  color: "#2edf85",
  getIcon: () => <Android style={{ marginBottom: "4px" }} />,
}

export const netcodeTechnology: Technology = {
  id: "netcode",
  name: "Netcode",
  color: "#000000",
  getIcon: () => <HddNetwork style={{ marginBottom: "4px" }} />,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const CPlusPlus = lazy(() => import("../../../components/icons/CPlusPlus"))
export const cppTechnology: Technology = {
  id: "cpp",
  name: "C++",
  color: "#608ac2",
  getIcon: () => (
    <Suspense>
      <CPlusPlus style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

export const javascriptTechnology: Technology = {
  id: "javascript",
  name: "JavaScript",
  color: "#ead30f",
  getIcon: () => <Javascript style={{ marginBottom: "4px" }} />,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Html = lazy(() => import("../../../components/icons/Html"))
export const htmlTechnology: Technology = {
  id: "html",
  name: "HTML",
  color: "#e44d26",
  getIcon: () => (
    <Suspense>
      <Html style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

export const cssTechnology: Technology = {
  id: "css",
  name: "CSS",
  color: "#214ce5",
  getIcon: () => <Css style={{ marginBottom: "4px" }} />,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Django = lazy(() => import("../../../components/icons/Django"))
export const djangoTechnology: Technology = {
  id: "django",
  name: "Django",
  color: "#092e20",
  getIcon: () => (
    <Suspense>
      <Django style={{ marginBottom: "4px" }} />
    </Suspense>
  ),
}

export const bootstrapTechnology: Technology = {
  id: "bootstrap",
  name: "Bootstrap",
  color: "#7952b3",
  getIcon: () => <BootstrapFill style={{ marginBottom: "4px" }} />,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const x86_64_AsmTechnology: Technology = {
  id: "x86_64",
  name: "x86-64 ASM",
  color: "#782a2a",
  getIcon: () => <Cpu style={{ marginBottom: "4px" }} />,
}

export const compilersTechnology: Technology = {
  id: "compilers",
  name: "Compilers",
  color: "#3365b8",
  getIcon: () => <FileEarmarkBinaryFill style={{ marginBottom: "4px" }} />,
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Firebase = lazy(() => import("../../../components/icons/Firebase"))
export const firebaseTechnology: Technology = {
  id: "firebase",
  name: "Firebase",
  color: "#DD2C00",
  getIcon: () => (
    <Suspense>
      <Firebase style={{ marginBottom: "4px" }} />
    </Suspense>
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
