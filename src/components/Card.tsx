import React from 'react'
import Image from 'next/image'


type props = {
  key: number; 
  Proj: { projectImgUrl: string; 
          projImgSrc: string; 
          projImgAlt: string;
          projStack: string; 
          projDesc: string; 
          projTextLink: string; 
          projCodeUrl: string; }
  }

function Card(Proj: props ) {
    return (     
          <div className='card'>
            <a href={Proj.Proj.projectImgUrl} target='_blank' rel='noreferrer'>
            <Image src={Proj.Proj.projImgSrc} alt='screenshot' width="200" height="80"/> 
            </a>
            <h3 className="mt-4"> {Proj.Proj.projStack} </h3>
            <p  className="mt-2 mb-4"> {Proj.Proj.projDesc} </p>
            <a href={Proj.Proj.projCodeUrl} target='_blank' rel='noreferrer' className="text-yellow-400 hover:scale-50"> 
            {Proj.Proj.projTextLink} 
            </a>
          </div>
    )
}

export default Card
