import React, { useState } from "react"
import { JORDAN_LOGO, NIKE_LOGO } from "assets/index"
import "./Style-Header.scss"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header id="header">
            <div className="header__container">
                <div className="header__top d-lg-b z-3">
                    <div className="header__top--wrapper">
                        <div className="header__top--left flex-box-md">
                            <a className="header__top--logo-jor" href="#/">
                                <img src={JORDAN_LOGO} alt="jordan-logo" />
                            </a>
                        </div>
                        <div className="header__top--right flex-box-md">
                            <div className="header__top--item flex-box-lg">
                                <div className="header__top--item-wrapper">
                                    <a
                                        onMouseEnter={() => setIsOpen(true)}
                                        onMouseLeave={() => setIsOpen(false)}
                                        className="header__top--button item-hover"
                                        href="#/"
                                    >
                                        <span className="label__help">
                                            Help
                                        </span>
                                    </a>
                                    <div
                                        className={
                                            isOpen === true
                                                ? "header__top--help-dropdown is-open"
                                                : "header__top--help-dropdown"
                                        }
                                    >
                                        <div className="header__top--dropdown-wrapper">
                                            <nav className="dropdown-nav">
                                                <a
                                                    className="dropdown-nav__title"
                                                    href="#/"
                                                >
                                                    <span>Help</span>
                                                </a>
                                                <ul className="dropdown-nav__list z-4">
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Order Status
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Dispatch and
                                                            Delivery
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Returns
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Privacy Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Terms of Sale
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Terms of Use
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-nav__list--item"
                                                            href="#/"
                                                        >
                                                            Send Us Feedback
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <span className="line-vertical">|</span>
                            </div>
                            <div className="header__top--login flex-box-lg">
                                <div className="header__top--login-wrapper flex-box-lg">
                                    <a
                                        className="header__top--join item-hover flex-box-lg"
                                        href="#/"
                                    >
                                        <span>Join Us</span>
                                    </a>
                                    <span className="line-vertical">|</span>
                                    <button className="header__top--sign-in item-hover">
                                        <span>Sign In</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom"></div>
            </div>
        </header>
    )
}
