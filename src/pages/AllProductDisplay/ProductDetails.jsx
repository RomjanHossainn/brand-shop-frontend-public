import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Star from "./Star";

const ProductDetails = () => {

    const params = useParams()
    const {user} = useContext(AuthContext)

    const [detailProduct,setDetailProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/product/${params.id}`)
          .then((res) => res.json())
          .then((result) => setDetailProduct(result));
    },[params.id])


    if(!detailProduct){
        return (
          <span className=" loading loading-lg text-2xl loading-spinner absolute left-1/2 top-1/2 text-gray-800"></span>
        );
    }

    
    const { _id, name, price, image, brand_name, rating, short_description,type } =
      detailProduct || {};

      const userEmail = user.email;

      

      const handleAddToCart = () => {
          const addToCartInfo = {
            name,
            price,
            image,
            brand_name,
            rating,
            short_description,
            type,
            userEmail,
            
          };


          fetch(`http://localhost:5000/addtocartproduct`,{
            method:'POST',
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify(addToCartInfo)
          })
          .then(res=> res.json())
          .then(result => {
            if(result.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Add To card Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
            }
          })

      }




    return (
      <div>
        <Navbar></Navbar>
        <div className="max-w-screen-xl mx-auto py-8 px-5">
          <div className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[450px]  rounded-lg bg-gray-300 dark:bg-gray-700 mb-6">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex items-center -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <button onClick={handleAddToCart} className="w-full bg-[#38c171] text-white py-2 px-4 rounded-md font-bold  dark:hover:bg-gray-700">
                        Add to Cart
                      </button>
                    </div>
                    <div className="w-1/2 px-2">
                      <Link to={-1} className="w-full bg-gray-400/30  text-gray-800  py-3 px-4 rounded-md font-bold ">
                        Back to previous page
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4 space-y-5">
                  <h2 className="text-2xl font-bold text-gray-800  mb-2">
                    Product Name
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {name}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {` ${price}`}$
                      </span>
                    </div>
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Type:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {` ${type} `}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Brand Name :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {` ${brand_name} `}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Color:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                    </span>
                    <span className="text-gray-600  dark:text-gray-300">
                      <Star stars={rating}></Star>
                    </span>
                  </div>
                  <div className="mb-4 mt-3">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Size:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        S
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        M
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        L
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XL
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XXL
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 ">
                      Product Description:
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      {short_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default ProductDetails;