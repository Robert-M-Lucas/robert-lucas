import { Navbar, Nav, Container } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import { INDEX_PATH, PROJECTS_PATH } from "../router.tsx"
import { clearProjectScrollProgress } from "../util/util.ts"

export interface Props {
  hidden?: boolean
}

export default function Header({ hidden = false }: Props) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div style={hidden ? { visibility: "hidden" } : {}}>
      <Navbar
        as={hidden ? "div" : undefined}
        bg="white"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to={INDEX_PATH}>
            Robert Lucas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link
                viewTransition
                as={Link}
                to={INDEX_PATH}
                active={isActive(INDEX_PATH)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                viewTransition
                as={Link}
                to={PROJECTS_PATH}
                active={isActive(PROJECTS_PATH)}
                onClick={() => {
                  clearProjectScrollProgress()
                }}
              >
                Projects
              </Nav.Link>
            </Nav>
            <Nav>
              {/*<Nav.Link viewTransitionas={Link} to="/login">Login</Nav.Link>*/}
              {/*<Nav.Link viewTransitionas={Link} to="/signup">Sign Up</Nav.Link>*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="w-100 mt-1 mb-1" />
    </div>
  )
}
