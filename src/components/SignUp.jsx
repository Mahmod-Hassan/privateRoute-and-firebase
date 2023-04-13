import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        // Signed in
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-300">
      <h1 className="text-5xl mb-10 text-blue-100 font-bold font-mono">
        Register
      </h1>
      <form onSubmit={handleSignUp} className="space-y-4 w-96">
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
        <button
          className="bg-blue-500 text-white px-10 py-2 w-full"
          type="submit"
        >
          Sign Up
        </button>
        <p>
          already have an account please{" "}
          <Link className="text-blue-800 font-bold" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
