import { Link, NavLink } from "react-router-dom";
import ProfilePicture from '/user.png';
import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProvider";
import { auth } from "../../../firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
  const {user, logoutUser} = useContext(Authcontext);
  const handleLogout = () => {
    logoutUser(auth)
    .then(result => {
      console.log(result);
      return toast.success('Logout successful')
    })
    .catch(error => {
      console.log(error.message);
      return toast.error(error.message)
    })
  }

 
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/aboutus"}
          className={({ isActive, isPending }) =>
            isActive ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : isPending ? "pending" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/consult"}
          className={({ isActive, isPending }) =>
            isActive ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" : isPending ? "pending" : ""
          }
        >
          Get consulte
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">SolutionsX</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navLink}</ul>
      </div>
      <div className="navbar-end">
       <div className="flex flex-row gap-2 md:gap-5 justify-center items-center">
      {
        user?.displayName  ? <h2 className="text-xs md:text-xl font-bold">{user.displayName}</h2> : ''
      }
      {
        user?.photoURL ?  <img className="w-12 rounded-full" src={user.photoURL} alt="" /> :
       <img className="w-12 rounded-full" src={ProfilePicture} alt="" />
      }
       {
        user?.email ? <Link onClick={handleLogout}  className="btn">Logout</Link> 
        :
        <Link to={'/login'} className="btn">Login</Link>
       }
        
       </div>
      </div>
    </div>
  );
};

export default Navbar;
