import React from 'react'
import { BannerInfo } from './Data'
import Image from 'next/image'

const Banner = () => {
  return (
    <div>
      <div className="grid-banner">

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.html} alt='hero' width={120} height={200}/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.css} alt='hero' width={120} height={200}/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.react} alt='hero' width={120} height={200}/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.javascript} alt='hero' width={120} height={200}/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.sass} alt='hero' width={120} height={200} />
      </div>
    </div>
      </div>
  )
}

export default Banner
