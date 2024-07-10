import { useForm } from "react-hook-form";

import { LineWave } from "react-loader-spinner";
import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./signUp.css";

//! importing context
import { AuthContext } from "../authContext";

// import { register as registerAPI } from "..//..//utils/api/api"; //! there was a naming conflict

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeInputPassword, setActiveInputPassword] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
    reset,
  } = useForm({});

  //! consuming the context

  const context = useContext(AuthContext);

  const { signup } = context;

  const onSubmit = async (data) => {
    signup(data);
    reset();
  };

  return (
    <div className="register">
      <div className="register-left"></div>

      <div className="register-right">
        <div className="logo-title lts">
          <Link to="/">
            <h1 className="app-name">ReferralBridge.</h1>
          </Link>
        </div>
        <div className="form-wrapper">
          <form noValidate className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-title">SIGN-UP</h2>
            <input
              className="input input-name"
              type="text"
              placeholder="Username"
              {...register("name", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="form-errors">{errors.name.message}</p>
            )}
            <input
              className="input input-email"
              type="email"
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
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
                className="btn submit-btn "
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
            )}

            <Link to="/login" className="auth-link">
              <p>Already have an account?</p>
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default SignUP;
