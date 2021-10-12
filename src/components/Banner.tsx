import React from 'react'
import Image from 'next/image'
import { BannerInfo } from '../Data'

const Banner = () => {
    return (
        <div className="text-white border-t-2 border-b-2 border-brand-accent py-10 flex flex-row justify-between">
            { BannerInfo.map((img, index) => (
                <Image key={index} alt={img} src={img} width={100} height={100} className="m"></Image>
            ))
            }
        </div>
    )
}

export default Banner
