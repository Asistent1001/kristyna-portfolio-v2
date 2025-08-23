import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n.js";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </BrowserRouter>
  );
}
