import React , {useContext, useEffect} from 'react';
import { langContext } from '../../../App';
import Header from '../../Header';

function Services(){

    const pageName = "خدماتنا"
    const isArabic = useContext(langContext);

    useEffect(()=>{
        document.title = pageName;
    },[pageName]);

    return(
        <>
            <Header imgSrc="images/services.jpg" heading={isArabic ? "خدماتنا" : "Our Services"}/>
        </>
    );
};

export default Services;