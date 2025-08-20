import React from "react";
import {
  BrickWallShield,
  ChartNoAxesCombined,
  LucideLayoutDashboard,
  Settings,
  ShoppingBag,
  UserStar,
} from "lucide-react";

const SideBar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LucideLayoutDashboard className="text-black" />,
    },
    { name: "Shop Control", icon: <ShoppingBag className="text-black" /> },
    { name: "Admins", icon: <UserStar  className="text-black" /> },
    { name: "Analytics", icon: <ChartNoAxesCombined  className="text-black"/> },
    { name: "Audit Logs", icon: <BrickWallShield  className="text-black" /> },
    { name: "Settings", icon: <Settings   className="text-black"/> },
  ];

  return (
    <aside className="w-64 rounded-r-2xl h-screen bg-white shadow-lg hidden md:flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center space-x-2">
        <div className="text-yellow-500 font-bold text-lg">🏪</div>
        <span className="font-semibold text-gray-800 text-lg">JHU</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 mt-6 space-y-2">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center space-x-3 p-2 rounded-md transition-all duration-200 hover:bg-gray-100 ${
              item.name === "Shop Control"
                ? "bg-yellow-50 text-yellow-600 font-medium"
                : "text-gray-700"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
