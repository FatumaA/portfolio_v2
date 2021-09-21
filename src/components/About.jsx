import React from 'react'
import { AboutInfo, ButtonInfo } from './Data'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className="about-main-container"> 
      <div className="hero-section">
      <div className="hero-wrapper-text">
      <h5>{AboutInfo.tagLine}</h5>
      <h1>{AboutInfo.headLine}</h1>
      <p>{AboutInfo.subHeadLine}</p>

      <Link href='/#contact'>
      <a> 
      <button className='btn-primary'>
        {ButtonInfo.about}
      </button>
      </a>
      </Link>
      </div>

      <div className='hero-wrapper-image'>
      <Image src={AboutInfo.Img} alt='hero' layout="fill" />
      </div>
      </div>

     
    </div>
  )
}

export default About
