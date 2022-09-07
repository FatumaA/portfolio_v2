import React from 'react'
import Image from 'next/image'

export interface IProj {
  projectImgUrl: string; 
  projImgSrc: string; 
  projImgAlt: string;
  projStack: string; 
  projDesc: string; 
  projTextLink: string; 
  projCodeUrl: string;
}

export interface IBlog {
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
}

type CardInfo = (IProj | IBlog) 

function Card({ cardInfo } : { cardInfo: CardInfo }) {
  const isProj = "projDesc" in cardInfo
  console.log(isProj)
    return ( 
      <>
      {isProj ?   
        <div className='card'>
          <a href={cardInfo.projectImgUrl} target='_blank' rel='noreferrer'>
          <Image src={cardInfo.projImgSrc} alt='screenshot' width="200" height="80"/> 
            <h3 className="my-4 text-gray-200 font-extrabold"> {cardInfo.projStack} </h3>
            <p  className="mt-2 mb-4"> {cardInfo.projDesc} </p>
            <a href={cardInfo.projCodeUrl} target='_blank' rel='noreferrer' 
              className="text-yellow-400 font-semibold hover:scale-50"> 
                {cardInfo.projTextLink} 
            </a>
          </a>
        </div>
        :
        <div className='card'>
        <a href={'https://blog.hijabicoder.dev/'+cardInfo!.slug} rel='noreferrer'>
        <Image src={cardInfo!.coverImage} alt='screenshot' width="200" height="80"/> 
          <h3 className="my-4 text-gray-200 font-extrabold"> {cardInfo!.title} </h3>
          <p  className="mt-2 mb-4"> {cardInfo!.brief} </p>
          <a href={'https://blog.hijabicoder.dev/'+cardInfo!.slug} rel='noreferrer' 
            className="text-yellow-400 font-semibold hover:scale-50"> 
              Read More
          </a>
        </a>
      </div> 
    } 
    </> 
    )
}

export default Card
