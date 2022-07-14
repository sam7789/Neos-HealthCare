import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/userData/action";
export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userLogout());
    navigate("/login");
    return () => {};
  }, [dispatch, navigate]);
  return <div></div>;
};
