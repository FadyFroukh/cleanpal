import React, { useContext, useState }  from 'react';
import {Link} from 'react-router-dom';
import { langContext } from '../App';
import {FaTimes,FaBars} from 'react-icons/fa';
import "../css/navbar.css";
function Navbar(){

    const isArabic = useContext(langContext);
    const enLinks = ["Contact-Us","Our-Services","Our-Products","Who-are-we"];
    const arLinks = ["تواصل معنا","خدماتنا","منتجاتنا","من نحن"];

    const [click,setClick] = useState(false);

    const handleMenuIcon = () =>{
        setClick(!click);
    }

    const closeMenu = ()=>{
        setClick(!click);
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="logo"><Link to="/">{isArabic ? "كلين بالكو" : "CleanPalCo"}</Link></div>
                    <div className="nav-links">
                        <ul className="nav-list">
                            {
                                isArabic ? arLinks.map((link,index)=><li key={index} className="list-item"><Link to={`/${enLinks[index].toLowerCase()}`}>{link}</Link></li>) 
                                :enLinks.map((link,index)=><li key={index} className="list-item"><Link to={`/${enLinks[index].toLowerCase()}`}>{link}</Link></li>)
                            }
                        </ul>
                    </div>
                    <span className="menuIcon" onClick={handleMenuIcon}>
                        {
                            click ? <FaTimes/> : <FaBars/>
                        }
                    </span>
                </div>
            </nav>
            <div className="hidden-menu">
                {
                    click ?  <ul className="hidden-list" style={{display:'block',padding:"12px"}}>
                    {
                        isArabic ? arLinks.map((link,index)=><li key={index} className="list-item" onClick={closeMenu}><Link to={`/${enLinks[index].toLowerCase()}`}>{link}</Link></li>) 
                        :enLinks.map((link,index)=><li key={index} className="list-item"><Link to={`/${enLinks[index].toLowerCase()}`}>{link}</Link></li>)
                    }
                    </ul> : null
                }
            </div>
        </>
    );
}

export default Navbar;