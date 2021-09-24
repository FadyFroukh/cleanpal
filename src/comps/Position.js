import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { langContext } from '../App';
import {FaChevronRight , FaChevronLeft} from 'react-icons/fa';
function Position({pageUrl,pageName}){

    const isArabic = useContext(langContext);

    return(
        <>
            <div className="position" style={isArabic ? {textAlign:"right"} :{textAlign:"left"} }>
                <Link to="/">{isArabic ? "الصفحة الرئيسية" : "Home Page"} {isArabic ? <FaChevronLeft/> : <FaChevronRight/>}</Link>
                <Link to="/our-products">{isArabic ? "منتجاتنا" : "Our-Products"} {isArabic ? <FaChevronLeft/> : <FaChevronRight/>}</Link>
                <Link to={pageUrl}>{pageName}</Link>
            </div>
        </>
    )
}

export default Position;