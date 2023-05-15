import React from "react";

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
                    value={this.props.state[this.props.name]}
                    onChange={(e) =>
                        this.props.setState({
                            ...this.props.state,
                            [this.props.name]: e.target.value,
                        })
                    }
                ></textarea>
                {this.props.state[this.props.name].trim().length <= 600 && (
                    <p>{this.props.state[this.props.name].trim().length} / 600</p>
                )}
                {this.props.state[this.props.name].trim().length > 600 && (
                    <p style={{ color: "red" }}>
                        Exceeded the limit of characters in the field
                    </p>
                )}
            </div>
        );
    }
}

export default Textarea;
