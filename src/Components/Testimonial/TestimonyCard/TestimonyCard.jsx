import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const TestimonyCard = ({ data }) => {
  const { avatar, title, post, name, position, rating } = data;
  return (
    <div className="rounded-[16px] p-[20px]">
      <h3 className="text-[19px] font-semibold mb-3">{title}</h3>
      <p className="text-[12px] text-[#4D4C7B] mb-4">{post}</p>
      <div className="flex gap-3 items-center">
        <img className="w-[44px] h-[44px]" src={avatar} alt="" />
        <div>
          <h4>
            <span className="font-semibold">{name}</span>, {position}
          </h4>
          <Rating style={{ maxWidth: 100, }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
