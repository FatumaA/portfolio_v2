import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { AboutInfo, ButtonInfo } from '../Data'

const About = () => {
    return (
        <div id="about" className='top-styles'>
            <h5 className="tagline">{AboutInfo.tagLine}</h5>
            <h1 className="headline">{AboutInfo.headLine}</h1>
            <p className="text-center leading-7">{AboutInfo.subHeadLine}</p>
        
            <Link href='/#about'>
                <a> 
                <Button btnText={ButtonInfo.about}/>
                </a> 
            </Link>

        </div>
    )
}

export default About
