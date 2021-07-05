import React, { useState, useEffect } from "react"
import {
    SlideBanner,
    Trend,
    Feature,
    ProductCarousel,
    MoreShoes,
    MerchMenu
} from "components/index"
import response from "data/ListProductHome.json"

export default function HomePage() {
    const [dataProducts, setDataProducts] = useState()

    useEffect(() => {
        setDataProducts(response.listProduct)
    }, [])

    return (
        <>
            <SlideBanner />
            <Trend />
            <Feature />
            <ProductCarousel title="Sunny Day Must-Haves" data={dataProducts} />
            <MoreShoes />
            <MerchMenu />
        </>
    )
}
