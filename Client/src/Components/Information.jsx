import React, { useState } from "react";
import Address from "./Address";

const Information = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="h-[90vh] mb-2 flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 bg-yellow-400 p-8 space-y-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-black text-white font-bold">
              1
            </div>
            <div>
              <p className="text-sm">Step 1</p>
              <p className="font-semibold">Basic Info</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-black text-black font-bold">
              2
            </div>
            <div>
              <p className="text-sm">Step 2</p>
              <p className="font-semibold">Address Details & Branding</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-black text-black font-bold">
              3
            </div>
            <div>
              <p className="text-sm">Step 3</p>
              <p className="font-semibold">Review & Confirm</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 p-10">
          <h2 className="text-3xl font-bold mb-2">Basic Information</h2>
          <p className="text-gray-500 text-xs mb-8">
            Please provide your shop name, owner name, email address <br /> and
            contact number
          </p>

          <form className="space-y-6">
            {/* Shop Name */}
            <div>
              <label className="block text-sm font-medium text-black">
                Shop Name
              </label>
              <input
                type="text"
                placeholder="e.g. Murlidhar store"
                className="mt-1 block w-[380px] rounded-2xl p-2 border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
              />
            </div>

            {/* Owner Name */}
            <div className="flex gap-2">
              <div>
                <label className="block text-sm font-medium text-black">
                  Owner First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Murlidhar"
                  className="mt-1 block md:w-[190px] w-[172px] rounded-2xl p-2 border border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Owner Last Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shukla"
                  className="mt-1 block md:w-[180px] rounded-2xl p-2 border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black">
                Email Address
              </label>
              <input
                type="email"
                placeholder="sample email"
                className="mt-1 block w-[380px] rounded-2xl p-2 border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-black">
                Contact Number
              </label>
              <input
                type="text"
                placeholder="e.g. +91 989 238 344"
                className="mt-1 block w-[180px] rounded-2xl p-2 border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <div>
                {!openForm ? (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setOpenForm(true)}
                      className="bg-yellow-400 text-black text-xs px-5 py-3 cursor-pointer rounded-xl hover:bg-yellow-500 transition"
                    >
                      Next Step
                    </button>
                  </div>
                ) : (
                  <Address />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Information;
