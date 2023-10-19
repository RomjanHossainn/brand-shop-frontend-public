import { useParams} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Update = () => {

    const params = useParams()
    const [singleProduct,setSingleProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${params.id}`)
        .then(res => res.json())
        .then(result => setSingleProduct(result))
    },[params.id])

    if(!singleProduct){
        return (
          <span className=" loading loading-lg text-2xl loading-spinner absolute left-1/2 top-1/2 text-gray-800"></span>
        );
    }

    const {
      _id,
      name,
      price,
      image,
      brand_name,
      type,
      shortDescription,
      rating,
    } = singleProduct || {};



    const handleUpdateProdcut = e =>{
      e.preventDefault();
      const form = e.target;

      

      const updateName = form.name.value;
      const update_brand_name = form.brandName.value;
      const updateType = form.type.value;
      const updatePrice = form.price.value;
      const updateRating = form.rating.value;
      const updateImage = form.image.value;
      const updateShortDescription = form.shortDescription.value;

      const productInfo = {
        updateName,
        update_brand_name,
        updateType,
        updatePrice,
        updateRating,
        updateImage,
        updateShortDescription,
      };

      
      fetch(`http://localhost:5000/updateProduct/${_id}`,{
        method : 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(productInfo)
      })

      .then(res => res.json())
      .then(result => {
        if(result.modifiedCount > 0){
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Update Successfully",
          });
        }
      })



    }



    return (
      <div>
        <Navbar></Navbar>
        <section className="max-w-4xl mt-20  p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold pb-5 text-gray-700 capitalize dark:text-white">
            Update Your Product
          </h2>

          <form onSubmit={handleUpdateProdcut}>
            <div className=" grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-700 dark:text-gray-200">Name</label>
                <input
                  id="Name"
                  placeholder="Name"
                  defaultValue={name}
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Brand Name
                </label>
                <input
                  id=""
                  name="brandName"
                  defaultValue={brand_name}
                  type="text"
                  placeholder="Brand Name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">Type</label>
                <input
                  id=""
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Type"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Price
                </label>
                <input
                  id=""
                  type="text"
                  defaultValue={price}
                  name="price"
                  placeholder="Price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className="row-span-2">
                <label className="text-gray-700 dark:text-gray-200">
                  Short Description
                </label>
                <textarea
                  id=""
                  rows="4"
                  type=""
                  defaultValue={shortDescription}

                  name="shortDescription"
                  placeholder="Short Description"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Rating
                </label>

                <input
                  id=""
                  name="rating"
                  defaultValue={rating}
                  type="text"
                  placeholder="Rating"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className="md:col-span-2 mt-">
                <label className="text-gray-700 dark:text-gray-200">
                  Image
                </label>
                <input
                  id=""

                  type="text"
                  defaultValue={image}
                  name="image"
                  placeholder="Image URL"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update Product
              </button>
            </div>
          </form>
        </section>
        <Footer></Footer>
      </div>
    );
};

export default Update;