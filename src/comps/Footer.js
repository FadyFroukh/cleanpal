import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../App';
import "../css/footer.css";
import {FaEnvelope, FaFacebook, FaHeart, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
function Footer(){

    const isArabic = useContext(langContext);
    
    return(
        <>
        <IconContext.Provider value={{size:35}}>
        <footer>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-4 part">
                        <h1>{isArabic ? "كلين بالكو" : "CleanPalCo"}</h1>
                        <img alt="Logo" src="images/logo.png" height="160" width="160"/>
                        <p>{isArabic ? " كل الحقوق محفوظة للعام 2021" : "All rights reserved for the year 2021"}</p>
                    </div>
                    <div className="col-lg-2 part">
                        <h2>{isArabic ? "من نحن" : "Who are we"}</h2>
                        <ul>
                            <li><Link to="/who-are-we#message">{isArabic ? "رسالتنا" : "Our Message"}</Link></li>
                            <li><Link to="/who-are-we#vision">{isArabic ? "رؤيتنا" : "Our Vision"}</Link></li>
                            <li><Link to="/who-are-we#goal">{isArabic ? "اهدافنا" : "Our Goals"}</Link></li>
                            <li><Link to="/who-are-we#values">{isArabic ? "قيمنا" : "Our Values"}</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 part">
                        <h2>{isArabic ? "منتجاتنا" : "Our Products"}</h2>
                        <ul>
                            <li><Link to="/our-products/rubber">{isArabic ? "الارضيات المطاطية" : "Rubber Floors"}</Link></li>
                            <li><Link to="/our-products/bricks">{isArabic ? "الطوب" : "Bricks"}</Link></li>
                            <li><Link to="/our-products/asphalt">{isArabic ? "الحجر الرصافي" : "Asphalt Stone"}</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 part">
                        <h2>{isArabic ? "خدماتنا" : "Our Services"}</h2>

                    </div>
                    <div className="col-lg-2 part">
                        <h2>{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
                        <ul>
                            <li><Link to="/contact-us">{isArabic ? "صفحة تواصل معنا" : "Contact Us Page"}</Link></li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/Cleanpalcocompany/" rel="noreferrer" ><FaFacebook/></a>
                                <a target="_blank" href="https://www.instagram.com/cleanpalco/" rel="noreferrer" ><FaInstagram/></a>
                                <a target="_blank" href="https://www.linkedin.com/in/fadi-froukh-987b8921a/" rel="noreferrer" ><FaLinkedin/></a>
                                <a href="mailto:cleanpalco2021@gmail.com"><FaEnvelope/></a>
                            </li>
                            <li className="num">+972-595-027348</li>
                            <li className="location">{isArabic ? "فلسطين - بيت لحم - المنطقة الصناعية" : "Palestine - Bethlahem - Industrial Area"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </IconContext.Provider>
        <div className="text-center developer">
            <IconContext.Provider value={{size:24,color:"red"}}>
                <p>Made With <FaHeart/> By : <strong>Fady Froukh</strong></p>
            </IconContext.Provider>
            <IconContext.Provider value={{size:35,color:"#fff",style:{marginLeft:"10px"}}}>
                <div className="developer-links">
                    <a href="https://www.facebook.com/fadyfroukh"><FaFacebook/></a>
                    <a href="https://www.linkedin.com/in/fadi-froukh-987b8921a/"><FaLinkedin/></a>
                    <a href="mailto:fadyfroukh@gmail.com"><FaEnvelope/></a>
                </div>
            </IconContext.Provider>
        </div>

        </>
    )
}

export default Footer;