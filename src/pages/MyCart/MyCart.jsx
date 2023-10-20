import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const MyCart = () => {

    const {user} = useContext(AuthContext)

    const [userOrder,setUserOrder] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/addtocartproduct/${user.email}`)
        .then(res => res.json())
        .then(result => setUserOrder(result))
    },[user.email])

    

    if(!userOrder){
        return (
          <div>
            <span className=" loading loading-lg text-2xl loading-spinner absolute left-1/2 top-1/2 text-gray-800"></span>
          </div>
        );
    }

    


    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/deleteproduct/${_id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount > 0){
              
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(
                      "Deleted!",
                      "Your order has been deleted.",
                      "success"
                      
                    );
                    const deletedProduct = userOrder.filter(
                      (order) => order._id !== _id
                    );
                    setUserOrder(deletedProduct);
                  }
                });
            }
        })
    }
    
    
    return (
      <div>
        <Navbar></Navbar>
        {
          userOrder.length === 0 ? <h1 className="text-center text-3xl py-40">
          {userOrder.length === 0 ? "No order avalable" : ""}
        </h1> : ''
        }
        <div className="max-w-screen-xl mx-auto px-5 py-20">
          <table className="table-auto table">
            <thead>
              {
                userOrder.length > 0 ? <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand Name</th>
                <th>Price</th>
                <th>Order Email</th>
              </tr> : ''
              }
            </thead>
            <tbody>
              {userOrder?.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>
                      <img src={user.image} className="w-24" alt="" />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.brand_name}</td>
                    <td>{user.price}$</td>
                    <td>{user.userEmail}</td>
                    <td>
                      <AiFillDelete
                        onClick={() => handleDelete(user._id)}
                        className="text-5xl rounded-full hover:bg-red-500/30 hover:text-red-600 cursor-pointer text-red-500 border p-2"
                      ></AiFillDelete>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MyCart;