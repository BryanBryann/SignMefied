import React, { useState } from 'react';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Create = ({ onCreate }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = () => {
        onCreate({username, email, password});
    };

    return (
        <div>
            <div className="container pt-3 col-12 col-md-7">
                <p className="text-dark bg-white p-3 text-center fw-semibold rounded">
                    Time to jump the fun! First, create an account to save your progress.
                </p>
            </div>
            <div className="container col-9 col-md-4 pt-2">
                <div className="input-group mb-3">
                    <span className="input-group-text"><MdDriveFileRenameOutline /></span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text"><RiLockPasswordLine /></span>
                    <input
                        type={passwordVisible ? "text" : "password"} // Corrected line:  Toggle type based on state
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ paddingRight: '35px' }}
                    />
                    <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button className="btn bg-violet text-white w-100" onClick={handleSubmit}>
                    Create Account
                </button>
                <p className="text-center text-white mt-3">or</p>
                <button className="btn bg-violet text-white w-100" onClick={onCreate}>
                    <span className="pe-3"><FcGoogle /></span>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Create;