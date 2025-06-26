import { useEffect, useState } from "react"
import FooterWrapper from "../../components/FooterWrapper.tsx"
import Header from "../../components/Header.tsx"
import { ProjectSpotlight } from "./ProjectSpotlight.tsx"
import PROJECT_LIST from "../projects/SingleProjectPage/project_list.ts"

export const projectCycleTime = 1000000

export default function IndexPage() {
    const [projectIndex, setProjectIndex] = useState<number>(12)

    useEffect(() => {
        const interval = setInterval(() => {
            setProjectIndex((prev) => prev + 1)
        }, projectCycleTime)

        return () => clearInterval(interval)
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
                        "d-flex justify-content-center align-items-center"
                    }
                >
                    <ProjectSpotlight project={PROJECT_LIST[projectIndex]} />
                </div>
                <Header hidden />
            </div>
        </FooterWrapper>
    )
}
