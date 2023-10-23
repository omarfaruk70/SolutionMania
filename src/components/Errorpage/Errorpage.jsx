import Navbar from "../Navbar/Navbar";

const Errorpage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl h-[600px] text-center mx-auto flex flex-col justify-center items-center ">
            <h1 className="text-5xl">Page not found | 404 </h1>
            <h3 className="text-5xl mt-5"> ≡(▔﹏▔)≡</h3>
            </div>
        </div>
    );
};

export default Errorpage;