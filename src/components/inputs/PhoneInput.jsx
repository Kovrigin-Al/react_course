import React from "react";
import "./style.css";
import { mask } from "../../utils/mask";

class PhoneInput extends React.Component {
    componentDidMount() {
        const elem = document.getElementById("phone");
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
    }

    componentWillUnmount() {
        const elem = document.getElementById("phone");
        elem.removeEventListener("input", mask);
        elem.removeEventListener("focus", mask);
        elem.removeEventListener("blur", mask);
    }

    handleChange = (e) => {
        this.props.setState((prev) => ({
            ...prev,
            [this.props.name]: e.target.value,
            errors: { ...prev.errors, [this.props.name + "Error"]: "" },
        }));
    };

    render() {
        return (
            <div className="form-section">
                <label htmlFor={this.props.name}>{this.props.innerText}</label>
                <input
                    placeholder={this.props.placeholder}
                    id={this.props.name}
                    type={this.props.type}
                    value={this.props.state[this.props.name]}
                    onChange={this.handleChange}
                />
                {this.props.state.errors[this.props.name + "Error"] && (
                    <p className="error">
                        {this.props.state.errors[this.props.name + "Error"]}
                    </p>
                )}
            </div>
        );
    }
}

export default PhoneInput;
