import React from "react";
import Bio from "../../components/Bio";
import Navbar from "../../components/Navbar";
import "./style.css";

const style = {
  spanStyle: {
    color: "#4537c2",
    fontSize: "20px"
  }
}

function Home() {
  return (
    <div className="background">

      <Navbar />
      <main id="indexmain">
        <Bio >

          <section id="intro">

            <img id="bio-image" src="/assets/MargaretSeiche.JPG" alt="Margaret Seiche" />
          </section>

          <section id="main-bio">
            <h2 id="index-bio-intro">Hi, I'm Margaret,<br /> a Full-Stack Developer.</h2>
            <p>Are you re-envisioning event management<br /> to fit today's realities? <br /><span style={style.spanStyle}><b> I am.</b></span></p>
          </section>
        </Bio>
      </main>
    </div>
  );
}

export default Home;
