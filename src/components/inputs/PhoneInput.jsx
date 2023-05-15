import React from "react";

class PhoneInput extends React.Component {
    mask(event) {
        const keyCode = event.keyCode;
        const template = "7-____-__-__",
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        let i = 0,
            newValue = template.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i !== -1) {
            newValue = newValue.slice(0, i);
        }
        let reg = template
            .substring(0, this.value.length)
            .replace(/_+/g, function (a) {
                return "\\d{1," + a.length + "}";
            })
            .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
            !reg.test(this.value) ||
            this.value.length < 5 ||
            (keyCode > 47 && keyCode < 58)
        ) {
            this.value = newValue;
        }
        if (event.type === "blur" && this.value.length < 5) {
            this.value = "";
        }
    }
    componentDidMount() {
        const elem = document.getElementById("phone");
        elem.addEventListener("input", this.mask);
        elem.addEventListener("focus", this.mask);
        elem.addEventListener("blur", this.mask);
    }
    
    componentWillUnmount() {
        const elem = document.getElementById("phone");
        elem.removeEventListener("input", this.mask);
        elem.removeEventListener("focus", this.mask);
        elem.removeEventListener("blur", this.mask);
    }

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
            </div>
        );
    }
}

export default PhoneInput;
