import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleLogin, githubLogin, updateUserProfile } = useContext(Authcontext);
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  // console.log(createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    // grab all values
    const name = e.target.name.value;
    const profilePhoto = e.target.profilePhoto.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (password.length < 6) {
      return toast.error("password is less then 6 charecter");
    }
    else if (!/^(?=.*[A-Z]).+$/.test(password)) {
      return toast.error("Don't have a capital letter");
    } 
    else {
      if (!/^(?=.*[@#$%]).*$/.test(password)) {
        toast.error("Don't have a special charecter");
      }
    }

    createUser(email, password)
      .then( () => {
       toast.success("Registration successful")
       updateUserProfile(name, profilePhoto)
        return navigate('/login')
      })
      .catch((error) => {
        toast.error(error.message);
      });
    e.target.reset();
  };

  const handleSocialLogin = (media) => {
    media()
    .then( ()=> {
      toast.success('user logged in successfully');
      navigate('/')
    })
    .catch(error => {
      toast.error(error.message)
    })
  }


  return (
    <div className="hero min-h-screen bg-base-200 mb-10 rounded-xl">
      <div className="card flex-shrink-0 w-[350px] md:w-[500px] shadow-2xl bg-base-100">
        <h3 className="text-4xl font-bold text-center mt-3">
          Registration here
        </h3>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Photo</span>
            </label>
            <input
              type="text"
              name="profilePhoto"
              placeholder="Your profile picture link"
              className="input input-bordered"
              required
            />
          </div>

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
            <div className="flex justify-between items-center input input-bordered">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="w-full"
                required
              />

              <span onClick={ () => setShowPassword(!showPassword)} className="text-xl cursor-pointer">
                {
                  showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                }
              </span>
            </div>
            <label className="label">
              <div className="flex gap-3 justify-center items-center">
                <input type="checkbox" required />
                <Link className="label-text-alt link link-hover">
                  Terms and conditions
                </Link>
              </div>
              <Link to={"/login"} className="text-green-600 text-base">
                Login
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="flex items-center justify-center w-full text-md">
            <div className="divider">---------Continue with---------</div>
          </div>
          <div className="text-3xl flex justify-center items-center gap-5 cursor-pointer">
            <span onClick={()=> handleSocialLogin(googleLogin) }>
              <FaGoogle></FaGoogle>
            </span>
            <span onClick={()=> handleSocialLogin(githubLogin)}>
              <FaGithub></FaGithub>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
