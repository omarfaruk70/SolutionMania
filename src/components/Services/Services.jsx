import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h2 className="text-center font-bold mt-10 mb-12 text-3xl">Our services</h2>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
           services?.map(service =><ServiceCard key={service?.id} service={service}></ServiceCard>)
          }
          </div>
        </div>
    );
};

export default Services;