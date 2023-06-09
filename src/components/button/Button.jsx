import React from "react";
import './style.css'

class Button extends React.Component {
    render() {
        return <button className="button">{this.props.text}</button>;
    }
}

export default Button