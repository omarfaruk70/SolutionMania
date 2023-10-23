import { useEffect, useState } from "react";
import Work from "./work";
const OurWork = () => {
    const [works, setWorks] = useState([])
    useEffect(()=> {
        fetch('recentworks.json')
        .then(res => res.json())
        .then(data => setWorks(data))
    },[])
    return (
        <div className="mt-10">
            <h2 className="text-5xl text-center mb-8">What with we Move on...</h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
           {
               works.map(work => <Work key={work.id}  work={work}></Work>)
            }
            </div>
        </div>
    );
};

export default OurWork;