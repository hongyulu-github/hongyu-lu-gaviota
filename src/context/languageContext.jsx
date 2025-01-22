import React, { createContext, useState, useContext } from "react";
import { DICTIONARY } from "../utils/dictionary";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const t = (key) => {
    if (!(key in DICTIONARY)) {
      return key;
    }

    const translation = DICTIONARY[key][language];
    if (!translation) {
      return key;
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
