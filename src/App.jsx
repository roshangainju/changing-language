import React, { useEffect } from 'react'
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import i18n from "i18next";
import Language from './components/Language';
import "./style.css"

const App = () => {
  const { t } = useTranslation()

  const {line1,line2}= t("description");
  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  
 
  return (
    <div>App
      <Language />
       <h2>{t('greeting')}</h2>;
       <Trans  i18nKey={line1} values={{course:"python"}}
       components={{1:<b/>}}/>
       {/* <p>{line1}</p> */}
       <p>{line2}</p>
    </div>
  )
}

export default App