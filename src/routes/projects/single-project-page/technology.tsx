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
  getElement: () => JSX.Element
}

export const typescriptTechnology: Technology = {
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
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#000000" }}>
      <Unity style={{ marginBottom: "4px", marginRight: "4px" }} />
      Unity
    </span>
  ),
}

export const androidTechnology: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#2edf85" }}>
      <Android style={{ marginRight: "4px" }} />
      Android
    </span>
  ),
}

export const netcodeTechnology: Technology = {
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
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#ead30f" }}>
      <Javascript style={{ marginBottom: "4px", marginRight: "4px" }} />
      Javascript
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Html = lazy(() => import("../../../components/icons/Html"))
export const htmlTechnology: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#e44d26" }}>
      <Suspense>
        <Html style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      Html
    </span>
  ),
}

export const cssTechnology: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#214ce5" }}>
      <Css style={{ marginBottom: "4px", marginRight: "4px" }} />
      Css
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Django = lazy(() => import("../../../components/icons/Django"))
export const djangoTechnology: Technology = {
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
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#7952b3" }}>
      <BootstrapFill style={{ marginBottom: "4px", marginRight: "4px" }} />
      Bootstrap
    </span>
  ),
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const x86_64_AsmTechnology: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#782a2a" }}>
      <Cpu style={{ marginBottom: "4px", marginRight: "4px" }} />
      x86-64 ASM
    </span>
  ),
}

export const compilersTechnology: Technology = {
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
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#DD2C00" }}>
      <Suspense>
        <Firebase style={{ marginBottom: "4px", marginRight: "4px" }} />
      </Suspense>
      Firebase
    </span>
  ),
}
