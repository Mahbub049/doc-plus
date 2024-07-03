import graph from "./../../../public/card/graph.png";
import contract from "./../../../public/card/contract.png";
import star from "./../../../public/card/star.png";
import avatar1 from "./../../../public/avatars/1.png"
import avatar2 from "./../../../public/avatars/2.png"
import avatar3 from "./../../../public/avatars/3.png"
import avatar4 from "./../../../public/avatars/4.png"
import coins from "./../../../public/card/coins.png";
import call from "./../../../public/card/call.png";
const Report = () => {
  return (
    <div className="mb-[160px]">
      <div className="flex justify-center">
        <div className="text-center w-[460px]">
          <span className="text-[40px] font-semibold">
            Comprehensive Care for Every Patient
          </span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 items-end -mt-[115px]">
        <div className="border-2 rounded-[24px] p-8 h-[312px]">
          <h3 className="text-[40px] font-semibold">90%</h3>
          <p className="w-[156px] mt-2 mb-4">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img className="mx-auto w-[100px]" src={graph} alt="" />
        </div>
        <div className="border-2 rounded-[24px] p-8 h-[200px]">
          <h3 className="text-[40px] font-semibold">500+</h3>
          <p className="w-[156px] mt-2 mb-6">Board-certified doctors</p>
          <div className="flex justify-end -mt-[72px] w-full">
            <img className="" src={contract} alt="" />
          </div>
        </div>
        <div className="border-2 rounded-[24px] p-6 pt-3 h-[162px]">
          <h3 className="text-[40px] flex items-center gap-[11px] font-semibold">4.8 <img className=" h-[32px] w-[32px]" src={star} alt="" /></h3>
          <p className="w-[156px] mb-3">
          Over 20,000 Patient
          </p>
          <div className="flex">
            <img src={avatar1} alt="" />
            <img className="-ml-4" src={avatar3} alt="" />
            <img className="-ml-4" src={avatar2} alt="" />
            <img className="-ml-4" src={avatar4} alt="" />
          </div>
        </div>
        <div className="border-2 rounded-[24px] p-8 h-[200px]">
          <h3 className="text-[40px] font-semibold">$5000</h3>
          <p className="w-[156px] mt-2 mb-6">Money spend
          for poor patient</p>
          <div className="flex justify-end -mt-[72px] w-full">
            <img className="" src={coins} alt="" />
          </div>
        </div>
        <div className="border-2 rounded-[24px] p-8">
          <h3 className="text-[40px] font-semibold">50+</h3>
          <p className="w-[156px] mt-2 mb-6">
          Free lession video 
          for patient
          </p>
          <img className="mx-auto" src={call} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Report;
