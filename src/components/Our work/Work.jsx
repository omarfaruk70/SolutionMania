import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
const Work = ({ work }) => {
  const { event_img, event_name, held_date, short_description } = work;
  useEffect(()=>{
    Aos.init({duration: 3000})
},[])
  return (
    <div className="bg-base-100 shadow-xl overflow-hidden rounded-2xl">
      <div>
        <figure className="mt-10">
          <img data-aos='zoom-out' className="rounded-xl" src={event_img} alt="event logo" />
        </figure>
      </div>
      <div data-aos='fade-down' className="card-body">
        <h2 className="card-title font-extrabold">{event_name}</h2>
        <p className="font-bold">{short_description}</p>
        <p className="font-bold">{held_date}</p>
      </div>
    </div>
  );
};

Work.propTypes = {
  work: PropTypes.object.isRequired,
};
export default Work;
