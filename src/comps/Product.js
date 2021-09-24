import React, { useContext, useEffect } from 'react';
import { langContext } from '../App';
import Header from './Header';
import Position from './Position';
function Product({match}){

    const isArabic = useContext(langContext);
    const id = match.params.id;
    var thisPage = match.url.split("/our-products/");
    const capitalStr = thisPage[1].charAt(0).toUpperCase() + thisPage[1].slice(1);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    if (id === "rubber"){
        return(
            <>
            <Header imgSrc="../images/rubber.jpg" heading={isArabic ? "الارضيات المطاطية" : "Rubber Floors"}/>
            <div className="container product-container">
                <Position pageUrl={match.url} pageName={isArabic ? "الارضيات المطاطية" : capitalStr}/>
                    <div className="row">

                    </div>   
                </div>      
            </>
        );
    } else if (id === "bricks"){
        return(
            <>
            <Header imgSrc="../images/bricks.jpg" heading={isArabic ? "الطوب" : "Bricks"}/>
            <div className="container product-container" style={isArabic ? {textAlign:"right"} : {textAlign:"left"}}>
                <Position pageUrl={match.url} pageName={isArabic ? "الطوب" : capitalStr}/>
                    <div className="row">
                        <h1>{isArabic ? "الطوب" : "Bricks"}</h1>
                       <div className="col-lg-12 rubber">
                           <h3>{isArabic ? "نظرة عامة" : "Overview"}</h3>
                           <p>Some Text</p>
                           <h3>{isArabic ? "خصائص المنتج" : "Properties of the product"}</h3>
                           <ul>
                               <li>List of Props</li>
                           </ul>
                           <h3>{isArabic ? "قياسات المنتج" : "Product Measurments"}</h3>

                       </div>
                    </div>   
                </div>     
            </>
        );
    }else {
        return(
            <>
            <Header imgSrc="../images/bricks.jpg" heading={isArabic ? "الحجر الرصافي" : "Asphalt Stones"}/>
            <div className="container product-container" style={isArabic ? {textAlign:"right"} : {textAlign:"left"}}>
                <Position pageUrl={match.url} pageName={isArabic ? "الحجر الرصافي" : capitalStr}/>
                    <div className="row">
                        <h1>{isArabic ? "الحجر الرصافي" : "Asphalt Stones"}</h1>
                       <div className="col-lg-12 rubber">
                           <h3>{isArabic ? "نظرة عامة" : "Overview"}</h3>
                           <p>Some Text</p>
                           <h3>{isArabic ? "خصائص المنتج" : "Properties of the product"}</h3>
                           <ul>
                               <li>List of Props</li>
                           </ul>
                           <h3>{isArabic ? "قياسات المنتج" : "Product Measurments"}</h3>
                            <p>{isArabic ? "يأتي الحجر الرصافي بقياس واحد فقط" : "The asphalt stones comes with one measurment only"}</p>
                            <div className="img-div">
                                <div className="img-container">
                                    <img src="../images/asphalt.jpg"/>
                                    <p>2.5KG</p>
                                </div>
                            </div>
                       </div>
                    </div>   
            </div>      
            </>
        );
    }
}

export default Product;
