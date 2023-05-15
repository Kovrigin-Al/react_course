import React from "react";
import "./style.css";

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <h1 className="form-header">Registration form</h1>
                <div className="form-body">{this.props.children}</div>
            </form>
        );
    }
}

export default Form;
