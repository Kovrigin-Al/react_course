import React from "react";

class Input extends React.Component {
    render() {
        return (
            <div className="form-section">
                <label htmlFor={this.props.name}>{this.props.innerText}</label>
                <input
                    placeholder={this.props.placeholder}
                    id={this.props.name}
                    type={this.props.type}
                    value={this.props.state[this.props.name]}
                    onChange={(e) =>
                        this.props.setState({
                            ...this.props.state,
                            [this.props.name]: e.target.value,
                        })
                    }
                />
                {this.props.state.errors[this.props.name + "Error"] && (
                    <p>{this.props.state.errors[this.props.name + "Error"]}</p>
                )}
            </div>
        );
    }
}

export default Input;
