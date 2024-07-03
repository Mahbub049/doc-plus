import { GoArrowUpRight } from "react-icons/go";
import twodoc from "./../../../public/images/twodoc.png"

const WhoWeAre = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex">
          <p className="px-[25px] py-[10px] border-[#343268] border-2 rounded-full">
            Who we are
          </p>
        </div>
        <div className="space-y-[16px] mt-8 mb-[46px]">
            <h1 className="w-[396px] text-[46px] font-semibold">We Help To Get Soultions</h1>
            <p className="w-[670px]">
            We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
            </p>
        </div>
        <button className="btn bg-[#FFC637] text-[#020043]">Learn more <GoArrowUpRight className='text-xl'></GoArrowUpRight></button>
      </div>
      <div className="relative">
        <img className="z-1 w-[600px]" src={twodoc} alt="" />
        <div className="bg-[#343268] absolute z-10 py-[47px] px-[30px] rounded-[32px] w-[395px] -mt-[180px] -ml-[96px]">
            <h3 className="text-[26px] font-medium text-white mb-4">Our mission is simple</h3>
            <p className="text-md text-white w-[347px]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
