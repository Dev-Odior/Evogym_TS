import { useState, useEffect } from "react";
import NavBar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import { SelectedPage } from "@/shared/types";
import OurClasses from "./scenes/outClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
