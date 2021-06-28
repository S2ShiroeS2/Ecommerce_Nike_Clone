import React, { useState } from "react"
import PropTypes from "prop-types"
import { Col } from "react-bootstrap"
import "./Style-MerchMenuItem.scss"

MerchMenuItem.propTypes = {
    dataItem: PropTypes.object
}

MerchMenuItem.defaultProps = {
    dataItem: {}
}

export default function MerchMenuItem({ dataItem }) {
    const [isShow, setIsShow] = useState(false)

    return (
        <Col>
            <h4
                onClick={() => setIsShow(!isShow)}
                className="merch-menu__title"
            >
                <span>{dataItem.title}</span>
            </h4>
            <div
                className={
                    isShow === true
                        ? "merch-menu__mobile active"
                        : "merch-menu__mobile"
                }
            >
                <ul>
                    {dataItem.sub.show.map(item => (
                        <li key={item.id} className="merch-menu__item">
                            <a className="merch-menu__link" href={item.href}>
                                {item.displayName}
                            </a>
                        </li>
                    ))}
                    <div
                        className={
                            isShow === true
                                ? "merch-menu__list-hidden active"
                                : "merch-menu__list-hidden"
                        }
                    >
                        {dataItem.sub.hidden.map(item => (
                            <li key={item.id} className="merch-menu__item">
                                <a
                                    className="merch-menu__link"
                                    href={item.href}
                                >
                                    {item.displayName}
                                </a>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </Col>
    )
}
