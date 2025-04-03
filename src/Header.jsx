import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleOut = () => {
        localStorage.clear();
        navigate('/')
    }
    return (
        <header className="header-container">
            <div className="nav-container">
                <ul className="nav-links">
                  {
                        !localStorage.getItem('email') &&  
                        <li>
                            <Link className="nav-link" to="/">Login</Link>
                        </li>
                  }
                    {
                        localStorage.getItem('email')  && 
                        <li>
                            <Link className="nav-link" to="/view">View</Link>
                        </li>
                    }
                    {
                        localStorage.getItem('email')  && 
                        <li>
                            <Link className="nav-link" to="/insert">Insert</Link>
                        </li>
                    }
                    {
                        localStorage.getItem('email')  && 
                            <button type="button" className="nav-link" onClick={handleOut}>Log Out</button>
                    }
                  
                </ul>
            </div>
        </header>
    );
}

export default Header;
