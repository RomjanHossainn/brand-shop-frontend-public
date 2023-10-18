import { useLoaderData } from "react-router-dom";
import SingleProductDisplay from "./SingleProductDisplay";
import Navbar from "../../components/Navbar/Navbar";

const AllProductDisplay = () => {
    const productLoaded = useLoaderData();
    
    return (
        <div className="max-w-screen-xl mx-auto px-5">
            <Navbar></Navbar>
            <div>

            </div>
            <div className="grid md:grid-cols-3 gap-5 lg:grid-cols-4">
                {
                    productLoaded?.map(product => <SingleProductDisplay key={product._id} product ={product}></SingleProductDisplay>)
                }
            </div>
        </div>
    );
};

export default AllProductDisplay;