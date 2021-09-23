import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { langContext } from '../App';
import { Button } from './Button';
function Card(props){

    const isArabic = useContext(langContext);

    return(
        <div className={`card ${props.divClass}`}>
            <img src={props.imgSrc} alt="Card" className="img-fluid"/>
            <div className="card-overlay">
                <Link to={props.link}><Button buttonColor={props.buttonColor} buttonSize={props.buttonSize} buttonStyle={props.buttonStyle}>{isArabic ? "المزيد" : "More"}</Button></Link>
            </div>
            <h3 className="text-center">{props.productName}</h3>
        </div>
    );
}

export default Card;