import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const specificService = services.find((service) => service.id == id);
  const { description, img, name, price } = specificService;
  return (
    <div>
      <Helmet>
        <title>SolutinMania | service {id}</title>
      </Helmet>
      <div className="card max-w-4xl mx-auto mb-10 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="service image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge font-bold badge-outline">price: {price} $</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
