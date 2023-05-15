import React from "react";
import './style.css'

class Textarea extends React.Component {
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
                ></textarea>
            </div>
        );
    }
}

export default Textarea;
