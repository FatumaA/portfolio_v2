import React from 'react'
import Card from './Card'
import { ProfessionalProjectsInfo, PersonalProjectsInfo, headAndTagLine } from '../Data'

const CardSection = () => {
    return (
        <div id='projects' className="top-styles my-14">
            <h5 className="tagline"> {headAndTagLine.tagLine} </h5>
            <h1 className="headline" >{headAndTagLine.headLine}</h1>
            <div className="card-section">
                {
                    ProfessionalProjectsInfo.map((profProj, index) => (
                        <Card key={index} Proj={profProj}/>
                    ))
                }
            </div>

            <h5 className="tagline mt-10"> {headAndTagLine.tagLinePP} </h5>
            <h1 className="headline" >{headAndTagLine.headLinePP}</h1>
            <div className="card-section">
                {
                    PersonalProjectsInfo.map((personalProj, index) => (
                        <Card key={index} Proj={personalProj}/>
                    ))
                }
            </div>

        </div>
    )
}

export default CardSection
