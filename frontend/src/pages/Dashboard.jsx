import React, { useState } from "react";
import {
  Bell,
  User,
  Home,
  Settings,
  BarChart2,
  ClipboardList,
  CalendarCheck2,
  MessageCircle,
  FileText,
  Camera,
} from "lucide-react";

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const [profileImage, setProfileImage] = useState(null);
  const employeeName = "Hemant Patel";
  const employeeDepartment = "Information Technology";
  const employeePosition = "Team leader";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      {/* Top Profile Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="relative w-24 h-24 rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold text-2xl">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            employeeName[0]
          )}
          <label className="absolute z-10 bottom-0 right-0 bg-white rounded-full  p-1 cursor-pointer shadow">
            <Camera size={16} className="text-indigo-500" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-700">{employeeName}</h2>
          <p className="text-gray-500 text-sm">
            Dept.: <span className="text-gray-700">{employeeDepartment}</span>
          </p>
          <p className="text-gray-500 text-sm">
            Post: <span className="text-gray-700">{employeePosition}</span>
          </p>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="mt-6">
        <ul className="flex flex-wrap justify-center md:justify-start gap-2 bg-white rounded shadow ms-[20%] me-[23.7%] p-2">
          {[
            ["Dashboard", <Home size={20} />],
            ["My Attendance", <ClipboardList size={20} />],
            ["Leave Requests", <CalendarCheck2 size={20} />],
            ["Complaints", <MessageCircle size={20} />],
            ["Suggestions", <FileText size={20} />],
            ["Analytics", <BarChart2 size={20} />],
            ["Settings", <Settings size={20} />],
          ].map(([label, icon]) => (
            <li key={label}>
              <button
                onClick={() => setActive(label)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-all ${
                  active === label
                    ? "bg-indigo-100 text-indigo-800 font-semibold"
                    : "hover:bg-indigo-50 text-gray-700"
                }`}
              >
                {icon}
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <header className="mt-6 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-800">
          {active === "Dashboard"
            ? "Employee Dashboard"
            : `Employee Dashboard — ${active}`}
        </h1>
      </header>

      <main className="bg-white p-4 rounded shadow min-h-[200px]">
        {/* Dynamic content goes here */}
        <p className="text-gray-500">Welcome to the {active} section.</p>
      </main>
    </div>
  );
};

export default Dashboard;
