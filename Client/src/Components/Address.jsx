import React from "react";

const Address = () => {
  return (
    <div className="h-[90vh] mb-2 bg-gray-50 px-4 py-6 md:px-10">
  <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-2">
            Address Details & Branding
          </h2>
          <p className="text-gray-500 text-xs mb-8">
            Please provide the shop’s full address, city, state, postal code,{" "}
            <br />
            country, and upload the shop logo.
          </p>

          <form className="space-y-6">
            <div className="flex">
              {/* close */}
              <div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    Address
                  </label>
                  <textarea
                    placeholder="Enter your full address"
                    rows={4}
                    className="mt-1 block h-[100px] w-[370px] rounded-2xl p-2 border border-gray-300
        focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                  />
                </div>
                <div className="flex gap-4 mt-2">
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-black">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Indore"
                        className="mt-1 block w-full rounded-2xl p-2 border border-gray-300 
        focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-black">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Madhya Pradesh"
                        className="mt-1 block w-full rounded-2xl p-2 border border-gray-300 
        focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <div>
                      <label className="block text-sm font-medium text-black">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 452010"
                        className="mt-1 block w-full rounded-2xl p-2 border border-gray-300 
        focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-black">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. India"
                        className="mt-1 block w-full rounded-2xl p-2 border border-gray-300 
        focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Upload */}
              <div>
                <div>
                  <label className="block text-sm font-medium text-black ml-10">
                    Logo
                  </label>
                  <input
                    type="file"
                    className="block w-[200px] h-[230px] ml-10 rounded-2xl border-2 border-dashed border-gray-300 
        text-gray-500 text-sm cursor-pointer p-4"
                  />
                  {/* <p className="text-center text-gray-500 text-sm mt-2">
                    Drop your LOGO here
                  </p> */}
                </div>
              </div>
              {/* inputs */}

              {/* close */}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-sm text-gray-600 hover:underline cursor-pointer"
              >
                ← Go Back
              </button>
              <button
                type="button"
                className="bg-yellow-400 text-black text-sm px-5 py-2 cursor-pointer rounded-xl hover:bg-yellow-500 transition"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
