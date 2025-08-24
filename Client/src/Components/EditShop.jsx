// import from "react";
import { Upload, X, Check, ShoppingCart } from "lucide-react";

export default function EditShop() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Edit Shop</h1>
          <p className="text-gray-500 text-sm">
            Update shop details or you can also assign admins here.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shop ID */}
          <div>
            <label className="text-xs ml-1 font-medium">Shop ID</label>
            <input
              type="text"
              placeholder="SHOP-038"
              className="w-full rounded-xl p-2 border border-gray-300 placeholder:text-black
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            />
          </div>

          {/* Shop Name */}
          <div>
            <label className="text-xs ml-1 font-medium">Shop Name</label>
            <input
              type="text"
              placeholder="Murlidhar store"
              className="w-full rounded-xl placeholder:text-black p-2 border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            />
          </div>

          {/* Owner Full Name */}
          <div>
            <label className="text-xs ml-1 font-medium">Owner Full Name</label>
            <input
              type="text"
              placeholder="Murlidhar store"
              className="w-full rounded-xl p-2 border border-gray-300 placeholder:text-black
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            />
          </div>

          {/* Owner Contact */}
          <div>
            <label className="text-xs ml-1 font-medium">Owner Last Name</label>
            <input
              type="text"
              placeholder="shukla"
              className="w-full placeholder:text-black rounded-xl p-2 border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs ml-1 font-medium">Email Address</label>
            <input
              type="text"
              placeholder="Murlidhar@gmail.com"
              className="w-full rounded-xl p-2 border border-gray-300 placeholder:text-black
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            />
          </div>

          {/* Owner Contact */}
          <div>
            <label className="text-xs ml-1 font-medium">Contact Number</label>
            <input
              type="text"
              placeholder="9876545678"
              className="w-full rounded-xl p-2 border border-gray-300 placeholder:text-black 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            />
          </div>
          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Address</label>
            <textarea
              rows={2}
              placeholder="123 Vijay Nagar Main Road, Opposite C21 Mall, Indore, Madhya Pradesh"
              className="w-full placeholder:text-black h-[100px] rounded-lg px-4 py-2 mt-1 border border-gray-300 
             focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* State */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  placeholder="Enter state"
                  className="border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              {/*  */}
            </div>

            <div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Enter country"
                  className="border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Enter postal code"
                  className="border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Logo Upload */}

          <div className="md:col-span-2">
            <label className="text-xs font-medium">Logo</label>
            <div className="md:col-span-2 flex items-center gap-6">
              <div className="border-dashed border-2 border-gray-300 rounded-xl flex gap-3 items-center justify-center w-70 h-20 cursor-pointer">
                <Upload className="w-6 h-6 text-gray-500" />
                <span className="text-sm text-gray-500 mt-2">
                  Drop your shop logo
                </span>
              </div>

              <div className="border p-4 rounded-xl flex flex-col items-center w-32 h-32 justify-center">
                <img
                  src="https://placehold.co/80x80"
                  alt="Logo Preview"
                  className="w-16 h-16 object-cover"
                />
                <span className="text-xs mt-1">Logo Preview</span>
              </div>
            </div>
          </div>
          {/* Status */}
          <div>
            <label className="text-sm font-medium">Status</label>
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                className="flex items-center gap-2 border px-3 py-1 rounded-lg text-green-600 border-green-600"
              >
                <Check className="w-4 h-4" /> Active
              </button>
              <button
                type="button"
                className="flex items-center gap-2 border px-3 py-1 rounded-lg text-red-600 border-red-600"
              >
                <X className="w-4 h-4" /> Inactive
              </button>
            </div>
          </div>

          {/* Assign Admins */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Assign Admins</label>
            <div className="flex flex-wrap items-center gap-3 border rounded-lg px-3 py-2 mt-2">
              <div className="flex items-center gap-2 border px-2 py-1 rounded-full text-yellow-600 border-yellow-600">
                <ShoppingCart className="w-4 h-4" /> Pan Cart
              </div>
              <div className="flex items-center gap-2 border px-2 py-1 rounded-full text-yellow-600 border-yellow-600">
                <ShoppingCart className="w-4 h-4" /> Pan Cart
              </div>
            </div>
          </div>
        </form>

        {/* Footer Buttons */}
        <div className="flex justify-end items-center gap-4 mt-8">
          <button className="border px-6 py-2 rounded-lg">Cancel</button>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
