import React , {useContext, useEffect} from 'react';
import { langContext } from '../../../App';
import "../../../css/products.css";
import ProductsCard from '../../ProductsCard';
function Products(){

    const pageName = "منتجاتنا"
    const isArabic = useContext(langContext);

    useEffect(()=>{
        document.title = pageName;
    },[pageName]);

    const productOne = {
        heading:isArabic ? "مننجاتنا الرئيسية" : "Main Products",
        products:[isArabic ? "الطوب" : "Bricks" , isArabic ? "الحجر الرصافي" : "Asphalt Stones" , isArabic ? "الارضيات المطاطية" : "Rubber Floors"],
        images:["images/bricks","images/asphalt" , "images/rubber"],
        links:["/our-products/bricks","/our-products/asphalt","/our-products/rubber"]
    }

    return(
        <>
        <main className="products">
           <img src="images/rubber.jpg" alt="Header Component"/>
           <div className="products-overlay">
                   <h1>{isArabic ? "منتجاتنا" : "Our Products"}</h1>
           </div>
        </main>
        <ProductsCard {...productOne}/>
       </>

    );
};

export default Products;