import React, { useState } from 'react';
import './Login.css'; // Ensure CSS file exists for styling
import { Link } from 'react-router-dom';

export const Login = () => {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    function validateUsername(username) {
        const pattern = /^.+@[^.]+\.edu$/
            ;
        return pattern.test(username);
    }

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!role) {
            formIsValid = false;
            errors["role"] = "Please select a role.";
        }

        if (!username.trim()) {
            formIsValid = false;
            errors["username"] = "Username is required.";
        }
        if (username) {

            const isValid = validateUsername(username);
            if (!isValid) {
                formIsValid = false;
                errors["username"] = "Invalid UserName";
            }
        }
        if (!username.includes("@")) {
            formIsValid = false;
            errors["username"] = "Username is not valid";
        }
        if (!password) {
            formIsValid = false;
            errors["password"] = "Password is required.";
        } else if (password.length < 6) {
            formIsValid = false;
            errors["password"] = "Password must be at least 6 characters.";
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        if (validateForm()) {
            console.log({ role, username, password });
            // Process login here. For example, you might want to send role, username, and password to your backend.
        }
        e.preventDefault();


    };

    return (
        <>
            <div className="login-container">
                <h1 className="title">Learning Management System</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="role">Role</label>
                        <select id="role" value={role} onChange={e => setRole(e.target.value)} required>
                            <option value="">Select Role</option>
                            <option value="faculty">Faculty</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>
                        {errors.role && <div className="error">{errors.role}</div>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                        {errors.username && <div className="error">{errors.username}</div>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    <Link to={"/" + role} > <button onClick={handleSubmit} type="submit">Login</button></Link>

                </form>
            </div>
        </>
    );
};
