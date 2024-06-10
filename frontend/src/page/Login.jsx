import React from "react";
import loginIcon from "../assest/signin.gif";
const Login = () => {
  return (
    <section id="login">
      <div className="mx-auto container px-7">
        <div className="bg-white p-2 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="logoin icon" />
          </div>

          <form action="">
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
