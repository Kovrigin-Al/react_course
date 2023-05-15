import React from "react";
import Input from "./components/input/Input";
import Textarea from "./components/textarea/Textarea";
import Button from "./components/button/Button";
import Form from "./components/form/Form";

class App extends React.Component {
    render() {
        return (
            <Form>
                <div>
                    <Input
                        innerText="Name:"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                    />
                    <Input
                        innerText="Surname:"
                        type="text"
                        name="surname"
                        placeholder="Enter Your Surname"
                    />
                    <Input innerText="Birth Date:" type="date" name="date" />
                    <Input
                        innerText="Phone Number:"
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                    />
                    <Input
                        innerText="Website"
                        type="url"
                        name="link"
                        placeholder="Enter URL of Your Website"
                    />
                    <Textarea
                        innerText="About Yourself:"
                        name="about"
                        placeholder="Tell About Yourself"
                    />
                    <Textarea
                        innerText="Technology Stack:"
                        name="stack"
                        placeholder="Tell About Your Technical Skills"
                    />
                    <Textarea
                        innerText="Last Project:"
                        name="project"
                        placeholder="Describe Your Lastest Project"
                    />
                </div>
                <div className="buttonGroup">
                    <Button text="Submit" />
                    <Button text="Cancel" />
                </div>
            </Form>
        );
    }
}

export default App;
