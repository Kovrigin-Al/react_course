import React from "react";
import Input from "./components/inputs/Input";
import Textarea from "./components/textarea/Textarea";
import Button from "./components/button/Button";
import PhoneInput from "./components/inputs/PhoneInput";
import Form from "./components/form/Form";
import { validate } from "./utils/validate";

const initialErrors = {
    nameError: "",
    surnameError: "",
    dateError: "",
    phoneError: "",
    linkError: "",
    aboutError: "",
    stackError: "",
    projectError: "",
};

const initialState = {
    name: "",
    surname: "",
    date: "",
    phone: "",
    link: "",
    about: "",
    stack: "",
    project: "",
    errors: initialErrors,
};

class App extends React.Component {
    constructor() {
        super();
        this.state = { ...initialState };
        this.setState = this.setState.bind(this);
    }

    validateInputs = (e) => {
        e.preventDefault();
        this.setState({
        }, ()=>console.log(this.state));
    };

    resetForm = (e) => {
        e.preventDefault();
        this.setState(initialState);
    };

    render() {
        return (
            <Form>
                <div>
                    <Input
                        state={this.state}
                        setState={this.setState}
                        innerText="Name:"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                    />
                    <Input
                        state={this.state}
                        setState={this.setState}
                        innerText="Surname:"
                        type="text"
                        name="surname"
                        placeholder="Enter Your Surname"
                    />
                    <Input
                        state={this.state}
                        setState={this.setState}
                        innerText="Birth Date:"
                        type="date"
                        name="date"
                    />
                    <PhoneInput
                        state={this.state}
                        setState={this.setState}
                        innerText="Phone Number:"
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                    />
                    <Input
                        state={this.state}
                        setState={this.setState}
                        innerText="Website"
                        type="url"
                        name="link"
                        placeholder="Enter URL of Your Website"
                    />
                    <Textarea
                        state={this.state}
                        setState={this.setState}
                        innerText="About Yourself:"
                        name="about"
                        placeholder="Tell About Yourself"
                    />
                    <Textarea
                        state={this.state}
                        setState={this.setState}
                        innerText="Technology Stack:"
                        name="stack"
                        placeholder="Tell About Your Technical Skills"
                    />
                    <Textarea
                        state={this.state}
                        setState={this.setState}
                        innerText="Last Project:"
                        name="project"
                        placeholder="Describe Your Lastest Project"
                    />
                </div>
                <div className="buttonGroup">
                    <Button text="Submit" onClick={this.validateInputs} />
                    <Button text="Cancel" onClick={this.resetForm} />
                </div>
            </Form>
        );
    }
}

export default App;
