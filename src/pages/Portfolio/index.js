import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import PortfolioCard from "../../components/PortfolioCard";
import projects from "../../projects.json";
import "./style.css";

// const style = {
//   image: {
//     marginRight: "10px"
//   },

// }

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <Navbar />
        <main className="mainTop">
          <div className="container-fluid">
            <article id="parentportfolio">
              <div className="row articleHeading" id="portfolioheading">
                <div className="col-md-12">
                  <h3>Check out some of my projects</h3>
                </div>
              </div>

              <div className="row col-md-12" id="portfolio">

                {this.state.projects.map(project => (

                  <PortfolioCard

                    id={project.id}
                    key={project.id}
                    title={project.title}
                    github={project.github}
                    deployed={project.deployed}
                    image={project.image}
                    alt={project.alt}
                    text={project.text}

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

export default Portfolio;
