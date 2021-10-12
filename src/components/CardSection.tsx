import React from 'react'
import Card from './Card'
import { CodeProjectsInfo, LowCodeProjectsInfo, headAndTagLine } from '../Data'

const CardSection = () => {
    return (
        <div id='projects' className="top-styles my-14">
            <h5 className="tagline"> {headAndTagLine.tagLine} </h5>
            <h1 className="headline" >{headAndTagLine.headLine}</h1>
            <div className="card-section">
                {
                    CodeProjectsInfo.map((codeProj, index) => (
                        <Card key={index} Proj={codeProj}/>
                    ))
                }
            </div>

            <h5 className="tagline mt-10"> {headAndTagLine.tagLineWP} </h5>
            <h1 className="headline" >{headAndTagLine.headLineWP}</h1>
            <div className="card-section grid-cols-2">
                {
                    LowCodeProjectsInfo.map((lowCodeProj, index) => (
                        <Card key={index} Proj={lowCodeProj}/>
                    ))
                }
            </div>

        </div>
    )
}

export default CardSection
