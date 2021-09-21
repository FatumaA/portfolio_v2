import React from 'react'
import { ProjectsInfo, ScreenshotsInfo } from './Data'
import Link from 'next/link'
import Image from 'next/image'

const OtherProjects = () => {
  return (
    <div className="other-projects-main-container">
      <h5>{ProjectsInfo.tagLineWP}</h5>
      <h1>{ProjectsInfo.headLineWP}</h1>
      
      <div className="hero-section">
        
        <div className="card">
          <Link href='https://thegrindcafe.co.ke/'>
            <a alt='screenshot' target='_blank' rel='noreferrer'>
            <Image src={ScreenshotsInfo.grind} alt='screenshot' layout="fill"/>
            </a>
          </Link>
       
        <p>{ProjectsInfo.DescGrind}</p>
        <Link href='https://thegrindcafe.co.ke'>
          <a target='_blank' rel='noreferrer'>
            {ProjectsInfo.linkTextWP}
          </a>
        </Link>
       
        </div>
        
        <div className="card">
          <Link href='https://motionauto.co.ke/'>
            <a alt='screenshot' target='_blank' rel='noreferrer'>
            <Image src={ScreenshotsInfo.motion} alt='screenshot' layout="fill"/>
            </a>
          </Link>
        
        <p>{ProjectsInfo.DescMotion}</p>
        <Link href='https://motionauto.co.ke'>
          <a target='_blank' rel='noreferrer'>
            {ProjectsInfo.linkTextWP}
          </a>
        </Link>  
        </div>
        
    </div>
      </div>
  )
}
export default OtherProjects