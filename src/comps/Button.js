import React from 'react';
import "../css/button.css";

const STYLES = ["btn--primary","btn--outline"];
const SIZES = ["btn--medium","btn--large","btn--mobile","btn--wide"];
const COLOR = ["primary","blue","red","green"];

export const Button = ({children,type,onClick,buttonStyle,buttonSize,buttonColor})=>{

    const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkBtnColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button className={`btn ${checkBtnStyle} ${checkBtnSize} ${checkBtnColor}`} onClick={onClick} type={type}>{children}</button>
    );
};