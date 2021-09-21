import React from 'react'
import { BannerInfo } from './Data'
import Image from 'next/link'

const Banner = () => {
  return (
    <div>
      <div className="grid-banner">
      <div className="banner-wrapper-image">
      <Image src={BannerInfo.html} alt='hero' layout="fill"/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.css} alt='hero' layout="fill"/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.react} alt='hero' layout="fill"/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.javascript} alt='hero'/>
      </div>

      <div className="banner-wrapper-image">
      <Image src={BannerInfo.sass} alt='hero' layout="fill"/>
      </div>
      </div>
    </div>
  )
}

export default Banner
