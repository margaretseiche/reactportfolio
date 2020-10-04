import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import ContactCard from "../../components/ContactCard";
import contacts from "../../contact.json";
import "./style.css";

class Contact extends Component {

  state = {
    contacts
  };

  render() {
    return (
      <div>
        <Navbar />

        <h1 className="text-center">test</h1>
        <main>
          <div className="container-fluid">
            <article className="socialmedia">

              <div className="row articleHeading">
                <div className="col-12"><h3>Follow Me</h3></div>
              </div>

              <div className="row justify" id="feature">

                {this.state.contacts.map(contact => (

                  <ContactCard

                    id={contact.id}
                    key={contact.id}
                    name={contact.name}
                    reference={contact.reference}
                    image={contact.image}
                    alt={contact.alt}
                    title={contact.title}

                  />
                ))}

                {/* </div> */}

              </div>
            </article>


            {/* <article className="email">
        <div className="row articleHeading">
          <div className="col-md-12"><h3>Or Email Me</h3></div>
        </div>
        
        <div className="row" id="feature">            
          <form action="mailto:margaretseiche@hotmail.com" enctype="text/plain">
            <div id="form" className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
                </div>
                <div className="form-group">
                  <label for="subjectLine">Subject</label>
                  <input type="text" className="form-control" id="subjectLine"/>
                </div>
              </div>  
                <div className="col-md-6">
                  <div className="form-group">    
                    <br/>            
                    <textarea rows="5" cols="80" name="comment" form="usrform" style="border-radius: 5px;">
                      Enter text here...</textarea>
                  </div>
                </div>  
            </div>
            <div className="row">
              <div className="col-md-6">
                <button type="submit" className="btn btn-primary" style={style.submitButton}>Submit</button>
              </div>
            </div>
          </form>    
        </div> 
      </article>    */}
          </div>
        </main>

      </div>
    );
  }
}

export default Contact;
