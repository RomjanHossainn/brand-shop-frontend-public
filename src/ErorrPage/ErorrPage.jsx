import React from 'react';
import { Link } from 'react-router-dom';

const ErorrPage = () => {
    return (
      <div>
        <div className="grid h-screen px-4 bg-white place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </p>

            <p className="mt-4 text-gray-500 pb-5">We can not find that page.</p>

            <Link
              to="/"
              href="#"
              className="bg-[#38c171] text-lg py-3 text-white h-max rounded   gap-2 px-4"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ErorrPage;