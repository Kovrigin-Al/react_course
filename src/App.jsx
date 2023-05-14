import React from "react";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Button from "./components/Button";

class App extends React.Component {
    renderButton(text) {
        return <Button text={text} />;
    }

    render() {
        return (
            <form className="form">
                <h1 className="form-header">Registration form</h1>
                <div className="form-body">
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
            </form>
        );
    }
}

export default App;
