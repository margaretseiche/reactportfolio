// import React, { Component } from "react";
import React from "react";
import Navbar from "../../components/Navbar";
// import AboutEducationCard from "../../components/AboutEducationCard";
// import AboutWorkCard from "../../components/AboutWorkCard";

// import schools from "../../abouted.json";
// import works from "../../aboutwork.json";
import "./style.css";

function About() {
  return (
    <div>
    <Navbar/>
    <main className="mainTop">
      <div className="container-fluid">

        <article className="Personal">
          <div className="row articleHeading">
            <div className="col-md-12"><h3>Personal</h3></div>
          </div>    
          
          <div className="row" id="feature">                
            <div className="col-md-4">    
              <img id="about-image" src="/assets/MargaretSeiche.JPG" className="float-left"
                  alt="Margaret has brown hair and eyeglasses." title="headshot of Margaret Seiche"/>                          
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
            <div className="col-md-4">
             
              <div className="row">
                  <h4>Coding Bootcamp</h4>
              </div>    
              <div className="row">   
                  <img id="about-image" src="/assets/ColumbiaEngineering.png" className="float-left"
                            alt="Columbia Engineering" title="Columbia Engineering"/>
                  <div>
                    <h6>COLUMBIA UNIVERSITY</h6>
                    <p>Certified in Javascript,</p> 
                    <p>Node, Express, API Queries,</p>  
                    <p>MySQL, React, and MongoDB</p>               
                  </div>               
              </div>  
          </div>
        
            <div className="col-md-4">
              <div className="row">
                <h4>MBA</h4>
              </div>
              <div className="row"> 
                <img id="about-image" src="/assets/ChicagoBooth——transparent.png" className="float-left"
                    alt="Chicago Booth MBA" title="Chicago Booth MBA"/>
                <div>      
                  <h6>UNIVERSITY OF CHICAGO</h6>              
                  <p>Finance and Accounting</p>
                </div>
              </div>
            </div>     

            <div className="col-md-4">
              <div className="row">
                <h4>Undergraduate</h4> 
              </div>
              <div className="row">         
                <img id="about-image" src="/assets/Middlebury——transparent.png"  className="float-left"
                          alt="crest of Middlebury College" title="crest of Middlebury College"/>
                <div>  
                  <h6>MIDDLEBURY COLLEGE</h6>   
                    <p>Bachelor of Arts,</p>
                    <p id="major">Intl. Politics & Economics</p>
                    <p>Study abroad in Japan</p>  
                </div>  
              </div>
            </div>
            </div>
             
        </article>
  
        <article className="experience">
          <div className="row articleHeading">
            <div className="col-md-12"><h3>Work Experience</h3></div>
          </div>  
          <div className="row" id="feature">        
            <div className="col-md-4">
             
              <div className="row">
                  <h4>Marketing</h4>
              </div>    
              <div className="row">      
                  <ul>
                      <li id="list">Launched websites on multiple platforms</li>
                      <li id="list">Certified in full-stack development</li>
                      <li id="list">5 years in direct sales</li>
                  </ul>                                         
              </div>  
          </div>
        
            <div className="col-md-4">
              <div className="row">
                <h4>Event Management</h4>
              </div>
              <div className="row"> 
                <ul>
                  <li id="list">Led 9 teams concurrently</li>
                  <li id="list">Expanded from 2 to 5 annual conferences</li>
                  <li id="list">Grew revenue while cutting fixed costs</li>
                </ul>   
              </div>
            </div>     

            <div className="col-md-4">
              <div className="row">
                <h4>Financial Analysis</h4> 
              </div>
              <div className="row">         
                <ul>
                  <li id="list">Developed event budgets and evaluation</li>
                  <li id="list">Standardized cash controls at a non-profit</li>
                  <li id="list">Analyzed contracts during restructuring</li>
              </ul>                
            </div>  
           </div>
         </div> 
        </article>

      </div>
    </main>
    </div>
  );
}

export default About;