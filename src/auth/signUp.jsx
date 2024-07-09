import { useForm } from "react-hook-form";

import { LineWave } from "react-loader-spinner";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./signUp.css";

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

  const onSubmit = async (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="register">
      <div className="register-left"></div>

      <div className="register-right">
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
                    value: 4,
                    message: "Password must be at least 4 characters",
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
    </div>
  );
};

export default SignUP;
