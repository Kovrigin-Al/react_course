import React, { useState } from "react";
import Input from "./components/inputs/Input";
import Textarea from "./components/textarea/Textarea";
import Button from "./components/button/Button";
import PhoneInput from "./components/inputs/PhoneInput";
import Form from "./components/form/Form";
import { validate } from "./utils/validate";
import FormResult from "./components/formResult/FormResult";

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

const fields = {
    name: "",
    surname: "",
    date: "",
    phone: "",
    link: "",
    about: "",
    stack: "",
    project: "",
};

const initialState = {
    showFormResult: false,
    fields,
    errors: initialErrors,
};

const App = () => {
    const [state, setState] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        let trimedState = {};
        for (let i in state.fields) {
            trimedState[i] = state.fields[i].trim();
        }
        setState((prev) => ({ ...prev, fields: trimedState }));
        validate(state, setState);
    };

    const resetForm = (e) => {
        e.preventDefault();
        setState(initialState);
    };

    if (state.showFormResult) {
        return <FormResult {...state.fields} />;
    } else {
        return (
            <Form>
                <div>
                    <Input
                        state={state}
                        setState={setState}
                        innerText="Name:"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                    />
                    <Input
                        state={state}
                        setState={setState}
                        innerText="Surname:"
                        type="text"
                        name="surname"
                        placeholder="Enter Your Surname"
                    />
                    <Input
                        state={state}
                        setState={setState}
                        innerText="Birth Date:"
                        type="date"
                        name="date"
                    />
                    <PhoneInput
                        state={state}
                        setState={setState}
                        innerText="Phone Number:"
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                    />
                    <Input
                        state={state}
                        setState={setState}
                        innerText="Website"
                        type="url"
                        name="link"
                        placeholder="Enter URL of Your Website"
                    />
                    <Textarea
                        state={state}
                        setState={setState}
                        innerText="About Yourself:"
                        name="about"
                        placeholder="Tell About Yourself"
                    />
                    <Textarea
                        state={state}
                        setState={setState}
                        innerText="Technology Stack:"
                        name="stack"
                        placeholder="Tell About Your Technical Skills"
                    />
                    <Textarea
                        state={state}
                        setState={setState}
                        innerText="Last Project:"
                        name="project"
                        placeholder="Describe Your Lastest Project"
                    />
                </div>
                <div className="buttonGroup">
                    <Button text="Submit" onClick={handleSubmit} />
                    <Button text="Cancel" onClick={resetForm} />
                </div>
            </Form>
        );
    }
};
export default App;
