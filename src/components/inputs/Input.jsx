import React from "react";
import "./style.css";

const Input = (props) => {
    const handleChange = (e) => {
        props.setState((prev) => ({
            ...prev,
            [props.name]: e.target.value,
            errors: { ...prev.errors, [props.name + "Error"]: "" },
        }));
    };

    return (
        <div className="form-section">
            <label htmlFor={props.name}>{props.innerText}</label>
            <input
                placeholder={props.placeholder}
                id={props.name}
                type={props.type}
                value={props.state[props.name]}
                onChange={handleChange}
            />
            {props.state.errors[props.name + "Error"] && (
                <p className="error">{props.state.errors[props.name + "Error"]}</p>
            )}
        </div>
    );
};

export default Input;
