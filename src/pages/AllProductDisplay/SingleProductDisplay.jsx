import { FaArrowRightLong } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
const SingleProductDisplay = ({ product }) => {
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
        <div className="flex items-center gap-3">
          <Link to={`/details/${_id}`} className="bg-[#38c171] text-sm text-white h-max rounded flex items-center gap-2 px-2 py-1">
            Details<FaArrowRightLong></FaArrowRightLong>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="bg-[#38c171] text-sm text-white h-max rounded flex items-center gap-2 px-2 py-1">
              Update<RxUpdate></RxUpdate>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDisplay;
