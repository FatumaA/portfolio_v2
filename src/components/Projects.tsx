import React from 'react'
import {ProjectsInfo, ScreenshotsInfo} from './Data'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id='projects' className="projects-main-container">
      <h5>{ProjectsInfo.tagLine}</h5>
      <h1>{ProjectsInfo.headLine}</h1>
      
      <div className="hero-section">
        
        <div className="card">
          <Link href='https://peaceful-raman-a2c62f.netlify.app/'>
            <a target='_blank' rel='noreferrer'>
            <Image src={ScreenshotsInfo.medic} alt='screenshot' layout="fill"/>
            </a>
          </Link>
          
          <p>{ProjectsInfo.DescProjectAPI}</p>
          <a href='https://github.com/FatumaA/symptom-checker' target='_blank' rel='noreferrer'> 
           {ProjectsInfo.linkText}
          </a>
        </div>
        
        <div className="card">
          <Link href='https://www.shedevelops.dev/'>
            <a target='_blank' rel='noreferrer'>
            <Image src={ScreenshotsInfo.folio} alt='screenshot' layout="fill"/>
            </a>
          </Link>
        
          <p>{ProjectsInfo.DescPortfolio}</p>
          <Link href='https://github.com/FatumaA/myportfoliosite'>
            <a target='_blank' rel='noreferrer'>
            {ProjectsInfo.linkText}
            </a>
          </Link>
          
        </div>
        
      </div>

    </div>
  )
}

export default Projects
