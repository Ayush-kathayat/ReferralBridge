import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// importing loader
import { LineWave } from "react-loader-spinner";

import { Link } from "react-router-dom";

import "./login.css";

//! firebase imports
import { auth } from "../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeInputPassword, setActiveInputPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.username, data.password);
      console.log("User logged in successfully");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <>
      <div className="login">
        <div className="login-left">
          <form
            noValidate
            className="login-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Your input fields and submit button */}
            <h2 className="form-title">LOGIN</h2>
            <input
              className="login-input-email"
              type="email"
              id="email"
              placeholder="Email"
              {...register("username", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.username && (
              <p className="form-errors">{errors.username.message}</p>
            )}
            <div className="psswd-input">
              <input
                className="input input-pass"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                onChange={() => setActiveInputPassword(true)}
              />

              {activeInputPassword &&
                (showPassword ? (
                  <img
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                    src="./eye.svg"
                    alt="Hide password"
                  />
                ) : (
                  <img
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                    src="./eye-off.svg"
                    alt="Show password"
                  />
                ))}
            </div>
            {errors.password && (
              <p className="form-errors">{errors.password.message}</p>
            )}
            {isSubmitting ? (
              <LineWave
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            ) : (
              <button
                className="login-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            )}
            <Link to="/signup" className="auth-link">
              <p>Don't have an account?</p>
            </Link>
          </form>
        </div>
        <div className="login-right"></div>
      </div>
    </>
  );
};

export default Login;
