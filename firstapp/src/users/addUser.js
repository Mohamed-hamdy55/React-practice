import { useState, useEffect } from "react";

export default function AddUser() {

    const [user, setUser] = useState({
        name: "Hamdy",
        email: "Hamdy@gmail.com"
    })

    const [errors, setErros] = useState({
        nameError: "",
        emailError: "",
    })

    const handleChange = (e) => {

        if (e.target.name === "name") {
            setUser({ ...user, name: e.target.value })

            if (e.target.value.length > 10 || e.target.value.length === 0) {
                setErros({ ...errors, nameError: "Sorry, length is between 1 to 10" });
            } else {
                setErros({ ...errors, nameError: null })
            }

        } else if (e.target.name === "email") {
            setUser({ ...user, email: e.target.value })

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(e.target.value) || e.target.value.length === 0) {
                setErros({ ...errors, emailError: "Enter a valid email" });
            } else {
                setErros({ ...errors, emailError: null })
            }
        }
    }

    return (
        <>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    autoComplete="true"
                    value={user.name} // to allow changes user "onchange handler"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    // value="hamdy" // if i didnt add the value to state it will be neve changes
                    placeholder="Mohamed Hamdy"
                />
                <small className={`text-danger ${(!errors.nameError)?"visually-hidden":""} nameError`} >{errors.nameError}</small>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="text"
                    className="form-control"
                    name="email"
                    autoComplete="true"
                    value={user.email} // to allow changes user "onchange handler"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    // value="hamdy@gmail.com" // if i didnt add the value to state it will be neve changes
                    placeholder="example@gmail.com"
                />
                <small className={`text-danger ${(!errors.emailError)?"visually-hidden":""} emailError`} >{errors.emailError}</small>
            </div>
        </>
    );
}