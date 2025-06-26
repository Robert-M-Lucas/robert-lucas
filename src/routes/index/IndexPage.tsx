import { RefObject, useEffect, useRef, useState } from "react"
import FooterWrapper from "../../components/FooterWrapper.tsx"
import Header from "../../components/Header.tsx"
import { ProjectSpotlight } from "./ProjectSpotlight.tsx"
import PROJECT_LIST from "../projects/SingleProjectPage/project_list.ts"
import React from "react"
import { AnimatePresence, motion, Transition } from "framer-motion"

export const projectCycleTime = 15000

const transition: Transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
}

export default function IndexPage() {
    const [projectIndex, setProjectIndex] = useState<number>(
        Math.floor(Math.random() * PROJECT_LIST.length)
    )
    const [currentHeading, setCurrentHeading] = useState("Robert Lucas")
    const [showHeading, setShowHeading] = useState(true)

    const timeout: RefObject<NodeJS.Timeout | null> = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setProjectIndex((prev) => {
                if (prev + 1 == PROJECT_LIST.length) {
                    return 0
                } else {
                    return prev + 1
                }
            })
        }, projectCycleTime)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        timeout.current = setTimeout(() => {
            setShowHeading(false)
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
            timeout.current = setTimeout(() => {
                setShowHeading(true)
                setCurrentHeading("Click on any project")
            }, 1200)
        }, 5000)

        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [])

    return (
        <FooterWrapper>
            <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "100vh" }}
            >
                <Header />

                <div
                    className={
                        "d-flex flex-column justify-content-end align-items-center"
                    }
                    style={{ height: "10vh" }}
                >
                    <AnimatePresence>
                        {showHeading && (
                            <motion.div
                                key={currentHeading.split(" ").length}
                                initial="hidden"
                                whileInView="visible"
                                exit={"hidden"}
                                transition={{ staggerChildren: 0.1 }}
                                className={
                                    "d-flex flex-column justify-content-center align-items-center"
                                }
                            >
                                <h1 className={"display-1 fw-bold"}>
                                    {currentHeading
                                        .split(" ")
                                        .map((word, index) => (
                                            <React.Fragment key={index}>
                                                <motion.span
                                                    className="inline-block"
                                                    transition={transition}
                                                    variants={variants}
                                                >
                                                    {word}
                                                </motion.span>
                                                {index <
                                                    currentHeading.split(" ")
                                                        .length -
                                                        1 && " "}
                                            </React.Fragment>
                                        ))}
                                </h1>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div
                    className={
                        "d-flex flex-column justify-content-start align-items-center"
                    }
                    style={{ height: "55vh" }}
                >
                    <ProjectSpotlight
                        project={PROJECT_LIST[projectIndex]}
                        projectCycleTime={projectCycleTime}
                    />
                </div>

                <Header hidden />
            </div>
        </FooterWrapper>
    )
}
