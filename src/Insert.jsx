    import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Insert = () => {
    const txtname = useRef();
    const txtemail = useRef();
    const txtpassword = useRef();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = txtname.current.value;
        const email = txtemail.current.value;
        const password = txtpassword.current.value;

        const params = new FormData();
        params.set('name', name);
        params.set('email', email);
        params.set('password', password);

        axios.post('https://geton.skmbpk1z.a2hosted.com/insert-data.php', params)
            .then(function (response) {
                if (response.data['status'] === 'true') {
                    alert("Data Insert Success");
                } else {
                    alert("Data Insert Fail");
                }
            });

        navigate('/')
    };

    return (
        <div className="form-container">
            <h2>Insert User Data</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" ref={txtname} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" ref={txtemail} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" ref={txtpassword} required />
                </div>
                <div className="form-group submit-button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Insert;
