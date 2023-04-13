import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-300">
      <h1 className="text-5xl mb-10 text-blue-100 font-bold font-mono">
        Login
      </h1>
      <form onSubmit={handleLogin} className="space-y-4 w-96">
        <input
          className="py-1 w-full pl-4"
          name="email"
          type="email"
          required={true}
        />
        <br />
        <input
          className="py-1 w-full pl-4"
          name="password"
          type="password"
          required={true}
        />
        <br />
        <p className="text-red-500">{error}</p>
        <button
          className="bg-blue-500 text-white px-10 py-2 w-full"
          type="submit"
        >
          Login
        </button>
        <p>
          don't have account please{" "}
          <Link className="text-blue-800 font-bold" to="/register">
            register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
