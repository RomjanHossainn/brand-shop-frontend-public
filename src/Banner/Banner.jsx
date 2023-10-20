
const Banner = () => {
    return (
      <div className=" max-w-screen-xl lg:flex space-y-8 lg:space-y-0 justify-between items-center mx-auto px-8 py-20">
        <div className="space-y-7">
          <h2 className="text-5xl">
            {" "}
            Most Popular clothing <br /> brands in world
          </h2>
          <p>
            Popularity is the % of people who have a positive opinion of a{" "}
            <br />
            clothing & footwear brand.
          </p>
          <button className="bg-[#38c171] px-5 mt-6 text-white rounded  py-3 ">Find out more</button>
        </div>
        <div>
          <img
            src="https://i.ibb.co/jwvtcM1/Emporio-Armani-removebg-preview.png"
            className=" w-full max-w-2xl rounded-md"
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;