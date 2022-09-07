import React, { useEffect, useRef, useState } from "react";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import Loading  from "../Loading/Loading";
import useToken from "../../../Hooks/useToken";


const Login = () => {
    const [email, setEmail] = useState("");
    const [auth] = useAuth();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, ResetSending, ResetError] =
        useSendPasswordResetEmail(auth);
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        setEmail(data.email);
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    };
 

    const [token] = useToken(user || gUser);

    let errorElement;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
      if (token) {
        navigate(from, { replace: true });
      }
    }, [token, from, navigate]);
    if (error || gError || ResetError) {
      errorElement = (
        <p className="text-red-500 mb-5">
          <small>
            {error?.message || gError?.message || ResetError?.message}
          </small>
        </p>
      );
    }
    if (loading || gLoading || ResetSending) {
      return <Loading></Loading>;
    }
    const resetEmail = async (email) => {
      await sendPasswordResetEmail(email);
      if (email) {
        toast("Sent email");
      }
    };

    return (
        <section className="my-20 flex h-3/4 justify-center items-center">
            <div className="card card-compact w-96 shadow-xl">
                <div className="card-body w-full">
                    <h2 className="card-title  justify-center mb-10 text-primary">
                        Please Login
                    </h2>
                    <div className="card-actions justify-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-80 max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="input text-black input-bordered w-full"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email Required",
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Enter a valid Email",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="form-control w-80 max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Your password"
                                    className="input text-black input-bordered w-full"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "password Required",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Must Be enter 6 characters or Longer",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.password.message}
                                        </span>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            {errorElement}
                            <input
                                className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
                                type="submit"
                                value="Login"
                            />
                        </form>
                        <p className="text-xl text-primary text-center">
                            <small>
                                <span className="text-black font-bold"> You hava No account ?</span>
                                <Link to="/register" className="font-bold text-primary ml-2">
                                    Please Register
                                </Link>
                            </small>
                        </p>
                        <button
                            className="text-xl text-primary text-center"
                            onClick={() => resetEmail(email)}
                        >
                            <small className="font-bold text-primary">Reset Your Password?</small>
                        </button>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-primary  text-white font-bold text-xxl hover:bg-white hover:text-black"
                            >
                                Continue With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

