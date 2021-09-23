import React, { useContext } from 'react';
import { langContext } from '../App';
import {Link} from 'react-router-dom';
function ProductsCard({heading,products,images,links}){

    const isArabic = useContext(langContext);

    return(
        <>
            <div className="container products-container" style={isArabic ? {textAlign:"right"} : {textAlign:"left"}}>
            <h1>{heading}</h1>
                <div className="row">
                    {
                        products.map((product,index)=><div key={index} className="col-lg-4 products-card">
                            <Link to={links[index]}>
                                <img src={`${images[index]}.jpg`} alt="Header Component"/>
                                <h3 className="text-center">{product}</h3>
                            </Link>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
}

export default ProductsCard;