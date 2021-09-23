import React , {useContext, useEffect} from 'react';
import { langContext } from '../../../App';

function Services(){

    const pageName = "خدماتنا"
    const isArabic = useContext(langContext);

    useEffect(()=>{
        document.title = pageName;
    },[pageName]);

    return(
        <>
            <div>{isArabic ? "عربي" : "English"}</div>
        </>
    );
};

export default Services;