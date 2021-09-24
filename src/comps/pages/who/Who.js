import React , {useContext, useEffect} from 'react';
import { langContext } from '../../../App';
import "../../../css/who.css";
import AboutUsCard from '../../AboutUsCard';
import Cards from '../../Cards';
import Header from '../../Header';
function Who(){
    const pageName = "من نحن"
    const isArabic = useContext(langContext);

    useEffect(()=>{
        document.title = pageName;
    },[pageName]);

    
    const cardsObjOne = {
        lightBg:true,
        lightText:false,
        lightTextDesc:false,
        topLine:isArabic ? "من نحن" : "Who are we",
        headLine:isArabic ? " نحن شركة كلين بالكو الفلسطينية الحديثة للصناعات الانشائية" : "We are the new Palestinian Company 'CleanPalCo' for construction industries ",
        description:isArabic ? " شركة كلين بالكو الفائزة بجائزة افضل شركة طلابية للعام 2021 هي شركة للصناعات الانشائية وهي شركة متخصصة في صناعة الحجر والارضيات المطاطية" : "CleanPalCo is the number one company for the best student company competition for the year 2021, it's a company for construction industries and it's company espciallized in making Bricks and Rubber Floors",
        buttonLabel:isArabic ? "اقرأ المزيد" : "Read More",
        imgStart:"",
        img:"images/1.jpg",
        alt:"Image",
        link:"/our-services"
    }

    const cardsObjTwo = {
        heading: isArabic ? "قيمنا" : "Our Values",
        imgStart:"",
        src:"images/values.jpg",
        points:[isArabic ? "حماية البيئة" : "Protecting the enviroment" , isArabic ? "التخلص من مخلفات المحاجر" : "Helping stone mines to get rid of thier waste and to reduce it's harm"
        ,isArabic ?"الفعالية" : "Efficiency onduty" , isArabic ? "تطور مستمر" : "Continuous improvment", isArabic ? "الابداع في العمل" : "Creativity at work and preserving high productivity"],
        id:"values"
    }
    const cardsObjThree = {
        heading: isArabic ? "رسالتنا" : "Our Message",
        imgStart:"start",
        src:"images/message.jpg",
        points:[isArabic ? "تسعى الشركة الى توصيل فكرة حماية البيئة لكل شخص" : "The company thrives to deliver the message of protecting the enviroment to every single one " ,
         isArabic ? "استعمال مواد مضرة بالبيئة لصناعة مواد جديدة" : "use waste and useless material to come up with new useful materials"
        ,isArabic ?"توفير فرص عمل للشباب" : "create employment opportunities for the youth"],
        id:"message"
    }
    const cardsObjFour = {
        heading: isArabic ? "هدفنا" : "Our Goal",
        imgStart:"start",
        src:"images/goal.jpg",
        points:[isArabic ? "التخلص من مشكلة الاطارات وربو الحجر من فلسطين" : "Completely getting rid of the tyres and stones waste issue in palestine",
        isArabic ? "حماية البيئة واستغلال اماكن رمي المخلفات" : "Protecting the enviroment and taking advantage of the places that became homes to those wastes",
        isArabic ? "توفير فرص عمل للعاطلين عن العمل" : "Employment opportunities to reduce unemployment",
        isArabic ? "المنافسة بالمتجر الاقليمي بمنتج فلسطيني" : "Competing in the regional market with a palestinian product",
        isArabic ? "تطوير قدرات الشباب في ادارة المؤسسات وتحسينها ليكون لهم فرص افضل في سوق العمل" : "Exploiting the youth's capability in managing organizations , and working on making it better , so the youth would have a better chance in the employment market "],
        id:"goal"
    }
    const cardsObjFive = {
        heading: isArabic ? "رؤيتنا" : "Our Vision",
        imgStart:"",
        src:"images/vision.jpg",
        points:[isArabic ? "الشركة تم تأسيسها لحل بعض المشاكل البيئية التي تعاني منها فلسطين وباقي العالم" : "The company was founded to solve some of the enviromental issues that the palestinian society is facing and to help the rest of the world",
        isArabic ? "تأمل الشركة الى ان يصبح المجتمع بدون اي مخلفات حجرية" : "The company aspires to reach a society without any kind of rubber and stone waste",
        isArabic ? "الشركة تعمل على اعادة تدوير هذه المخلفات وسوف تكون اختيارات نفس الموجود بالسوق وايضا صديق للبيئة" : "The company works on recycling those wastes to create a new product with a static percentage of it , which will be a replacement of what's avaliable and also enviroment-friendly "],
        id:"vision"
    }

    useEffect(()=>{
        window.scrollTo(0,0);
      },[]);

    return(
        <>
         <Header imgSrc="images/whoare.jpg" heading={isArabic ? "من نحن" : "Who are we"}/>
         <Cards {...cardsObjOne}/>
         <AboutUsCard {...cardsObjThree}/>
         <AboutUsCard {...cardsObjTwo}/>
         <AboutUsCard {...cardsObjFour}/>
         <AboutUsCard {...cardsObjFive}/>
        </>
    );
};

export default Who;