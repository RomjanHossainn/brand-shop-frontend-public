import { Link } from "react-router-dom";


const SingleCategory = ({category}) => {
    const {image,name} = category;
    
    return (
      <Link to={`/products/${name}`}>
        <div className="text-center border p-5 cursor-pointer rounded-md">
          <div className="flex justify-center">
            <img src={image} className="max-h-44" alt="" />
          </div>
          <div>
            <p className="capitalize text-xl">{name}</p>
          </div>
        </div>
      </Link>
    );
};

export default SingleCategory;