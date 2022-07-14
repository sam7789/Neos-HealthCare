import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/userData/action";

export const Signup = () => {
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

  function handleRegister(e) {
    e.preventDefault();
    dispatch(userRegister(userData));
  }

  return (
    <section className="signup">
      <div className="signup__container">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            name="username"
            onChange={handleUserData}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleUserData}
            required
          />
          <input
            type="number"
            placeholder="Enter Phone Number"
            name="phoneno"
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
          <input type="submit" id="signupbutton" />
        </form>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </section>
  );
};
