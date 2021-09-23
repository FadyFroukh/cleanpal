import React, { useContext } from 'react';
import { langContext } from '../App';
function Product({match}){

    const isArabic = useContext(langContext);
    const id = match.params.id;

    if (id === "rubber"){
        return(
            <>
            <section>
                <img src="../images/rubber.jpg" alt="Header Component"/>
                <div className="overlay">
                    <h1>{isArabic ? "الارضيات المطاطية" : "Rubber Floors"}</h1>
                </div>
            </section>
            <div className="container product-container">
                    <div className="row">

                    </div>   
                </div>      
            </>
        );
    } else if (id === "bricks"){
        return(
            <>
            <section>
                <img src="../images/bricks.jpg" alt="Header Component"/>
                <div className="overlay">
                    <h1>{isArabic ? "الطوب" : "Bricks"}</h1>
                </div>
            </section>
            <div className="container product-container">
                    <div className="row">
                       <h1 className="text-center">{isArabic ? "Bricks" : "الطوب"}</h1>
                    </div>   
                </div>      
            </>
        );
    }else {
        return(
            <>
            <section>
                <img src="../images/asphalt.jpg" alt="Header Component"/>
                <div className="overlay">
                    <h1>{isArabic ? "الحجر الرصافي" : "Asphalt Stones"}</h1>
                </div>
            </section>
            <div className="container product-container" style={isArabic ? {textAlign:"right"} : {textAlign:"left"}}>
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

                       </div>
                    </div>   
                </div>      
            </>
        );
    }
}

export default Product;
