import React from "react";
import "./style.css";

const Form = (props) => {
    return (
        <form className="form">
            <h1 className="form-header">Registration form</h1>
            <div className="form-body">{props.children}</div>
        </form>
    );
};

export default Form;
