import React from "react";
import Hello from "../components/Hello.jsx";
import Footer from "../components/Footer.jsx";


const Home = ({darkMode,t,i18n}) => {
  return (
    <div className=" h-screen  overflow-y-scroll scroll-smooth snap-y snap-mandatory ">
  
  <section className="h-screen snap-start ">
    <Hello darkMode={darkMode} t={t} i18n={i18n} />
  </section>

  <section className="snap-start ">
  <Footer darkMode={darkMode} />
  </section>


</div>

  );
}

export default Home;
