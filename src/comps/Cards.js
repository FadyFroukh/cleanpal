import React, { useContext } from 'react';
import { langContext } from '../App';
import "../css/cards.css";
import {Link} from 'react-router-dom';
import {Button} from '../comps/Button';
function Cards({lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img,alt,imgStart,link}){

    const isArabic = useContext(langContext);

    return(
        <>
             <div className={lightBg ? "home__hero-section" : "home__hero-section darkbg"}>
                <div className="container" style={isArabic ? {textAlign:"right"} : {textAlign:"left"}}>
                    <div className="row home__hero-row" style={{display:"flex",flexDirection: imgStart === "start" ? "row-reverse" : "row"}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? "heading" : "heading dark"}>{headLine}</h1>
                                <p className={lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>{description}</p>
                                <Link to={link}>
                                    <Button buttonSize="btn--wide" buttonColor="blue">{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;