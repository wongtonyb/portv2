import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: ""
    };
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(type, inp) {
    this.setState({
      [type]: inp.target.value
    });
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ name: "", email: "", message: "", status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div className="comp has-overlay" id="contact">
        <h1>Get In Touch</h1>
        <div id="form">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mqkbvowo"
            method="POST"
          >
            <div className="fields">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input-fields"
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                required
              />
            </div>
            <div className="fields">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-fields"
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
                required
              />
            </div>
            <div className="fields">
              <textarea
                rows="14"
                type="text"
                name="message"
                placeholder="Message"
                className="input-fields"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
                required
              />
            </div>
            <div id="submit-btn-div">
              <button variant="primary" type="submit">
                SEND
              </button>
            </div>
            {this.state.status === "SUCCESS" ? (
              <p id="contact-success">
                Your email has been recieved, I'll get back to you as soon as
                possible!
              </p>
            ) : (
              <div></div>
            )}
            {this.state.status === "ERROR" ? (
              <p id="contact-error">
                Sorry, something went wrong, try emailing me directly at{" "}
                <a href="mailto:wongtonyb@gmail.com">wongtonyb@gmail.com</a>
              </p>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
