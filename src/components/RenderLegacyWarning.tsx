import {Card} from "react-bootstrap";

export default function RenderLegacyWarning() {
    return <Card className="fw-bold d-flex align-items-center justify-content-center mb-1" style={{color: "#a51a1a"}}>
        <Card.Body>
            This is a legacy project from my old website - there may be stylistic inconsistencies
        </Card.Body>
    </Card>
}