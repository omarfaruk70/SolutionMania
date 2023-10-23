import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const {loginUser} = useContext(Authcontext)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
    .then( () => {
      toast.success('User login successful')
      navigate(location?.state ? location.state : '/' );
    })
  
    .catch(error => {
      console.log(error.message);
     return toast.error(error.message)
    })


    e.target.reset();
  }

  return (
    <div className="hero min-h-[700px]  bg-base-200 mb-10 rounded-xl">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <h2 className="text-center text-3xl py-2">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div  className="flex justify-between items-center input input-bordered" >
           <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="w-full"
              required
            />
         <span className="text-xl cursor-pointer" onClick={()=> setShowPassword(!showPassword)}>
          {
            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
          }
         </span>
            </div>
            <label className="label">
              <div className="flex gap-3 justify-center items-center">
                <input type="checkbox" required />
                <a href="#" className="label-text-alt link link-hover">
                  Terms and conditions
                </a>
              </div>
              <Link  className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <div className="flex items-center justify-center w-full text-md">
            <p>Do not have an account ? </p>
            <Link to={'/register'} className="text-pink-600 text-base">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
