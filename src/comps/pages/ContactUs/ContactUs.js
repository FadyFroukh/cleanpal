import React , {useContext, useEffect} from 'react';
import { langContext } from '../../../App';
import ContactForm from '../../ContactForm';
import "../../../css/contactus.css";
import Header from '../../Header';
function ContactUs(){

    const pageName = "تواصل معنا"
    const isArabic = useContext(langContext);

    useEffect(()=>{
        document.title = pageName;
        window.scrollTo(0,0);
    },[]);

    return(
        <>
            <Header imgSrc="images/contactus.jpg" heading={isArabic ? "تواصل معنا" : "Contact Us"} headingColor="#fff"/>
            <ContactForm imgSrc="images/mail"/>
        </>
    );
};

export default ContactUs;