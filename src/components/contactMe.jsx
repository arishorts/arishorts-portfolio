import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMediums } from "../services/mediumService";

class ContactMe extends Form {
  state = {
    data: { message: "", medium: "", name: "", email: "" },
    errors: {},
    mediums: [],
    showModal: false,
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    message: Joi.string().required().label("Message"),
    medium: Joi.string().required().label("Medium"),
    name: Joi.string().required().label("Name"),
  };

  componentDidMount() {
    const mediums = getMediums();
    this.setState({ mediums: mediums });
  }

  resetForm = () => {
    this.setState({
      data: { message: "", medium: "", name: "", email: "" },
      errors: {},
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  doSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_ur5owwu",
        "template_35pije9",
        form,
        "K4lLI4du2jigc3ksx"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.resetForm();
          this.setState({ showModal: true });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid contactme-container p-5" id="contactme">
          <div className="row justify-content-center">
            <h2 className="text-center contactme-header pb-4">
              Contact <span className="contactme-span">Me</span>
            </h2>
            <form
              id="myForm"
              className="col-md-7 col-sm-10 col-12 contactme-content"
              onSubmit={this.handleSubmit}
            >
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email")}
              {this.renderSelect(
                "medium",
                "How you hear about me?",
                this.state.mediums
              )}
              {this.renderTextField("message", "Message")}
              <div className="text-center">
                {this.renderButton("Send", "contactme-button")}
              </div>
            </form>
          </div>
        </div>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for contacting me. I will get back to you soon.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ContactMe;
