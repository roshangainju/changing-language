// import { changeLanguage } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

const Language = () => {
    const {i18n} = useTranslation();
    const languages = [
        {code:"en", language:"English"},
        {code:"fr", language:"French"},
        {code:"hi", language:"Hindi"},
        {code:"sp", language:"spanish"},
        {code:"ar", language:"arabic"}
    ];
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
  return (
    <div>
        {languages.map((lng)=>{
            return  <button key={lng.code} className={lng.code === i18n.language?"selected":""} onClick={()=>changeLanguage(lng.code)}>{lng.language}</button>
           

        })}
    </div>
  )
}

export default Language