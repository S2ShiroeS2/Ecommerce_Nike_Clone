import React, { useState } from "react"
import { JORDAN_LOGO, NIKE_LOGO } from "assets/index"
import "./Style-Header.scss"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isShowMenu, setIsShowMenu] = useState(false)
    return (
        <>
            <header id="header">
                <div className="header__container">
                    <div className="d-sm-h  header__top d-lg-b z-3">
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
                                            onMouseLeave={() =>
                                                setIsOpen(false)
                                            }
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
                    <div className="header__bottom z-2">
                        <div className="header__bottom--wrapper">
                            <div
                                className={
                                    isSearch === true
                                        ? "header__bottom--logo-nike z-6"
                                        : "header__bottom--logo-nike z-4"
                                }
                            >
                                <a
                                    className="header__bottom--img-link"
                                    href="#/"
                                >
                                    <img
                                        className="header__bottom--logo"
                                        src={NIKE_LOGO}
                                        alt="logo-nike"
                                    />
                                </a>
                            </div>
                            <div className="header__bottom--nav-box">
                                <nav className="nav-box__menu">
                                    <div
                                        className={
                                            isShowMenu === true
                                                ? "nav-box__menu-mobile z-2 d-sm-ib is-d-mobile-menu"
                                                : "nav-box__menu-mobile z-2 d-sm-ib"
                                        }
                                    >
                                        <div className="nav-box__menu-mobile--wrapper">
                                            <button className="nav-box__menu-mobile--link">
                                                <span className="nav-box__menu-mobile--text">
                                                    Men
                                                </span>
                                                <i className="bx bxs-chevron-right"></i>
                                            </button>
                                            <button className="nav-box__menu-mobile--link">
                                                <span className="nav-box__menu-mobile--text">
                                                    Women
                                                </span>
                                                <i className="bx bxs-chevron-right"></i>
                                            </button>
                                            <button className="nav-box__menu-mobile--link">
                                                <span className="nav-box__menu-mobile--text">
                                                    Kids
                                                </span>
                                                <i className="bx bxs-chevron-right"></i>
                                            </button>
                                            <button className="nav-box__menu-mobile--link">
                                                <span className="nav-box__menu-mobile--text">
                                                    Customise
                                                </span>
                                                <i className="bx bxs-chevron-right"></i>
                                            </button>
                                            <button className="nav-box__menu-mobile--link">
                                                <span className="nav-box__menu-mobile--text">
                                                    Sale
                                                </span>
                                                <i className="bx bxs-chevron-right"></i>
                                            </button>
                                            <button className="nav-box__menu-mobile--link">
                                                <span className="nav-box__menu-mobile--text">
                                                    SNKRS
                                                </span>
                                                <i className="bx bxs-chevron-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="nav-box__menu-desktop">
                                        <ul className="nav-box__menu-desktop--list">
                                            <li className="nav-box__menu-desktop--item">
                                                <a
                                                    className="nav-box__menu-desktop--link"
                                                    href="/#"
                                                >
                                                    Men
                                                </a>
                                                {/* Dropdown menu */}
                                                <div className="nav-box__menu-desktop--dropdown">
                                                    <div className="dropdown__container">
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Featured
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                New Releases
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                SNKRS Launch
                                                                Calendar
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Member Access
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sustainable
                                                                Materials
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Force 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Top Picks Under
                                                                2,300,000₫
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tie Dye
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Summer Shop
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sale
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Shoes
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Newest Sneakers
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Shoes
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Lifestyle
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jordan
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Gym and Training
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Skateboarding
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tennis
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sandals and
                                                                Slides
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Customise with
                                                                Nike By You
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Sale Shoes
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Clothing
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Clothing
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tops and
                                                                T-Shirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jerseys and Kits
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Hoodies and
                                                                Sweatshirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jackets and
                                                                Gilets
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Pants and
                                                                Leggings
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tracksuits
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Compression and
                                                                Base Layer
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Shorts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Caps
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Socks
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Bags and
                                                                Backpacks
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Accessories and
                                                                Equipment
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Sale
                                                                Clothing
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Shop By Sport
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Gym and Training
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Yoga
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Skateboarding
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tennis
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Golf
                                                            </a>
                                                            <button className="dropdown__btn">
                                                                Shop By Brand
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike Sportswear
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                NikeLab
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike By You
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jordan
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                ACG
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                NBA
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike SB
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Icons
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Force 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Pegasus
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Blazer
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Jordan 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-box__menu-desktop--item">
                                                <a
                                                    className="nav-box__menu-desktop--link"
                                                    href="/#"
                                                >
                                                    Women
                                                </a>
                                                <div className="nav-box__menu-desktop--dropdown">
                                                    <div className="dropdown__container">
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Featured
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                New Releases
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                SNKRS Launch
                                                                Calendar
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Member Access
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Force 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike Icon Clash
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sustainable
                                                                Materials
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Top Picks Under
                                                                2,300,000₫
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tie Dye
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Summer Shop
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sale
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Shoes
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Shoes
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Lifestyle
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Gym and Training
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jordan
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Skateboarding
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tennis
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sandals and
                                                                Slides
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Customise with
                                                                Nike By You
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Sale Shoes
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Clothing
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Clothing
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sports Bras
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tops and
                                                                T-Shirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Hoodies and
                                                                Sweatshirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jackets and
                                                                Gilets
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Pants and
                                                                Leggings
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tracksuits
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Compression and
                                                                Base Layer
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Skirts and
                                                                Dresses
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jerseys and Kits
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Modest Wear
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Plus size
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Caps
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Socks
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Bags and
                                                                Backpacks
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Accessories and
                                                                Equipment
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Sale
                                                                Clothing
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Shop By Sport
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Gym and Training
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Yoga
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Skateboarding
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tennis
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Golf
                                                            </a>
                                                            <button className="dropdown__btn">
                                                                Shop By Brand
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike Sportswear
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                NikeLab
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike By You
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jordan
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                ACG
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                NBA
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike SB
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Icons
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Force 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Pegasus
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Blazer
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Jordan 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Max
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-box__menu-desktop--item">
                                                <a
                                                    className="nav-box__menu-desktop--link"
                                                    href="/#"
                                                >
                                                    Kids
                                                </a>
                                                <div className="nav-box__menu-desktop--dropdown">
                                                    <div className="dropdown__container">
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Featured
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                New Releases
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Member Access
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Force 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Summer Shop
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tie Dye
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Bags and
                                                                Backpacks
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jordan
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sale
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Boys' Shoes
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Older Kids
                                                                (3–6.5)
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Younger Kids
                                                                (10–2.5)
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Baby and Toddler
                                                                (1.5–9.5)
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Lifestyle
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Jordan
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sandals and
                                                                Slides
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Shoes
                                                            </a>
                                                            <button className="dropdown__btn">
                                                                Boys' Clothing
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tops and
                                                                T-Shirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Hoodies and
                                                                Sweatshirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Pants and
                                                                Leggings
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Shorts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Boys'
                                                                Clothing
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Girls' Shoes
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Older Kids
                                                                (3–6.5)
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Younger Kids
                                                                (10–2.5)
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Baby and Toddler
                                                                (1.5–9.5)
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Lifestyle
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sandals and
                                                                Slides
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Shoes
                                                            </a>
                                                            <button className="dropdown__btn">
                                                                Girls' Clothing
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tops and
                                                                T-Shirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Sports Bras
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Hoodies and
                                                                Sweatshirts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Pants and
                                                                Leggings
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Shorts
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                All Girls'
                                                                Clothing
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Accessories and
                                                                Equipment
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Balls
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Bags and
                                                                Backpacks
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Socks
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Hats and
                                                                Headwear
                                                            </a>
                                                            <button className="dropdown__btn">
                                                                Shop By Sport
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Gym and Training
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Tennis
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-box__menu-desktop--item">
                                                <a
                                                    className="nav-box__menu-desktop--link"
                                                    href="/#"
                                                >
                                                    Customise
                                                </a>
                                                <div className="nav-box__menu-desktop--dropdown">
                                                    <div className="dropdown__container">
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Featured
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Nike By You New
                                                                Releases
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Nike By You
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Men
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Women
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                By Sport
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Lifestyle
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Running
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Basketball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Gym and Training
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Football
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Baseball
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Skateboarding
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Icons
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Max
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Air Force 1
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Metcon
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Huarache
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Free
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Flyknit
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-box__menu-desktop--item">
                                                <a
                                                    className="nav-box__menu-desktop--link"
                                                    href="/#"
                                                >
                                                    Sale
                                                </a>
                                                <div className="nav-box__menu-desktop--dropdown">
                                                    <div className="dropdown__container">
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Featured
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Shop All Sale
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Men's Sale
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Shoes
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Clothing
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Accessories and
                                                                Equipment
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Women's Sale
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Shoes
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Clothing
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Accessories and
                                                                Equipment
                                                            </a>
                                                        </div>
                                                        <div className="dropdown__column">
                                                            <button className="dropdown__btn">
                                                                Kids' Sale
                                                            </button>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Shoes
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Clothing
                                                            </a>
                                                            <a
                                                                className="dropdown__link"
                                                                href="#/"
                                                            >
                                                                Accessories and
                                                                Equipment
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-box__menu-desktop--item">
                                                <a
                                                    className="nav-box__menu-desktop--link"
                                                    href="/#"
                                                >
                                                    SNKRS
                                                </a>
                                                <div className="nav-box__menu-desktop--dropdown"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div
                                    className={
                                        isSearch === true
                                            ? "header__bottom--search is-show-bg"
                                            : "header__bottom--search"
                                    }
                                >
                                    <div className="header__bottom--search-box">
                                        <div className="header__bottom--search-in-menu">
                                            <div
                                                className={
                                                    isSearch === true
                                                        ? "search-in-menu__container is-fix-size"
                                                        : "search-in-menu__container"
                                                }
                                            >
                                                <div
                                                    className={
                                                        isSearch === true
                                                            ? "search-in-menu__input-form is-active-search"
                                                            : "search-in-menu__input-form"
                                                    }
                                                >
                                                    <input
                                                        onClick={() =>
                                                            setIsSearch(true)
                                                        }
                                                        className="search-in-menu__input"
                                                        type="text"
                                                        placeholder="Search"
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            setIsSearch(true)
                                                        }
                                                        className="search-in-menu__btn"
                                                    >
                                                        <i className="bx bx-search"></i>
                                                    </button>
                                                </div>
                                                {/* button close form search is here */}
                                                <button
                                                    className={
                                                        isSearch === true
                                                            ? "search-in-menu__close z-2 is-open-btn-close"
                                                            : "search-in-menu__close z-2"
                                                    }
                                                    onClick={() =>
                                                        setIsSearch(false)
                                                    }
                                                >
                                                    <i className="bx bx-x"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                isSearch === true
                                                    ? "header__bottom--search-out-menu is-show-his-search"
                                                    : "header__bottom--search-out-menu"
                                            }
                                        >
                                            <div className="search-out-menu__container">
                                                <p
                                                    className={
                                                        isSearch === true
                                                            ? "search-out-menu__title-wrap is-show-title-search"
                                                            : "search-out-menu__title-wrap"
                                                    }
                                                >
                                                    <span className="search-out-menu__wrapper">
                                                        Popular Search Terms
                                                    </span>
                                                </p>
                                                <ul>
                                                    <li>
                                                        <a
                                                            className={
                                                                isSearch ===
                                                                true
                                                                    ? "search-out-menu__item-his-search is-show-content-search"
                                                                    : "search-out-menu__item-his-search"
                                                            }
                                                            href="#/"
                                                        >
                                                            Air Force 1
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header__bottom--btn-group">
                                <a
                                    className="header__bottom--btn-like"
                                    href="#/"
                                >
                                    <i className="bx bx-heart"></i>
                                </a>
                                <div className="header__bottom--bag">
                                    <a
                                        className="header__bottom--btn-bag"
                                        href="#/"
                                    >
                                        <i className="bx bx-shopping-bag"></i>
                                    </a>
                                </div>
                                <button
                                    onClick={() => setIsShowMenu(true)}
                                    className="header__bottom--menu-mobile"
                                >
                                    <i className="bx bx-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                onClick={() => setIsShowMenu(false)}
                className={
                    isShowMenu === true ? "overlay is-o-overlay" : "overlay"
                }
            ></div>
        </>
    )
}
