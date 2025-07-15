import { PImgProps } from "../project-entry-utils/P_img.tsx"
import Modal from "react-bootstrap/Modal"
import { Image } from "react-bootstrap"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

export interface Props {
  image: PImgProps | null
  handleClose: () => void
}

export default function ProjImageViewerInternal({ image, handleClose }: Props) {
  return (
    <Modal show={image !== null} onHide={handleClose} centered size="xl">
      {image && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{image.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="text-center p-2"
            style={{ background: "lightgrey" }}
          >
            <TransformWrapper
              wheel={{ step: 50 }}
              pinch={{ step: 5 }}
              doubleClick={{ mode: "toggle" }}
              panning={{ velocityDisabled: true }}
              smooth={true}
              minScale={0.8}
              initialScale={1}
            >
              <TransformComponent>
                <Image
                  src={image.image}
                  alt={image.alt}
                  style={{
                    width: "90vw",
                    height: "70vh",
                    objectFit: "contain",
                  }}
                  fluid
                />
              </TransformComponent>
            </TransformWrapper>
          </Modal.Body>
        </>
      )}
    </Modal>
  )
}
