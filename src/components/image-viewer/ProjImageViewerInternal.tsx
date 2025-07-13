import { PImgProps } from "../project-entry-utils/P_img.tsx"
import Modal from "react-bootstrap/Modal"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { Image } from "react-bootstrap"

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
          <Modal.Body className="text-center">
            <Zoom>
              <Image
                src={image.image}
                className={"w-100"}
                alt={image.alt}
                fluid
              />
            </Zoom>
          </Modal.Body>
        </>
      )}
    </Modal>
  )
}
