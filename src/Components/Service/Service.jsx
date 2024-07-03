import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])
  return (
    <div className="grid grid-cols-2 gap-10 mb-[160px]">
      <div className="flex-1">
        <div className="flex">
          <p className="px-[25px] py-[10px] border-[#343268] border-2 rounded-full">
            Service
          </p>
        </div>
        <div className="space-y-[16px] mt-8 mb-[46px]">
          <h1 className="w-[496px] text-[46px] font-semibold">
          Empowering Health, Enriching Lives
          </h1>
          <p className="w-[670px]">
          We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
          </p>
        </div>
        <button className="btn bg-[#FFC637] text-[#020043]">
          Appointment <GoArrowUpRight className="text-xl"></GoArrowUpRight>
        </button>
      </div>
      {
        serviceData.map((data, idx)=><ServiceCard key={idx} data={data}></ServiceCard>)
      }
    </div>
  );
};

export default Service;
