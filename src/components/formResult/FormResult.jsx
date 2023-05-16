import React from "react";
import "./style.css";

class FormResult extends React.Component {
    render() {
        return (
            <div className="resetForm">
                <h1 className="header">{this.props.name + " " + this.props.surname}</h1>
                <div className="bio">
                    <ul>
                        <li>
                            <p>Birth Date: {this.props.date}</p>
                        </li>
                        <li>
                            <p>Phone Number: {this.props.phone}</p>
                        </li>
                        <li>
                            <p>Website: {this.props.link}</p>
                        </li>
                    </ul>
                </div>

                <div className="info">
                    <h2>About Yourself: </h2>
                    <p>{this.props.about}</p>
                    <h2>Technology Stack:</h2>
                    <p>{this.props.stack}</p>
                    <h2>Last Project:</h2>
                    <p>{this.props.project}</p>
                </div>
            </div>
        );
    }
}

export default FormResult;
