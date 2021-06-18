import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Style-Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <Container fluid className="footer__wrapper">
                <Row className="footer__top">
                    <Col className="footer__top--left">
                        <Row>
                            <Col>
                                <div>
                                    <ul>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--link"
                                                href="#/"
                                            >
                                                Find A Store
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--link"
                                                href="#/"
                                            >
                                                Become A Member
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--link"
                                                href="#/"
                                            >
                                                Sign Up for Email
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--link"
                                                href="#/"
                                            >
                                                Send Us Feedback
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <ul>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--link"
                                                href="#/"
                                            >
                                                Get Help
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Order Status
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Delivery
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Returns
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Payment Options
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <ul>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--link"
                                                href="#/"
                                            >
                                                About Nike
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                News
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Careers
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Investors
                                            </a>
                                        </li>
                                        <li className="footer__top--item">
                                            <a
                                                className="footer__top--sub-link"
                                                href="#/"
                                            >
                                                Sustainability
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="footer__social--wrapper">
                        <ul className="footer__social--list">
                            <li className="footer__social--item">
                                <a href="#/">
                                    <i class="bx bxl-twitter"></i>
                                </a>
                            </li>
                            <li className="footer__social--item">
                                <a href="#/">
                                    <i class="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li className="footer__social--item">
                                <a href="#/">
                                    <i class="bx bxl-youtube"></i>
                                </a>
                            </li>
                            <li className="footer__social--item">
                                <a href="#/">
                                    <i class="bx bxl-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="footer__bottom">
                    <Col className="footer__bottom--left">
                        <div className="footer__bottom--flex-box">
                            <a href="#/">
                                <i class="bx bxs-location-plus"></i>
                                <span>Vietnam</span>
                            </a>
                            <div className="footer__bottom--copyright">
                                <span>
                                    © 2021 Nike, Inc. All Rights Reserved
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col className="footer__bottom--right">
                        <ul className="footer__bottom--list">
                            <li className="footer__bottom--item">
                                <a href="#/">Guides</a>
                            </li>
                            <li className="footer__bottom--item">
                                <a href="#/">Terms of Sale</a>
                            </li>
                            <li className="footer__bottom--item">
                                <a href="#/">Terms of Use</a>
                            </li>
                            <li className="footer__bottom--item">
                                <a href="#/">Nike Privacy Policy</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
