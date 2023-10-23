import { Helmet } from "react-helmet-async";

const consultant = "https://i.ibb.co/qyWV4fs/speaker.jpg";
const Consult = () => {
  return (
    <div className="mb-10">
        <Helmet>
            <title>SolutionMania | Consulte</title>
        </Helmet>
      <h3 className="text-center text-2xl font-bold">
        Your Bareer!! Our guidlines <br />
        talk with the consultant...
      </h3>
      <div className="flex flex-col gap-8 md:flex-row md:gap-20 md:max-w-7xl mx-auto mt-10">
        <img className="w-fit md:w-1/2 rounded-lg" src={consultant} alt="" />
        <div className="px-4 w-full">
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
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered"
              name="name"
              required
            />
            <label className="label">
              <span className="label-text">Your messages</span>
            </label>
            <textarea
              name="your message"
              placeholder="Write here your description"
              className="shadow-md ui-autocomplete-input"
              id="message"
              cols="30"
              rows="10"
              autoComplete="off"
              role="textbox"
              aria-autocomplete="list"
              aria-haspopup="true"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
