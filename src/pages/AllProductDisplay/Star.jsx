
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";


const Star = ({ stars }) => {

  const numStars = parseFloat(stars);

 const ratingStars =  Array.from({length : 5},(elem,index) => {

    let number = index + 0.5;


    return (
      <span key={index}>
        {numStars >= index + 1
          ? <AiFillStar className="text-4xl text-[#38C171]"/>
          : numStars >= number
          ? <BsStarHalf className="text-[31px] text-[#38C171]"/>
          : <AiOutlineStar className="text-4xl text-[#38C171]"/>
          }
      </span>
    );


  })

  
  return <p className="flex items-center">
    {
      ratingStars  
    }
  </p>;
};

export default Star;
