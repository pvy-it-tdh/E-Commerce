import { GrSearch } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state?.user);
  console.log("user-header", user);
  return (
    <header className="h-16 shadow-md bg-slate-950">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="text-white">
          <Link to="/">Logo</Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="search product here.."
            className="w-full outline-none pl-2"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer text-white">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-10 h-10 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaCircleUser />
            )}
          </div>

          <div className="text-2xl relative">
            <span className="text-white">
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w- p-1 rounded-full flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link
              to={"/login"}
              className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
