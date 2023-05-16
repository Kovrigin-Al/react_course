import React from "react";
import "./style.css";

const FormResult = (props) => {
    return (
        <div className="resetForm">
            <h1 className="header">{props.name + " " + props.surname}</h1>
            <div className="bio">
                <ul>
                    <li>
                        <p>Birth Date: {props.date}</p>
                    </li>
                    <li>
                        <p>Phone Number: {props.phone}</p>
                    </li>
                    <li>
                        <p>Website: {props.link}</p>
                    </li>
                </ul>
            </div>

            <div className="info">
                <h2>About Yourself: </h2>
                <p>{props.about}</p>
                <h2>Technology Stack:</h2>
                <p>{props.stack}</p>
                <h2>Last Project:</h2>
                <p>{props.project}</p>
            </div>
        </div>
    );
};

export default FormResult;
