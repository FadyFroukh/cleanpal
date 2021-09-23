import React , {useContext, useReducer, useState} from 'react';
import { langContext } from '../App';
import "../css/contactform.css";
import { Button } from './Button';

const initialState = {
    name:"",
    number:"",
    email:"",
    needed:"",
    msg:"",
    submitted:false
}

const reducer = (state,action) =>{
    switch(action.target.name){
        case "name":
            return {...state,name:action.target.value};
        break;
        case "number":
            return {...state,number:action.target.value};
        break;
        case "email":
            return {...state,email:action.target.value};
        break;
        case "needed":
            return {...state,needed:action.target.value};
        break;
        case "msg":
            return {...state,msg:action.target.value};
        break;
        case "form":
            action.preventDefault();
            return {...state,submitted:!state.submitted};
        break;
        default:
            alert("Not a param");
    }
}


function ContactForm({imgSrc}){

    const isArabic = useContext(langContext);
    const [data,dispatch] = useReducer(reducer,initialState);
    const [count,setCount] = useState(150);

    const changeCount = (e)=>{
        setCount(150 - e.target.value.length);
    }

    const handleForm = (e)=>{
        
    }

    const setAlign = isArabic ? {textAlign:"right"} : {textAlign:"left"};

    return(
        <>
            <div className="container form-body">
                <div className="row">
                    <div className="col-lg-6 form-div part">
                        <form onSubmit={handleForm}>
                            <h1>{isArabic ? "تواصل معنا" : "Contact Us"}</h1>
                            <div className="form-section">
                                <label htmlFor="name">{isArabic ? "الاسم الكامل" :"The Full Name"}</label>
                                <input type="text" name="name" value={data.name} onChange={(e)=>dispatch(e)} max="15" min="2" style={setAlign}/>
                            </div>
                            <div className="form-section">
                                <label htmlFor="number">{isArabic ? "رقم الجوال" :"Phone Number"}</label>
                                <input type="number" name="number" value={data.number} onChange={(e)=>dispatch(e)} maxLength="15" minLength="2" style={setAlign}/>
                            </div>
                            <div className="form-section">
                                <label htmlFor="email">{isArabic ? "البريد الألكتروني" :"E-Mail"}</label>
                                <input type="email" name="email" value={data.email} onChange={(e)=>dispatch(e)} maxLength="35" minLength="2" style={setAlign}/>
                            </div>
                            <div className="form-section">
                                <label htmlFor="needed">{isArabic ? "ما الموضوع" : "What is the subject"}</label>
                                <input type="text" name="needed" value={data.needed} onChange={(e)=>dispatch(e)} maxLength="15" minLength="2" style={setAlign}/>
                            </div>
                            <div className="form-section">
                                <label htmlFor="msg">{isArabic ? "اضف رسالة" : "Add a message"}</label>
                                <textarea name="msg" value={data.msg} onChange={(e)=>{dispatch(e)}} onKeyUp={changeCount} maxLength="150" minLength="2" style={setAlign}>

                                </textarea>
                                <div className="count">
                                    {
                                        isArabic ? "احرف متبقية " : "Letters Left "
                                    }
                                    : <strong>{count}</strong>
                                </div>
                            </div>
                            <Button buttonColor="blue" buttonSize="btn--wide">{isArabic ? "ارسل": "Submit"}</Button>
                        </form>
                    </div>
                    <div className="col-lg-6 form-div">
                        <div className="img-div">
                            <img src={`${imgSrc}.jpg`} alt="Contact Component"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ContactForm;