import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/userData/action";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user.isUserLoggedIn);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (userStatus) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStatus]);

  function handleUserData(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    dispatch(userLogin(userData));
  }

  return (
    <section className="login">
      <div className="login__container">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleUserData}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleUserData}
            required
          />
          <input type="submit" id="loginbutton" />
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};
