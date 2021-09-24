import React , {useContext, useEffect} from 'react';
import { langContext } from '../../../App';
import "../../../css/products.css";
import Header from '../../Header';
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
        <Header imgSrc="images/rubber.jpg" heading={isArabic ? "منتجاتنا" : "Our Products"}/>
        <ProductsCard {...productOne}/>
       </>

    );
};

export default Products;