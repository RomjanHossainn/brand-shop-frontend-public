import { CiPaperplane } from "react-icons/ci";
import { FaRegHandScissors } from "react-icons/fa";


const Service = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-center text-3xl mt-11 text-gray-700">
        Product Features
      </h1>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex items-center lg:w-4/6 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0">
            <CiPaperplane className="text-7xl text-green-600"></CiPaperplane>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Product Feature Prioritization
            </h2>
            <p className="leading-relaxed text-base">
              The prioritization of your product features is a process for
              identifying the importance of specific ideas and features to
              minimize the time wasted on concepts that fail to achieve quality
              results. The aim is to determine which options have the most
              potential to deliver customer value and create a positive
              experience in the fastest, easiest, most convenient way.
            </p>
            <a className="mt-3 text-green-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-4/6 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Less Risk of Costly Mistakes
            </h2>
            <p className="leading-relaxed text-base">
              Prioritizing product features can help your brand create products
              that align with consumer desires and pain points more effectively.
              It’s driven by data-based research that allows you to recognize
              the most valuable decisions in designing and refining your
              products before releasing them.
            </p>
            <a className="mt-3 text-green-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full  bg-green-100 text-indigo-500 flex-shrink-0">
            <FaRegHandScissors className="text-6xl text-green-600"></FaRegHandScissors>
          </div>
        </div>
        <div className="flex items-center lg:w-4/6 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-indigo-500 flex-shrink-0">
            <CiPaperplane className="text-7xl text-green-600"></CiPaperplane>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              High-Quality Manufacturing
            </h2>
            <p className="leading-relaxed text-base">
              The age of “fast fashion” appears to be at an end as consumers
              look for clothes that last longer and offer higher quality. More
              than 40% of consumers are willing to pay higher prices for better
              quality garments, and 77% agree that this typically means clothes
              are made from natural fibers (such as cotton).
            </p>
            <a className="mt-3 text-green-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button className="flex mx-auto mt-20 text-white bg-[#38c171] border-0 py-2 px-10 focus:outline-none hover:bg-[#38c171d4] rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default Service;

