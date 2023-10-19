import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)
    const handleLogout = () => {
     user && logOut()
      .then(() => {
        
      })
      .catch(eorr => {
      })
    }

    const navLinks = (
      <>
        <NavLink to="/">
          <li className="text-[17px]">Home</li>
        </NavLink>

        <NavLink to="/addproduct">
          <li className="text-[17px]">Add Product</li>
        </NavLink>

        <NavLink to="/mycart">
          <li className="text-[17px]">My Cart</li>
        </NavLink>

        <NavLink to="/login">
          <li className="text-[17px]">Login</li>
        </NavLink>

        <NavLink to="/register">
          <li className="text-[17px]">Register</li>
        </NavLink>
      </>
    );


    return (
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto px-5">
        <div className="navbar-start">
          <a className="normal-case text-xl cursor-pointer">
            <h1 className="text-2xl">NAGZHL</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user
                      ? user.photoURL
                      : "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <p className="z-50 text-lg ms-2 ps-1 mb-2 capitalize">
                {user ? user.displayName : ""}
              </p>

              <li onClick={handleLogout}>
                {
                  user ? <p>Logout</p> : <Link to="/login">Sign In</Link>
                }
              </li>
            </ul>
          </div>
          <div className="dropdown relative">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52 absolute right-0 space-y-3  "
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;