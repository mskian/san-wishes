import React, { Component } from 'react';
import 'bulma/css/bulma.min.css'
import './index.css';
import { Fade, Bounce, Slide} from "react-awesome-reveal";
import ReactCountryFlag from "react-country-flag";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typist from 'react-typist';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class RetrieveList extends Component {

  RefreshPage = () => {
    this.PageToast();
 }
 Pagewish() {
  window.location.reload();
}
 PageToast() {
  toast.info('🦄 Welcome', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
    });
  }
 
  render() {
    return (
        <section className="section">
        <div className="container content">
        <div className="columns is-centered">
        <div className="column is-half">
        <Slide triggerOnce>
        <h1 className="title has-text-warning has-text-centered">
        <Typist avgTypingDelay={40}  startDelay={1800} cursor={{ hideWhenDone: true }}> Happy Republic Day</Typist>
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
                title="India"
            />
        </Bounce>
        </Fade>
        <br />
        <br />
        <Slide triggerOnce>
        <div className="notification has-text-weight-bold read-more">
        <p className="has-text-weight-bold has-text-left">
         We got our independence by losing many brave souls<br /><br />
         We got India fully republic by many efforts<br /><br />
         On this republic day let's salute to all of them<br /><br/>
         Who served for the country<br /><br />
         And never forget their sacrifices<br /><br />
         Happy Republic Day 2021 🇮🇳
        </p>
        </div>
        </Slide>
        <br />
        <div class="buttons is-centered">
        <ToastContainer />
        <button className="button is-link read-random"  onClick={() => window.location.reload()}>Get My Wish</button>
        <button className="button is-warning read-random" onClick={this.RefreshPage}>Thank you</button>
        </div>
        <br />
        <AudioPlayer autoPlay src="https://san-movies.b-cdn.net/videos/india-sg2.mp3" showSkipControls={true} showJumpControls={false} />
        <br />
        <br />
        <hr />
        <p class="has-text-success has-text-weight-bold has-text-centered">
          My Personal Wishing web page for Sharing My Greetings and Wishes Around the World - Built using React JS <br />
          <br />
          <Fade>
          <img src="./react.png" loading="lazy" height="45" width="45" alt="San Wishes" />
          </Fade>
        </p>
        <br />
        <br />
        </div>
        </div>
        </div>
        </section> 
    );
  }
}
export default RetrieveList;