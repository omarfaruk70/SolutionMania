import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServiceCard = ({ service }) => {
  const {img, name, price, description, id} = service;
  useEffect(()=>{
    AOS.init({duration: 3000})
},[])
  return (
    <div className='overflow-hidden'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img data-aos='flip-right'
            src={img}
            alt="service card"
          />
        </figure>
        <div data-aos='fade-left' className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
            {
              description?.length > 150 ? <p>{description.slice(0,150)} <Link to={`/serviceDetails/${id}`} className="btn btn-primary my-2 after:content-['_↗']">See details</Link></p>
              : <p>{description}</p>
            }
          <div className="card-actions justify-end">
          <p className='text-2xl font-bold'>Price: {price} $</p>
  
          </div>
        </div>
      </div>
    </div>
  );
};


ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}
export default ServiceCard;
