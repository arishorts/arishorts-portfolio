import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMediums } from "../services/mediumService";

class RegisterForm extends Form {
  state = {
    data: { message: "", medium: "", name: "", email: "" },
    errors: {},
    mediums: [],
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

  doSubmit = () => {
    //  saveMovie(this.state.data);

    window.location.replace("http://localhost:3000/");
  };

  render() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderSelect(
            "medium",
            "How you hear about me?",
            this.state.mediums
          )}
          {this.renderTextField("message", "Message")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
