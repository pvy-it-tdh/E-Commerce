import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTobase64 from "../helper/ImageTobase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]; // Corrected to 'files'
    if (file) {
      const imagePic = await imageTobase64(file);
      setData((preve) => {
        return {
          ...preve,
          profilePic: imagePic,
        };
      });
    } else {
      console.error("No file selected");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="signup">
      <div className="mx-auto container px-7">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcon} alt="logoin icon" />
            </div>
            <form action="">
              <label>
                <div className="text-xs bg-opacity-50 bg-slate-200 py-4 text-center absolute w-full bottom-0">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name: </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  placeholder="Enter your name"
                  onChange={handleOnChange}
                  required
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-200 p-2">
                <input
                  required
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
                  required
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div>
              <label>Confirm Password : </label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  onChange={handleOnChange}
                  required
                  value={data.confirmpassword}
                  name="confirmpassword"
                  placeholder="Enter Confirm Password"
                  className="h-full w-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6">
              Sign Up
            </button>
          </form>
          <p className="my-5">
            Already have account?{" "}
            <Link
              to={"/login"}
              className="text-red-500 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
