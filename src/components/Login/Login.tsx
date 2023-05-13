import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    interface IData{
        firstName: string,
        lastName: string
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const gotoDashboard = (data: IData) => {
        var fullName = data.firstName + ' ' + data.lastName;
        console.log(`login sucess for ${fullName}`)
        navigate("/dashboard", {state: { name: fullName}})
    }

    const handleFormSubmit = ( username:String, password: String) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: username,
                password: password 
            })
        };
        fetch('https://dummyjson.com/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => gotoDashboard(data))
            .catch(error => console.error(error));
    }

    return (
        <div className="login">
          <div className="login__container">
            <input
              type="text"
              className="login__textBox"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="login__btn"
              onClick={() => handleFormSubmit(username, password)}
            >
              Login
            </button>
          </div>
        </div>
      );
}

export default Login