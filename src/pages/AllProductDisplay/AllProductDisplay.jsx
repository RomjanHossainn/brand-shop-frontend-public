import {useParams } from "react-router-dom";
import SingleProductDisplay from "./SingleProductDisplay";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";

const AllProductDisplay = () => {
    const [products,setProducts] = useState(null);

    const brandName = useParams();

    useEffect(() => {
     
        fetch(`https://fashion-backend-nu.vercel.app/products/${brandName.name}`)
          .then((res) => res.json())
          .then((result) => setProducts(result));
      
    },[brandName])
   
    if(!products){
      return <span className=" loading loading-lg text-2xl loading-spinner absolute left-1/2 top-1/2 text-gray-800"></span>;
    }
  
    return (
      <div className="max-w-screen-xl mx-auto px-5">
        <Navbar></Navbar>
        <div>
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item max-h-[570px] relative w-full"
            >
              <img
                src="https://www.pinkvilla.com/english/images/2023/02/1767631855_untitled-design-2023-02-16t142112-484_1600*900.jpg"
                className="w-full "
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item max-h-[570px] relative w-full"
            >
              <img
                src="https://cdn.sanity.io/images/c1chvb1i/production/a07539409f9deb502dfd721c47a446d1a2f8e9be-1100x579.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item max-h-[570px] relative w-full"
            >
              <img
                src="https://bdsmartfashion.com/wp-content/uploads/2020/07/135086844_497880154517485_8675532635564470358_o.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item max-h-[570px] relative w-full">
              <img
                src="https://i.ytimg.com/vi/zZ75Bd_1MlA/maxresdefault.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid mt-6 md:grid-cols-2 gap-5 lg:grid-cols-3">
          {products?.map((product) => (
            <SingleProductDisplay
              key={product._id}
              product={product}
            ></SingleProductDisplay>
          ))}
        </div>
        <Footer></Footer>
      </div>
    );
};

export default AllProductDisplay;