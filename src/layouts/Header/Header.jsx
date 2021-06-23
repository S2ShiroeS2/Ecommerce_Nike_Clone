import React from "react"
import {
    Container,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from "react-bootstrap"
import "./Style-Header.scss"

export default function Header() {
    return (
        <header>
            <Container fluid>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="/">
                        <i className="bx bxs-cube-alt"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-box ml-auto mr-5">
                            <Nav.Link href="/men">Men</Nav.Link>
                            <Nav.Link href="#link">Women</Nav.Link>
                            <Nav.Link href="#link">Kids</Nav.Link>
                            <Nav.Link href="#link">Sale</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav>
                        <Form inline className="p-r">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2 border-r search-input"
                            />
                            <Button variant="light" className="border-c">
                                <i className="bx bx-search"></i>
                            </Button>
                        </Form>
                        <div className="user ml-5">
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/cart" className="shop-bag">
                                <i className="bx bx-shopping-bag"></i>
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}
