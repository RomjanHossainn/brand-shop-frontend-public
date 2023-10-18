import { FaArrowRightLong } from "react-icons/fa6";
const SingleProductDisplay = ({ product }) => {
  console.log(product);
  const { _id, name, price, image,brand_name } = product || {};
  return (
    <div className="mt-5 lg:mt-0">
      <div>
        <img src={image} className="rounded-md w-full" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-3">
          <h2 className="capitalize">{brand_name}</h2>
          <h2 className="font-semibold  capitalize">{name}</h2>
          <h2>{price}$</h2>
        </div>
        <button className="bg-[#38c171] text-white h-max rounded flex items-center gap-2 px-3 py-1">
          Details<FaArrowRightLong></FaArrowRightLong>
        </button>
      </div>
    </div>
  );
};

export default SingleProductDisplay;
