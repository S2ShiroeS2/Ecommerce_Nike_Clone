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
import resTrend from "data/TrendData.json"

export default function HomePage() {
    const [dataProducts, setDataProducts] = useState()
    const [dataTrend, setDataTrend] = useState()

    useEffect(() => {
        setDataProducts(response.listProduct)
        setDataTrend(resTrend?.home)
    }, [dataProducts, dataTrend])

    return (
        <>
            <SlideBanner />
            <Trend data={dataTrend} />
            <Feature />
            <ProductCarousel title="Sunny Day Must-Haves" data={dataProducts} />
            <MoreShoes />
            <MerchMenu />
        </>
    )
}
