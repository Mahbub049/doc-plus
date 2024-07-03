import { GoArrowUpRight } from "react-icons/go";

const ServiceCard = ({ data }) => {
  const { image, heading, description } = data;
  console.log(image);
  return (
    <div>
      <div className="flex-1">
        <img className="rounded-[30px] w-[724px] object-cover h-[394px]" src={image} alt="" />
        <div className="ml-[20px] -mt-[220px]">
          <div className="bg-[#020043]  opacity-[0.6] py-[47px] px-[30px] rounded-[32px] w-[321px]">
            <h3 className="text-[20px] font-semibold text-white mb-4">
              {heading}
            </h3>
            <div>
              <p className="text-[12px] text-white w-[219px]">{description}</p>
              <div className="flex justify-end -mt-10 -mr-3">
                <button className="btn bg-[#FFC637] border-0 text-white rounded-full">
                  <GoArrowUpRight className="text-xl"></GoArrowUpRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
