import React from 'react';

function Header({imgSrc,heading,headingColor}){
    return(
        <>
            <section>
                <img src={imgSrc} alt="Header Component"/>
                <div className="overlay">
                    <h1 style={{color:headingColor ? headingColor : "#000" }}>{heading}</h1>
                </div>
            </section>
        </>
    );
}

export default Header;