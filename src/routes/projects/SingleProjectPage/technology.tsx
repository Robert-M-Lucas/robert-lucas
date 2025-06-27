import { JSX } from "react"
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
import Rust from "../../../components/icons/Rust.tsx"
import ReactIcon from "../../../components/icons/ReactIcon.tsx"
import Java from "../../../components/icons/Java.tsx"
import CSharp from "../../../components/icons/CSharp.tsx"
import Python from "../../../components/icons/Python.tsx"
import CPlusPlus from "../../../components/icons/CPlusPlus.tsx"
import Html from "../../../components/icons/Html.tsx"
import Django from "../../../components/icons/Django.tsx"

export interface Technology {
  getElement: () => JSX.Element
}

export const TYPESCRIPT: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#3178c6" }}>
      <Typescript style={{ marginBottom: "4px", marginRight: "4px" }} />
      TypeScript
    </span>
  ),
}

export const REACT: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#61dafb" }}>
      <ReactIcon style={{ marginBottom: "4px", marginRight: "4px" }} />
      React
    </span>
  ),
}

export const RUST: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#f74c00" }}>
      <Rust style={{ marginBottom: "4px", marginRight: "4px" }} />
      Rust
    </span>
  ),
}

export const JAVA: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#5382a1" }}>
      <Java style={{ marginBottom: "4px", marginRight: "4px" }} />
      Java
    </span>
  ),
}

export const GPU: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#77b900" }}>
      <GpuCard style={{ marginBottom: "4px", marginRight: "4px" }} />
      GPU
    </span>
  ),
}

export const CSHARP: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#390091" }}>
      <CSharp style={{ marginBottom: "4px", marginRight: "4px" }} />
      C#
    </span>
  ),
}

export const PYTHON: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#3671a2" }}>
      <Python style={{ marginBottom: "4px", marginRight: "4px" }} />
      Python
    </span>
  ),
}

export const UNITY: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#000000" }}>
      <Unity style={{ marginBottom: "4px", marginRight: "4px" }} />
      Unity
    </span>
  ),
}

export const ANDROID: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#2edf85" }}>
      <Android style={{ marginBottom: "4px", marginRight: "4px" }} />
      Android
    </span>
  ),
}

export const NETCODE: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#000000" }}>
      <HddNetwork style={{ marginBottom: "4px", marginRight: "4px" }} />
      Netcode
    </span>
  ),
}

export const CPP: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#608ac2" }}>
      <CPlusPlus style={{ marginBottom: "4px", marginRight: "4px" }} />
      C++
    </span>
  ),
}

// Not original colour bc awful contrast
export const JAVASCRIPT: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#ead30f" }}>
      <Javascript style={{ marginBottom: "4px", marginRight: "4px" }} />
      Javascript
    </span>
  ),
}

export const HTML: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#e44d26" }}>
      <Html style={{ marginBottom: "4px", marginRight: "4px" }} />
      Html
    </span>
  ),
}

export const CSS: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#214ce5" }}>
      <Css style={{ marginBottom: "4px", marginRight: "4px" }} />
      Css
    </span>
  ),
}

export const DJANGO: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#092e20" }}>
      <Django style={{ marginBottom: "4px", marginRight: "4px" }} />
      Django
    </span>
  ),
}

export const BOOTSTRAP: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#7952b3" }}>
      <BootstrapFill style={{ marginBottom: "4px", marginRight: "4px" }} />
      Bootstrap
    </span>
  ),
}

export const X86_64_ASM: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#782a2a" }}>
      <Cpu style={{ marginBottom: "4px", marginRight: "4px" }} />
      x86-64 ASM
    </span>
  ),
}

export const COMPILERS: Technology = {
  getElement: () => (
    <span className={"fw-bold text-nowrap"} style={{ color: "#3365b8" }}>
      <FileEarmarkBinaryFill
        style={{ marginBottom: "4px", marginRight: "4px" }}
      />
      Compilers
    </span>
  ),
}
