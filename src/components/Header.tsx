import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";

export interface Props {
    hidden?: boolean;
}

export default function Header({hidden = false}: Props) {
    return <div style={hidden ? {visibility: "hidden"} : {}}>
        <Navbar as={hidden ? "div" : undefined} bg="white" variant="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Robert Lucas</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        {/*<Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>*/}
                        {/*<NavDropdown title="More" id="nav-dropdown">*/}
                        {/*    <NavDropdown.Item as={Link} to="/action1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item as={Link} to="/action2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item as={Link} to="/more">Something else</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav>
                        {/*<Nav.Link as={Link} to="/login">Login</Nav.Link>*/}
                        {/*<Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <hr className="w-100 mt-1 mb-1"/>
    </div>
        ;
}