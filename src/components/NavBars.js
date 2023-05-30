import { Navbar, Container } from "react-bootstrap"
import Logo from "../assets/img/logo.png"

export const NavBars = () => {
    return(
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}