import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1> Hello World.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium fugit nesciunt earum officiis voluptate beatae enim,
            voluptatibus molestias iure, unde placeat obcaecati itaque et
            eligendi deleniti quae cum, cupiditate dolore!
          </p>
          <span>Dont you have an account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h3>Login</h3>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
              <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
