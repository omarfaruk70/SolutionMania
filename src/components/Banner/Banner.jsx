import { Link } from "react-router-dom";
import bannner from "../../../public/assets/community.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="hero min-h-[500px] bg-gradient-to-r from-violet-500 to-fuchsia-300 rounded-lg">
      <div className="hero-content overflow-hidden  flex-col lg:flex-row">
        <div className="text-white">
          <div data-aos="fade-right">
            <h1 className="text-2xl md:text-5xl font-bold">
              Mastering the Art of Engagement and
              <span className="ml-3 rounded-lg bg-gradient-to-r from-yellow-500 via-red-300 to-purple-500">
                Impact
              </span>
            </h1>
            <p className="py-6">
              In the world of seminars and conferences,
              <br /> knowledge is the currency, and
              <br />
              networking is the key to the vault
            </p>
          </div>
          <div data-aos="fade-up">
            <Link to={"/consult"} className="btn btn-primary">
              Get Started
              <span className="text-xl font-bold after:content-['_↗']"></span>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src={bannner}
            className="md:w-full md:h-[400px] rounded-3xl bg-origin-border"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
