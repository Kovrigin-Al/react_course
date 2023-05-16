import React, { useEffect } from "react";
import "./style.css";
import { mask } from "../../utils/mask";

const PhoneInput = (props) => {
    useEffect(() => {
        const elem = document.getElementById("phone");
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
        return () => {
            elem.removeEventListener("input", mask);
            elem.removeEventListener("focus", mask);
            elem.removeEventListener("blur", mask);
        };
    }, []);

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
                <p className="error">
                    {props.state.errors[props.name + "Error"]}
                </p>
            )}
        </div>
    );
};

export default PhoneInput;
