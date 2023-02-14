import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>The Kenny Social Network.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium fugit nesciunt earum officiis voluptate beatae enim,
            voluptatibus molestias iure, unde placeat obcaecati itaque et
            eligendi deleniti quae cum, cupiditate dolore!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login"><button>Login</button></Link>
        </div>
        <div className="right">
          <h3>Register</h3>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to= "/register"><button>Register</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;