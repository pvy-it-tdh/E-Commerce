import React, { useContext, useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import Context from "../context";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataAPI = await dataResponse.json();
    if (dataAPI.success) {
      alert(data.message);
      navigate("/");
      fetchUserDetails();
    }
    if (dataAPI.error) {
      alert(data.message);
    }
  };
  return (
    <section id="login">
      <div className="mx-auto container px-7">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
            <img src={loginIcon} alt="logoin icon" />
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Enter email"
                  onChange={handleOnChange}
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={handleOnChange}
                  value={data.password}
                  name="password"
                  placeholder="Enter password"
                  className="h-full w-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className="text-red-500 hover:text-red-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
