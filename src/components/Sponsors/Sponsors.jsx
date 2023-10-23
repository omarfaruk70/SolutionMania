import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Sponsors = () => {
    const [sponsors, setSponsors]= useState([])
    useEffect(()=> {
        fetch('sponsors.json')
        .then(res => res.json())
        .then(data => setSponsors(data))
    },[])
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div >
            <h2 className="text-5xl mt-10 mb-10 text-center">Our Respectable Sponsors...</h2>
            <div className="flex overflow-hidden flex-row gap-5 md:gap-x-8 items-center">
          {
              sponsors.map((sponsors, idx) => <div key={idx}>
                <img data-aos='fade-up' src={sponsors.img} className=" lg:w-[400px]  rounded-3xl" alt="sponsor img" />
            </div>)
          }
          </div>
        </div>
    );
};

export default Sponsors;