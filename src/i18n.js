import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import csAbout from "./i18n/cs/about.json";
import csContact from "./i18n/cs/contact.json";
import csEvents from "./i18n/cs/events.json";
import csFooter from "./i18n/cs/footer.json";
import csForSale from "./i18n/cs/forSale.json";
import csHeader from "./i18n/cs/header.json";
import csHome from "./i18n/cs/home.json";
import csPortfolio from "./i18n/cs/portfolio.json";
import csPrivacyPolicy from "./i18n/cs/privacyPolicy.json";
import csUtils from "./i18n/cs/utils.json";
import csSpreadsheets from "./i18n/cs/spreadsheets.json";

import enAbout from "./i18n/en/about.json";
import enContact from "./i18n/en/contact.json";
import enEvents from "./i18n/en/events.json";
import enFooter from "./i18n/en/footer.json";
import enForSale from "./i18n/en/forSale.json";
import enHeader from "./i18n/en/header.json";
import enHome from "./i18n/en/home.json";
import enPortfolio from "./i18n/en/portfolio.json";
import enPrivacyPolicy from "./i18n/en/privacyPolicy.json";
import enUtils from "./i18n/en/utils.json";
import enSpreadsheets from "./i18n/en/spreadsheets.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: enHeader,
        home: enHome,
        about: enAbout,
        contact: enContact,
        events: enEvents,
        footer: enFooter,
        utils: enUtils,
        privacyPolicy: enPrivacyPolicy,
        portfolio: enPortfolio,
        forSale: enForSale,
        spreadsheets: enSpreadsheets,
      },
      cs: {
        header: csHeader,
        home: csHome,
        about: csAbout,
        contact: csContact,
        events: csEvents,
        footer: csFooter,
        utils: csUtils,
        privacyPolicy: csPrivacyPolicy,
        portfolio: csPortfolio,
        forSale: csForSale,
        spreadsheets: csSpreadsheets,
      },
    },
    ns: [
      "header",
      "home",
      "about",
      "contact",
      "events",
      "footer",
      "utils",
      "privacyPolicy",
      "portfolio",
      "forSale",
      "spreadsheets",
    ],
    fallbackLng: "en",
    supportedLngs: ["en", "cs"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
