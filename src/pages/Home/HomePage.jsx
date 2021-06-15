import React from "react"
import {
    SlideBanner,
    Trend,
    Feature,
    ProductCarousel,
    MoreShoes
} from "components/index"

export default function HomePage() {
    return (
        <>
            <SlideBanner />
            <Trend />
            <Feature />
            <ProductCarousel title="Just In: Women's Apparel" />
            <ProductCarousel title="Just In: Men's Apparel" />
            <MoreShoes />
        </>
    )
}
