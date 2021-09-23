import React , {useContext, useEffect,useRef,useState} from 'react';
import { langContext } from '../../../App';
import "../../../css/home.css";
import {FaChevronCircleLeft , FaChevronCircleRight} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import Container from '../../Container';
import Card from '../../Card';
import Cards from '../../Cards';
import ContactForm from '../../ContactForm';

function Home(){
    const pageName = "الصفحة الرئيسية";
    const isArabic = useContext(langContext);
    const [imgNum,setImgNum] = useState(1);
    const enOverlayTexts = ["The Company won Best Student Company 2021","Some of Our Products"];
    const arOverlayTexts  = ["فوز الشركة بافضل شركة طلابية 2021" , "بعض من منتجاتنا"];

    const [arOverlay,setArOverlay] = useState(arOverlayTexts[0]);
    const [enOverlay,setEnOverlay] = useState(enOverlayTexts[0]);

    const imgRef = useRef(null)
    
    useEffect(()=>{
        document.title = pageName;
    },[imgNum]);

    const moveRight = ()=>{
        imgRef.current.style.opacity = 0;
        setTimeout(()=>{
            if(imgNum === 1){
                setImgNum(enOverlayTexts.length);
            }else {
                setImgNum(imgNum-1);
            }
            imgRef.current.style.opacity = 1
        },400)
    }
    
    const moveLeft = ()=>{
        imgRef.current.style.opacity = 0;
        setTimeout(()=>{
            if(imgNum === enOverlayTexts.length){
                setImgNum(1);
            }else {
                setImgNum(imgNum + 1);
            }
            imgRef.current.style.opacity = 1
        },400)
    }

    useEffect(()=>{
        setArOverlay(arOverlayTexts[imgNum - 1]);
        setEnOverlay(enOverlayTexts[imgNum - 1]);
    },[imgNum,arOverlay,arOverlayTexts,enOverlayTexts]);

    const cardsObjOne = {
        lightBg:false,
        lightText:true,
        lightTextDesc:true,
        topLine:isArabic ? "من نحن" : "Who are we",
        headLine:isArabic ? "نحن شركة كلين بالكو الفلسطينية الحديثة" : "We are the new Palestinian Company 'CleanPalCo' ",
        description:isArabic ? "شركة كلين بالكو الفائزة بجائزة افضل شركة طلابية للعام 2021 هي شركة للصناعات الانشائية" : "CleanPalCo is the number one company for the best student company competition for the year 2021, it's a company for construction industries",
        buttonLabel:isArabic ? "اقرأ المزيد" : "Read More",
        imgStart:"",
        img:"images/1.jpg",
        alt:"Image",
        link:"/who-are-we"
    }

    return(
        <>
            <IconContext.Provider value={{color:"#fff",size:40}}>
            <main className="home">
                <div className="slider-container">
                    <img src={`images/${imgNum}.jpg`} alt="Slider-Comp" ref={imgRef} className="img-fluid"/>
                    <div className="slider-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 overlay-body">
                                    <FaChevronCircleLeft onClick={moveLeft}/>
                                    <div className="overlay-text">
                                        {
                                            isArabic ? arOverlay : enOverlay
                                        }
                                    </div>
                                    <FaChevronCircleRight onClick={moveRight}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </IconContext.Provider>
            <Container heading={isArabic ? "منتجاتنا" : "Our Products"}>
                <Card divClass="col-lg-4" imgSrc="images/rubber.jpg" productName={isArabic ? "ارضيات مطاطية" : "Rubber Floors"} buttonStyle="btn-primary"
                    buttonSize="btn--large" buttonColor="primary" link="/our-products/rubber"
                />
                <Card divClass="col-lg-4" imgSrc="images/bricks.jpg" productName={isArabic ? "طوب" : "Bricks"} buttonStyle="btn-primary"
                    buttonSize="btn--large" buttonColor="primary" link="/our-products/bricks"
                />
                <Card divClass="col-lg-4" imgSrc="images/asphalt.jpg" productName={isArabic ? "حجر رصافي" : "Asphalt Stone"} buttonStyle="btn-primary"
                    buttonSize="btn--large" buttonColor="primary" link="/our-products/asphalt"
                />
            </Container>
            <Cards {...cardsObjOne}/>
            <ContactForm imgSrc="images/mail2"/>
        </>
    );
    
};



export default Home;