import React from "react";
import "./style.css";

const Textarea = (props) => {
    const handleChange = (e) => {
        props.setState((prev) => ({
            ...prev,
            fields: { ...prev.fields, [props.name]: e.target.value },
            errors: {
                ...prev.errors,
                [props.name + "Error"]:
                    e.target.value.trim().length > 600
                        ? "Exceeded the limit of characters in the field"
                        : "",
            },
        }));
    };

    return (
        <div className="form-section">
            <label className="textarea-label" htmlFor={props.name}>
                {props.innerText}
            </label>
            <textarea
                className="textarea"
                placeholder={props.placeholder}
                id={props.name}
                rows="7"
                value={props.state[props.name]}
                onChange={handleChange}
            ></textarea>
            {props.state.fields[props.name].trim().length <= 600 && (
                <p className="counter">
                    {props.state.fields[props.name].trim().length} / 600
                </p>
            )}
            {props.state.errors[props.name + "Error"] && (
                <p className="error">{props.state.errors[props.name + "Error"]}</p>
            )}
        </div>
    );
};

export default Textarea;
