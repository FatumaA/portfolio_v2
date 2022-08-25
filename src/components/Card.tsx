import React from 'react'
import Image from 'next/image'

interface proj {
  key?: number;
  projectImgUrl: string; 
  projImgSrc: string; 
  projImgAlt: string;
  projStack: string; 
  projDesc: string; 
  projTextLink: string; 
  projCodeUrl: string;
}

interface blog {
  key?: number;
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
}

type cardInfo = {
  key: number;
  projs?: proj;
  blogs?: blog;
}

function Card(props : cardInfo) {
  const isProj = props.projs !== undefined;
    return (  
      <div className='card'>
        <a href={isProj ? props.projs!.projectImgUrl : props.blogs!.slug } target='_blank' rel='noreferrer'>
        <Image src={isProj ? props.projs!.projImgSrc : props.blogs!.coverImage} alt='screenshot' width="200" height="80"/> 
          <h3 className="my-4 font-extrabold"> {isProj ? props.projs!.projStack : props.blogs?.title} </h3>
          <p  className="mt-2 mb-4"> {isProj ? props.projs!.projDesc : props.blogs?.brief} </p>
          <a href={isProj ? props.projs!.projCodeUrl : props.blogs?.slug} target={isProj ? '_blank': undefined} rel='noreferrer' className="text-yellow-400 hover:scale-50"> 
            {isProj ? props.projs!.projTextLink: "Read More"} 
          </a>
        </a>
      </div>
    )
}

export default Card
