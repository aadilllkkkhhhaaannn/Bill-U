import { useState } from "react";
import SideBar from "../Components/SideBar";
import { Edit, Eye, Trash2, User } from "lucide-react";
import { FaPlus, FaSearch, FaRedo } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { ArrowUpRight, CircleX, House } from "lucide-react";
import Information from "../Components/Information";

const shopControl = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const shops = [
    {
      name: "Store 1",
      id: "#12345",
      owner: "John Doe",
      phone: "9876543210",
      address: "New York",
      status: "Active",
    },
    {
      name: "Store 1",
      id: "#12345",
      owner: "John Doe",
      phone: "9876543210",
      address: "New York",
      status: "Active",
    },
    {
      name: "Store 1",
      id: "#12345",
      owner: "John Doe",
      phone: "9876543210",
      address: "New York",
      status: "Active",
    },
    {
      name: "Store 1",
      id: "#12345",
      owner: "John Doe",
      phone: "9876543210",
      address: "New York",
      status: "Active",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-200 font-sans">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6 p-4 flex-wrap gap-4 bg-white">
          <h1 className="text-xl font-bold text-gray-800">Shop Control</h1>
          <div className="flex items-center space-x-12">
            <button className="flex items-center gap-2 border border-gray-300 rounded-xl text-gray-500 px-3 py-1 text-sm w-full md:w-auto">
              <FaRedo className="text-gray-500" />
              Refresh{" "}
            </button>
            <div className="flex items-center space-x-3">
              {/* Text Section */}
              <div className="text-right">
                <div className="text-sm font-bold text-gray-900">admin</div>
                <div className="text-lg text-gray-600 font-normal">
                  Hi, Adam
                </div>
              </div>

              {/* Profile Image */}
              <User className="w-10 h-10 rounded-full object-cover" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}

        <div className="bg-white p-7 rounded-lg shadow-sm m-3">
          <div>
            {!openForm ? (
              <div className="flex justify-end">
                <button
                  onClick={() => setOpenForm(true)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-xl cursor-pointer flex items-center gap-2"
                >
                  <FaPlus /> Create Shop
                </button>
              </div>
            ) : (
              <Information />
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 mt-2">
              {/* Total Shops */}
              <div className="flex items-center shadow gap-3 bg-white rounded-lg p-4 w-full sm:w-auto">
                <div>
                  <p className="text-xs flex items-center gap-5">
                    Total Shops{" "}
                    <div className="bg-yellow-200 rounded p-1">
                      <House className="text-yellow-600" />
                    </div>{" "}
                  </p>
                  <p className="text-3xl font-bold mt-3">500</p>{" "}
                  {/* Added mt-3 */}
                </div>
              </div>

              {/* Active Shops */}
              <div className="flex items-center shadow gap-3 bg-white rounded-lg p-4 w-full sm:w-auto">
                <div>
                  <p className="text-xs flex items-center gap-5">
                    Active Shops{" "}
                    <ArrowUpRight className="bg-green-400 rounded text-green-200" />
                  </p>
                  <p className="text-3xl font-bold mt-3">325</p>{" "}
                  {/* Added mt-3 */}
                </div>
              </div>
              {/* Inactive Shops */}
              <div className="flex items-center shadow gap-3 bg-white rounded-lg p-4 w-full sm:w-auto">
                <div>
                  <p className="text-xs flex items-center gap-5">
                    Inactive Shops{" "}
                    <div className="bg-red-300 text-red-700 rounded-md p-0.5">
                      <CircleX className="rounded" />
                    </div>{" "}
                  </p>
                  <p className="text-3xl font-bold mt-3">175</p>{" "}
                  {/* Added mt-3 */}
                </div>
              </div>
            </div>

            {/* Create Shop Button */}
          </div>
        </div>

        {/* Search + Filters */}

        <div
          className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.15)]
 rounded-xl m-3 p-1"
        >
          <div className="flex flex-wrap m-3 items-center gap-3 bg-white p-7 rounded-lg shadow-md">
            {/* Search Input */}
            <div className="flex items-center border border-gray-300 rounded-xl text-gray-100 px-3 py-2 w-full md:w-1/3">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search shop by name or owner"
                className="outline-none w-full text-sm text-black"
              />
            </div>

            {/* Status Dropdown */}
            <select className="border border-gray-300 rounded-xl px-3 py-2 text-sm w-full md:w-auto">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            {/* Sort Dropdown */}
            <select className="border border-gray-300 rounded-xl px-3 py-2 text-sm w-full md:w-auto">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>

            {/* Reset Button */}
            <button className="flex items-center gap-2 border border-gray-300 rounded-xl text-gray-500 px-3 py-2 text-sm ml-auto">
              <FaRedo className="text-gray-500" />
              Reset Filters
            </button>

            {/* table */}
          </div>

          <div className="bg-white p-4 m-3 rounded-lg shadow overflow-x-auto">
            <table className="mt-6 min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-500 text-sm">
                  <th className="p-2">Shop Name</th>
                  <th className="p-2">Shop ID</th>
                  <th className="p-2">Owner</th>
                  <th className="p-2">Email / Phone</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shops.map((shop, index) => (
                  <tr key={index} className="shadow">
                    <td className=" p-2 flex items-center space-x-3">
                      <span className="w-6 h-6 bg-yellow-400 m-2 rounded"></span>
                      {shop.name}
                    </td>
                    <td className="p-2">{shop.id}</td>
                    <td className="p-2">{shop.owner}</td>
                    <td className="p-2">{shop.phone}</td>
                    <td className="p-2">{shop.address}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          shop.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {shop.status}
                      </span>
                    </td>
                    <td className="relative p-2">
                      <BsThreeDots
                        className="text-black text-xl ml-3 cursor-pointer"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      />

                      {openIndex === index && (
                        <div className="absolute right-0 mt-2 w-25 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                          <ul className="py-1">
                            <li className="group flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:rounded hover:transition-all cursor-pointer">
                              <Edit className="text-yellow-500 w-4 h-4 group-hover:text-black" />{" "}
                              Edit
                            </li>
                            <li className="group flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:rounded hover:transition-all cursor-pointer">
                              <Eye className="text-yellow-500 w-4 h-4 group-hover:text-black" />{" "}
                              View
                            </li>
                            <li className="group flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:rounded hover:transition-all cursor-pointer">
                              <Trash2 className="text-yellow-500 w-4 h-4 group-hover:text-black" />{" "}
                              Delete
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default shopControl;
