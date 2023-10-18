import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="bg-grey-lighter py-6 min-h-screen flex flex-col">
          <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form>
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
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
                  placeholder="Confirm Password"
                />

                

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
      </div>
    );
};

export default Register;