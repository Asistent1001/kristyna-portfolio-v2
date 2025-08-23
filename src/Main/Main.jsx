import { Route, Routes } from "react-router-dom";

import About from "./About.jsx";
import Contact from "./Contact.jsx";
import EventPage from "./Events/EventPage.jsx";
import Events from "./Events/Events.jsx";
import ForSale from "./ForSale.jsx";
import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

export default function Main() {
  return (
    <main className="pt-[4.75rem] sm:pt-[5rem] md:pt-[7.813rem] lg:pt-[8.813rem] flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/distribution" element={<ForSale />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventPage />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </main>
  );
}
