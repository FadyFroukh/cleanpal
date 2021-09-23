import React, { useContext } from 'react';
import { langContext } from '../App';
import "../css/Container.css";

function Container(props){

    const isArabic = useContext(langContext);

    return(
        <>
            <div className="container cards-body">
                <h2 style={isArabic ? {textAlign:"right"} : {textAlign:"left"}}>{props.heading}</h2>
                <div className="row">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Container;