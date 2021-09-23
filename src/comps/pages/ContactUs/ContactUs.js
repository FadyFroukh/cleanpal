import React , {useContext, useEffect} from 'react';
import { langContext } from '../../../App';
import ContactForm from '../../ContactForm';
import "../../../css/contactus.css";
function ContactUs(){

    const pageName = "تواصل معنا"
    const isArabic = useContext(langContext);

    useEffect(()=>{
        document.title = pageName;
    },[pageName]);

    return(
        <>
            <main className="aboutus">
                <img src="images/contactus.jpg" alt="Maybe Contact Us?" className=""/>
                <div className="overlay">
                    <h1>{isArabic ? "تواصل معنا" : "Contact Us"}</h1>
                </div>
            </main>
            <ContactForm imgSrc="images/mail"/>
        </>
    );
};

export default ContactUs;