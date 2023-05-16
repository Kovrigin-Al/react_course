import React from "react";
import "./style.css";

class Textarea extends React.Component {
    handleChange = (e) => {
        this.props.setState((prev) => ({
            ...prev,
            [this.props.name]: e.target.value,
            errors: {
                ...prev.errors,
                [this.props.name + "Error"]:
                    e.target.value.trim().length > 600
                        ? "Exceeded the limit of characters in the field"
                        : "",
            },
        }));
    };
    render() {
        return (
            <div className="form-section">
                <label className="textarea-label" htmlFor={this.props.name}>
                    {this.props.innerText}
                </label>
                <textarea
                    className="textarea"
                    placeholder={this.props.placeholder}
                    id={this.props.name}
                    rows="7"
                    value={this.props.state[this.props.name]}
                    onChange={this.handleChange}
                ></textarea>
                {this.props.state[this.props.name].trim().length <= 600 && (
                    <p className="counter">
                        {this.props.state[this.props.name].trim().length} / 600
                    </p>
                )}
                {this.props.state.errors[this.props.name + "Error"] && (
                    <p className="error">
                        {this.props.state.errors[this.props.name + "Error"]}
                    </p>
                )}
            </div>
        );
    }
}

export default Textarea;
