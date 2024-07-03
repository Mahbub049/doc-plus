import { GoArrowUpRight } from "react-icons/go";

const AppointmentBanner = () => {
  return (
    <div className="bg-[linear-gradient(90deg,rgba(2,0,67,1),rgba(2,0,67,0.50)),url(https://i.ibb.co/db5fFNq/appointment.png)] bg-no-repeat bg-cover h-[570px] rounded-[48px] my-[40px] flex items-center pl-[60px] relative mb-[160px]">
        <div className="absolute flex justify-end w-full h-full">
            <img src="https://i.ibb.co/RT0kzhH/logolight.png" className="w-[124px] mt-[80px] mr-[120px] h-[33px]" alt="" />
        </div>
      <div className="">
        <h3 className="text-[40px] w-[350px] font-semibold text-white">
          Get Your First Appointment at 50% Off!
        </h3>
        <div>
          <a className="btn btn-outline rounded-[12px] bg-[#FFC637] mt-6 mr-[22px]">
            Appointment <GoArrowUpRight className="text-xl"></GoArrowUpRight>{" "}
          </a>
          <a className="btn btn-outline rounded-[12px] border-white text-white mt-6">
            Learn More <GoArrowUpRight className="text-xl"></GoArrowUpRight>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
