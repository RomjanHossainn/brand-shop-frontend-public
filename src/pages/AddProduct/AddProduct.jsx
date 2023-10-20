import Footer from "../../Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Swal from "sweetalert2";

const AddProduct = () => {


  const handleAddProduct = e =>{
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand_name = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const shortDescription = form.shortDescription.value;

    const productInfo = {
      name,
      brand_name,
      type,
      price,
      rating,
      image,
      shortDescription
    }


    try{
      fetch('http://localhost:5000/products',{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(productInfo)
      })
      .then(res => res.json())
      .then(result => {
        if(result.insertedId){
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }else if(result.alreadyAddeded){
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Similer Product already avalable or product already added ",
            
          });
        }
      })
    }catch(erorr){
      console.log(erorr)
    }
    


  }


    return (
      <div className="max-w-screen-xl mx-auto px-5">
        <Navbar></Navbar>
        <section className="max-w-4xl mt-20  p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Add Your Product
          </h2>

          <form onSubmit={handleAddProduct}>
            <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200">Name</label>
                <input
                  id="Name"
                  placeholder="Name"
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
                  name="price"
                  placeholder="Price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Short Description
                </label>
                <textarea
                  id=""
                  type="text"
                  rows="3"
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
                  type="text"
                  placeholder="Rating"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-gray-700 dark:text-gray-200">
                  Image
                </label>
                <input
                  id=""
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white  duration-300 transform bg-[#38c171] rounded-md  focus:outline-none ">
                Add Product
              </button>
            </div>
          </form>
        </section>
        <Footer></Footer>
      </div>
    );
};

export default AddProduct;