import React from "react";
import "./Background.css";

const Backgroundservice = () => {
  return (
    <div>
      <div className="background h-96 bg-black bg-cover bg-center bg-norepeat">
        <div className="h-96 bg-black bg-opacity-70">
          <h1 className=" pt-28 text-center text-6xl text-white">
           Our Services
          </h1>
          <h2 className="pt-8 text-center text-xl  text-white">
            {" "}
            at your service Since 1998
          </h2>
          <div className="flex justify-center mt-8">
            <button className="p-2 pl-3 pl-3 bg-primarycolor rounded-xl">
              join now
            </button>
            <div className="ml-3">
              <button className="p-2 pl-3 pl-3 bg-green-500 rounded-xl">
                Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Backgroundservice;
