import React, { Component } from 'react';
import 'bulma/css/bulma.min.css'
import './index.css';
import { Fade, Bounce, Slide } from "react-awesome-reveal";
import ReactCountryFlag from "react-country-flag"

class RetrieveList extends Component {
 
  render() {
    return (
        <section className="section">
        <div className="container content">
        <div className="columns is-centered">
        <div className="column is-half">
        <Slide triggerOnce>
        <h1 className="title has-text-warning has-text-centered">
         Happy Republic Day
        </h1>
        </Slide>
        <br />
        <Fade>
        <Bounce>
        <ReactCountryFlag
                countryCode="in"
                svg
                style={{
                    width: '100%',
                    height: '100%',
                }}
                title="US"
            />
        </Bounce>
        </Fade>
        <br />
        </div>
        </div>
        </div>
        </section> 
    );
  }
}
export default RetrieveList;