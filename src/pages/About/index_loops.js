import React, { Component } from "react";
import Navbar from "../../components/Navbar";
// import AboutEducationCard from "../../components/AboutEducationCard";
import AboutWorkCard from "../../components/AboutWorkCard";

// import schools from "../../abouted.json";
import works from "../../aboutwork.json";
import "./style.css";

// function About() {
class About extends Component {
  state = {
    schools: "",
    works: ""
  };

  render() {
    return (
      <div>
        <Navbar />

        <main className="mainTop">
          <div className="container-fluid">

            <article className="Personal">
              <div className="row articleHeading">
                <div className="col-md-12"><h3>Personal</h3></div>
              </div>

              <div className="row" id="feature">
                <div className="col-md-4">
                  <img id="about-image" src="/assets/MargaretSeiche.JPG" className="float-left"
                    alt="Margaret has brown hair and eyeglasses." title="headshot of Margaret Seiche" />
                  <p>Experience leading remote teams for large-scale projects with overlapping deadlines</p>
                </div>

                <div className="col-md-4">
                  <h4>New York City</h4>
                  <ul>
                    <li id="list">3 years in sales</li>
                    <li id="list">Currently studying coding remotely</li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h4>10 years in China</h4>
                  <ul>
                    <li id="list">2 years in conference management</li>
                    <li id="list">10 years in non-profit marketing and finance</li>
                  </ul>
                </div>

              </div>
            </article>

            <article className="Education">
              <div className="row articleHeading">
                <div className="col-md-12"><h3>Education</h3></div>
              </div>
              <div className="row" id="feature">

                {/* {this.state.schools.map(school => (
                <AboutEducationCard
                  id={school.id}
                  key={school.id}
                  title={school.title}
                  name={school.name}
                  image={school.image}
                  alt={school.alt}
                  line1={school.line1}
                  line2={school.line2}
                  line3={school.line3}
                />
              ))} */}
              </div>
            </article>

            <article className="experience">
              <div className="row articleHeading">
                <div className="col-md-12"><h3>Work Experience</h3></div>
              </div>
              <div className="row" id="feature">
                {this.state.works.map(work => (
                <AboutWorkCard
                  id={work.id}
                  key={work.id}
                  title={work.title}
                  alt={work.alt}
                  line1={work.line1}
                  line2={work.line2}
                  line3={work.line3}
                />
              ))}
              </div>
            </article>

          </div>
        </main>
      </div>
    );
  }
}

export default About;
