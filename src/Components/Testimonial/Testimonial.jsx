import { useEffect, useState } from "react";
import TestimonyCard from "./TestimonyCard/TestimonyCard";

const Testimonial = () => {
    const [testimony, setTestimony] = useState([]);
    useEffect(()=>{
        fetch('/testimonial.json')
        .then(res=>res.json())
        .then(data=>setTestimony(data))
    },[])
  return (
    <div className="mb-[160px]">
      <div>
        <div className="flex">
          <p className="px-[25px] py-[10px] border-[#343268] border-2 rounded-full">
          Testimonial
          </p>
        </div>
        <div className="space-y-[16px] mt-8 mb-[30px]">
          <h1 className=" text-[46px] font-semibold">
          What they say about us
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {
            testimony.map((data, idx)=><TestimonyCard key={idx} data={data}></TestimonyCard>)
        }
      </div>
    </div>
  );
};

export default Testimonial;
