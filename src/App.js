import React, { Component } from "react"
import axios from "axios"
import "bulma/css/bulma.min.css"
import "./index.css"
import { Fade, Bounce, Slide } from "react-awesome-reveal"
import ReactCountryFlag from "react-country-flag"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ReactFormInputValidation from "react-form-input-validation"
import Typist from "react-typist"
import slugify from "slugify"

class RetrieveList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        name: "",
      },
      errors: {},
      persons: [],
    }
    this.form = new ReactFormInputValidation(this)
    this.form.useRules({
      name: "required",
    })
  }
  RefreshPage = () => {
    this.PageToast()
  }
  Pagewish() {
    window.location.reload()
  }
  componentDidMount() {
    if (document.getElementById("btnSignUp") != null) {
      document.getElementById("btnSignUp").addEventListener("click", e => {
        const name = document.getElementById("name").value
        /* eslint eqeqeq: 0 */
        if (name == 0) {
          console.log("Empty Title or Message")
          return false
        }
        //const users = encodeURIComponent(name)
        const users = slugify(name, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: false,
          strict: false,
        })
        window.location.href = "?name=" + users
      })
    }
    const GET_USER = new URL(window.location.href).searchParams.get("name")
    axios.get("https://wishes-five.vercel.app/" + GET_USER).then(res => {
      const wishes = res.data
      if (wishes[0].content === "null") {
        console.log("no data")
      } else {
        console.log(wishes[0].content)
        this.setState({ persons: wishes })
      }
    })
  }
  PageToast() {
    toast.info("🦄 Welcome", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  render() {
    const wishername = this.state.persons.map(
      person => "wishes from \n" + person.content
    )

    return (
      <section className="section">
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-half">
              <Slide triggerOnce>
                <h1 className="title has-text-warning has-text-centered">
                  <Typist
                    avgTypingDelay={40}
                    startDelay={1800}
                    cursor={{ hideWhenDone: true }}
                  >
                    {" "}
                    Happy Republic Day
                  </Typist>
                </h1>
                <p className="has-text-centered">{wishername}</p>
              </Slide>
              <br />
              <Fade>
                <Bounce>
                  <ReactCountryFlag
                    countryCode="in"
                    svg
                    style={{
                      width: "100%",
                      height: "100%",
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
                    We got our independence by losing many brave souls
                    <br />
                    <br />
                    We got India fully republic by many efforts
                    <br />
                    <br />
                    On this republic day let's salute to all of them
                    <br />
                    <br />
                    Who served for the country
                    <br />
                    <br />
                    And never forget their sacrifices
                    <br />
                    <br />
                    Happy Republic Day 2021 🇮🇳
                  </p>
                </div>
              </Slide>
              <br />
              <br />
              <div className="notification is-warning has-text-weight-bold">
                <br />
                <form onSubmit={this.form.handleSubmit}>
                  <div className="control">
                    <input
                      className="input"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter Name"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.name}
                      data-attribute-name="Name"
                    />
                  </div>
                  <label className="error">
                    {this.state.errors.name ? this.state.errors.name : ""}
                  </label>
                  <br />
                  <button
                    id="btnSignUp"
                    className="button is-link read-random sign-button"
                    type="submit"
                  >
                    Create Wishes
                  </button>
                </form>
                <br />
              </div>
              <br />
              <div className="buttons is-centered">
                <ToastContainer />
                <button
                  className="button is-link read-random"
                  onClick={this.RefreshPage}
                >
                  💚 Thank you
                </button>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default RetrieveList
