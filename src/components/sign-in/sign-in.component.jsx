import React from "react";
import FormInput from "../form-input/form-input.component";
import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }
  render() {
    this.handleSubmit = async (event) => {
      event.preventDefault();

      const { email, password } = this.state;
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: "", password: "" });
      } catch (err) {
        console.log(err);
      }
    };
    this.handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              onClick={SignInWithGoogle}
              value="Submit Form"
              type="button"
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
