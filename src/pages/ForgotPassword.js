import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Input from "../block/Input";
import Dropdown from "../block/Dropdown";
import Submit from "../block/Submit";
import { NavLink } from "react-router-dom";
import "../styles/forgotpassword.css";
import "../styles/input.css";

const securityQuestions = require("../data/securityQuestions.json");

function ForgotPassword(props) {
  return (
    <>
      <Header header="Forgot Password?" />
      <div class="main">
        <div class="row">
          <div class="form-p">
            <Intro intro="Please enter your email address and answer your chosen security question below" />
            <form>
              <Input
                type="email"
                placeholder="Enter Email Address"
                name="Email Address"
                required
              />
            </form>
            <div className="securityQuestions">
              <label>Security Question</label>
              <select>
                <Dropdown
                  intakeProgrammeDetails={
                    securityQuestions.securityQuestion.Questions
                  }
                />
              </select>
              <form>
                <Input
                  type="text"
                  placeholder="Write Answer Here"
                  name="Answer"
                  required
                />
                <NavLink to="/signin">
                  <Submit />
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;