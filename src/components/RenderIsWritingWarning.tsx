import { Card } from "react-bootstrap"

export default function RenderIsWritingWarning() {
  return (
    <Card
      className="fw-bold d-flex align-items-center justify-content-center mb-1"
      style={{ color: "#a51a1a" }}
    >
      <Card.Body className="text-center">
        <i>This page is actively being written!</i>
      </Card.Body>
    </Card>
  )
}
