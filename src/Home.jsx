import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    ViewData();
  }, []);

  const ViewData = () => {
    axios.get("https://geton.skmbpk1z.a2hosted.com/get-data.php").then(function (response) {
        setText(response.data);
      });
  };

  const handleDelete = (e) => {
    const id = e.target.getAttribute("data-id");
  
    const confirmDelete = window.confirm("Are you sure you want to delete this data?");
    
    if (confirmDelete) {
      const params = new FormData();
      params.set("id", id);
  
      axios.post("https://geton.skmbpk1z.a2hosted.com/delete-data.php", params).then(function (response) {
        if (response.data["status"] === "true") {
          alert("Data Delete Success");
          ViewData();
        } else {
          alert("Data Delete Failed");
        }
      });
    } else {
      console.log("Delete operation cancelled");
    }
  };
  

  const navigate = useNavigate();

  const handleEdit = (e) => {
    const id = e.target.getAttribute("data-id");
    navigate('/edit/' + id);
  };

  return (      
    <div className="home-view-container">
      <h1 className="title">Welcome,{localStorage.getItem('email')}</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>  
            <th>Password</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {text.map((obj, index) => {
            return (
              <tr key={obj.id}>
                <td>{index + 1}</td>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.password}</td>
                <td>
                  <button className="btn delete-btn" type="button" onClick={handleDelete} data-id={obj.id}>
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn edit-btn" type="button" onClick={handleEdit} data-id={obj.id}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default View;
