import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const txtname = useRef();
  const txtemail = useRef();
  const txtpassword = useRef();

  var { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

     const params = new FormData();
     params.set('id',id);

     axios.post("https://geton.skmbpk1z.a2hosted.com/single-data.php", params).then(function (response) {
       // console.log(response.data['name'])
        txtname.current.value = response.data['name'];
        txtemail.current.value = response.data['email'];
        txtpassword.current.value = response.data['password'];
      });

  },[]);
  const handleSubmit = (e) => {
    e.preventDefault();

    var name = txtname.current.value;
    var email = txtemail.current.value;
    var password = txtpassword.current.value;

    // alert(name);
    // alert(email);
    // alert(password);

    //object
    const params = new FormData();
    params.set("name", name);
    params.set("email", email);
    params.set("password", password);
    params.set('id',id);

    axios.post("https://geton.skmbpk1z.a2hosted.com/edit-data.php", params).then(function (response) {
        if (response.data["status"] == "true") {
          alert("Data edit Success");
          navigate('/');
        } else {
          alert("Data edit Fail");
        }
      });
  };
  return (
    <>
      <div className="form-container">
            <h2>Edit  Data</h2>
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
    </>
  );
};

export default Edit;
