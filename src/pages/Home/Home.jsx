
import Banner from "../../Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import SingleCategory from "../../components/SingleCategory/SingleCategory";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import Service from "../../Service/Service";

const Home = () => {
  // const loadedCategory = useLoaderData();

    const [categorys,setCategoryes] = useState(null);

    useEffect(()=> {
      fetch("https://fashion-backend-nu.vercel.app/categoryes")
        .then((res) => res.json())
        .then((result) => setCategoryes(result));
    },[])


    if(!categorys){
      return (
        <span className="loading loading-lg absolute top-1/2 left-1/2 loading-spinner text-gray-700"></span>
      );
    }

    return (
      <div>
        <div className="max-w-screen-xl mx-auto px-5">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
        <div className="max-w-screen-xl mx-auto px-5">
          <h1 className="text-center text-3xl mb-5 text-[#374151]">
            Popolar Brands Shop
          </h1>
          <p></p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
            {categorys?.map((category) => (
              <SingleCategory
                key={category.id}
                category={category}
              ></SingleCategory>
            ))}
          </div>
        </div>
        <div>
          <Service></Service>
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Home;