import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMediums } from "../services/mediumService";

class ContactMe extends Form {
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
      <React.Fragment>
        <div className="container-fluid contactme-container" id="contactme">
          <div className="py-5 row justify-content-center">
            <h2 className="text-center contactme-header mb-3">
              Contact <span className="contactme-span">Me</span>
            </h2>
            <form
              className="col-md-7 col-10 contactme-content"
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
                {this.renderButton("Submit", "contactme-button")}
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactMe;
