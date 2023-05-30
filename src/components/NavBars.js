import { useEffect, useState } from "react"
import { Navbar, Container } from "react-bootstrap"
import Logo from "../assets/img/logo.png"

export const NavBars = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scolled, seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            } else {
                seScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    return(
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Features</Nav.Link>
                    <Nav.Link href="#link">Rules</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="connect">
                        <a href="#link">Connect</a>
                        <a href="#link">Support</a>
                    </div>
                    <button className="btn" onClick={() => console.log('connect')}><span>Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}