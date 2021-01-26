import React, { Component } from "react"
import axios from "axios"
import "bulma/css/bulma.min.css"
import "./index.css"
import { Bounce, Slide } from "react-awesome-reveal"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ReactFormInputValidation from "react-form-input-validation"
import Typist from "react-typist"
import slugify from "slugify"
import { CopyToClipboard } from "react-copy-to-clipboard"

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
  componentDidMount() {
    if (document.getElementById("btnSignUp") != null) {
      document.getElementById("btnSignUp").addEventListener("click", e => {
        const name = document.getElementById("name").value
        /* eslint eqeqeq: 0 */
        if (name == 0) {
          console.log("Empty Title or Message")
          toast.error("🤖 Empty Name", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
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
        toast.success("🦄 \n" + wishes[0].content, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        console.log(wishes[0].content)
        this.setState({ persons: wishes })
      }
    })
  }
  PageToast() {
    toast.dark("🦄 Copied", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  render() {
    const wishername = this.state.persons.map(
      person => "💗 \n" + person.content + "\n 💗"
    )
    return (
      <section className="section">
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-half">
              <Slide triggerOnce>
                <br />
                <h1 className="title has-text-warning has-text-centered">
                  <Typist
                    avgTypingDelay={40}
                    startDelay={1800}
                    cursor={{ hideWhenDone: true }}
                  >
                    {" "}
                    💛 Valentines day wishes 💛
                  </Typist>
                </h1>
                <br />
                <Bounce>
                  <p className="has-text-centered">{wishername}</p>
                </Bounce>
              </Slide>
              <br />
              <br />
              <Slide triggerOnce>
                <div className="notification has-text-weight-bold read-more">
                  <p className="has-text-weight-bold has-text-left">
                    When we love 💚
                    <br />
                    <br />
                    we always strive to become better than we are
                    <br />
                    <br />
                    When we strive to become better than we are
                    <br />
                    <br />
                    everything around us becomes better too.
                    <br />
                    <br />I Love You 💗
                  </p>
                </div>
              </Slide>
              <br />
              <br />
              <div className="notification is-warning has-text-weight-bold">
                <br />
                <h3 className="has-text-centered">Create your Own 🍔</h3>
                <div className="has-text-centered">
                  <small>Enter his or Her Name</small>
                </div>
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
                <CopyToClipboard
                  text={window.location.href}
                  onCopy={() => this.setState({ copied: true })}
                >
                  <button
                    className="button is-link read-random"
                    onClick={this.PageToast}
                    disabled={this.state.isLoading}
                  >
                    📝 Copy URL
                  </button>
                </CopyToClipboard>
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
