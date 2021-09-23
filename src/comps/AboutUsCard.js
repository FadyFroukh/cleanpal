import React, { useContext } from 'react';
import { langContext } from '../App';

function AboutUsCard({imgStart,heading,src,points,id}){

    const isArabic = useContext(langContext);

    return(
        <>
            <div className="container aboutus-card" style={{textAlign:isArabic ? "right" : "left"}} id={id}>
                <div className="row" style={{flexDirection : imgStart === "start" ? "row-reverse" : "row"}}>
                    <div className="col-lg-6 text-div">
                        <h1 className="card-heading">{heading}</h1>
                        <ul className="points-list">
                            {
                                points.map((point,index)=><li key={index}>{point}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col-lg-6 img-div">
                        <img src={src} alt="AboutUs Card Component"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUsCard;