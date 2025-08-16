import React from "react";
import Hello from "../components/Hello.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className=" h-screen  overflow-y-scroll scroll-smooth snap-y snap-mandatory ">
  
  <section className="h-screen snap-start ">
    <Hello />
  </section>

  <section className="snap-start ">
  <Footer />
  </section>


</div>

  );
}

export default Home;
