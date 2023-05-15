export function validate(state, setState) {
    console.log(state)
    validateName.call({ state, setState });
    validateSurname.call({ state, setState });
    validateDate.call({ state, setState });
    validatePhone.call({ state, setState });
    validateLink.call({ state, setState });
    validateAbout.call({ state, setState });
    validateStack.call({ state, setState });
    validateProject.call({ state, setState });
}

function validateName() {
    if (this.state.name.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                nameError: "The field is empty. Please fill in",
            },
        }), console.log(this.state));
    } else if (this.state.name[0] !== this.state.name[0].toUpperCase()) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                nameError: "The first character must be capitalized",
            },
        }));
    }
}

function validateSurname() {
    if (this.state.surname.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                surnameError: "The field is empty. Please fill in",
            },
        }));
    } else if (this.state.surname[0] !== this.state.surname[0].toUpperCase()) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                surnameError: "The first character must be capitalized",
            },
        }));
    }
}

function validateDate() {
    if (this.state.date.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                dateError: "The field is empty. Please fill in",
            },
        }));
    }
}

function validatePhone() {
    if (this.state.phone.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                phoneError: "The field is empty. Please fill in",
            },
        }));
    }
}

function validateLink() {
    if (this.state.link.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                linkError: "The field is empty. Please fill in",
            },
        }));
    } else if (!this.state.link.startsWith("https://")) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                linkError: "The link must start with 'https://'",
            },
        }));
    }
}

function validateAbout() {
    if (this.state.about.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                aboutError: "The field is empty. Please fill in",
            },
        }));
    }
}

function validateStack() {
    if (this.state.stack.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                stackError: "The field is empty. Please fill in",
            },
        }));
    }
}

function validateProject() {
    if (this.state.project.length === 0) {
        this.setState((prev) => ({
            ...prev,
            errors: {
                ...prev.errors,
                projectError: "The field is empty. Please fill in",
            },
        }));
    }
}
