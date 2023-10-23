import { Helmet } from "react-helmet-async";
import Aboutpic from "../../../public/assets/aboutus.jpg";
const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto bg-yellow-50 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Helmet>
        <title>SolutionMania | About us</title>
      </Helmet>
      <div className="col-span-2">
        <img className="rounded-xl" src={Aboutpic} alt="" />
      </div>
      <div className="mt-10 col-span-2">
        <h1 className="text-3xl mb-5">
          <span className="text-blue-600"> Welcome </span>to{" "}
          <span className="text-4xl font-bold text-pink-400">SolutionsMaina</span> _
        </h1>
        <p className="text-justify px-5 textarea-md ">
          Shaping Futures Through Conferences, Career Consults, and Corporate
          Seminars At SolutionsMaina, we are dedicated to empowering individuals
          and organizations to navigate the complex world of conferences, career
          development, and corporate events. We believe that knowledge is the
          cornerstone of success, and we are committed to providing innovative
          solutions that open doors to new opportunities and enhance
          professional growth.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
