import { Link } from "react-router-dom"

type HeightUnit = "px" | "rem" | "vh"
type HeightProp = `${number}${HeightUnit}` | "0"

interface Props {
    margin?: HeightProp
}

export function Footer({ margin = "0" }: Props) {
    return (
        <footer style={{ marginTop: margin }}>
            <hr className="my-0 w-100" />

            <div className="text-white" style={{ padding: "2.5rem 0" }}>
                <ul className="nav justify-content-center pt-0 mt-0 pb-3 mb-3">
                    <li className="nav-item">
                        <Link
                            to="#"
                            className="nav-link px- py-0"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Top
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-muted mb-0">
                    Portfolio Website © 2025 Robert Lucas
                </p>
            </div>
        </footer>
    )
}
