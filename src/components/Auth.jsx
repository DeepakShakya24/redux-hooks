import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleAuth = () => {
    dispatch({ type: "HANDLE_AUTH" });
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleAuth}>
        {auth.isloggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
