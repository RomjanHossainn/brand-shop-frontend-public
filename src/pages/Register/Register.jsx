import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const registerToHome = useNavigate()

  const [alert,setAlert] = useState('')

  const handleRegister = (e) => {
      e.preventDefault()

      const form = e.target;

      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const imageURL = form.imageURL.value;


      if (!name && !email && !password && !imageURL) {
        return setAlert("All Feild Are Requard");
      } else if (!name) {
        return setAlert("Please enter your name");
      } else if (!email) {
        return setAlert("Please enter your email");
      } else if (!password) {
        return setAlert("Please enter your password");
      } else if (!imageURL) {
        return setAlert("Please enter your imageURL");
      }

      if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
        return setAlert(
          "please provied  a valid password example -- min 6 characters -- special charactar -- capital letter "
        );
      }else{
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            updateProfile(user, {
              displayName: name,
              photoURL: imageURL,
            })
              .then(() => {

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
                form.reset()
                registerToHome('/')
              })
              .catch((error) => {
              });
          })
          .catch((erorr) => {

          });
      }




      
  }


    return (
      <div>
        <Navbar></Navbar>
        <div className="bg-grey-lighter py-6 min-h-screen flex flex-col">
          <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form onSubmit={handleRegister}>
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-2xl font-bold text-center">Sign up</h1>
                
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="name"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="imageURL"
                  placeholder="ImageURL"
                />

                <p className="text-pink-500">{alert}</p>
                

                <button
                  type="submit"
                  className="w-full bg-[#38C172] text-center mt-5 py-2 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Create Account
                </button>

                <div className="text-center text-sm text-grey-dark mt-4">
                  By signing up, you agree to the
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </form>
            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link
                to="/login"
                className="no-underline text-[#38C172] font-bold border-b border-blue text-blue"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Register;