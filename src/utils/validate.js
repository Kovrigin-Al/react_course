export function validate(state, setState) {
    Object.keys(state.fields).forEach((i) => checkFieldIsNotEmpty(i, state, setState));
    [("surname", "name")].forEach((i) => validateName.call({ state, setState }, i));
    validatePhone.call({ state, setState });
    validateLink.call({ state, setState });
    setState((prev) => {
        return Object.values(prev.errors).every((i) => !i)
            ? { ...prev, showFormResult: true }
            : prev;
    });
}

function validateName(inputName) {
    const firstLetter = this.state.fields[inputName]?.[0];
    if (firstLetter && firstLetter !== firstLetter.toUpperCase()) {
        setErrorForFieldName(
            "The first character must be capitalized",
            inputName,
            this.setState
        );
    }
}

function validatePhone() {
    if (this.state.fields.phone.length !== 12) {
        setErrorForFieldName(
            "Phone number must consist of 9 digits",
            "phone",
            this.setState
        );
    }
}

function validateLink() {
    if (!this.state.fields.link.startsWith("https://")) {
        setErrorForFieldName(
            "The link must start with 'https://'",
            "link",
            this.setState
        );
    }
}

function checkFieldIsNotEmpty(fieldName, state, setState) {
    if (state.fields[fieldName].length === 0) {
        setErrorForFieldName("The field is empty. Please fill in", fieldName, setState);
    }
}

function setErrorForFieldName(errorMessage, fieldName, setState) {
    setState((prev) => ({
        ...prev,
        errors: {
            ...prev.errors,
            [fieldName + "Error"]: errorMessage,
        },
    }));
}
