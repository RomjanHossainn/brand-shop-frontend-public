import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import SingleCategory from "../../components/SingleCategory/SingleCategory";

const Home = () => {
  const loadedCategory = useLoaderData();
    return (
      <div>
        <div className="max-w-screen-xl mx-auto px-5">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
        <div className="max-w-screen-xl mx-auto px-5">
          <h1 className="text-center text-3xl mb-5">Popolar Brands Shop</h1>
          <p></p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
            {
              loadedCategory?.map(category => <SingleCategory key={category.id} category = {category}></SingleCategory>)
            }
          </div>
        </div>
      </div>
    );
};

export default Home;