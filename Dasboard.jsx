import React, { useState } from "react";
const Dashboard = () => {
const [activePage, setActivePage] = useState("Home");
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const [isDarkMode, setIsDarkMode] = useState(false);
const handleNavigation = (page) => {
setActivePage(page);
// setIsSidebarOpen(false); // Close sidebar when clicking an item
setIsDarkMode(true); // Change content box to dark mode
};
return (
<div className="flex h-screen bg-gray-100">
{/* Sidebar */}
{isSidebarOpen && (
<div className="w-1/4 bg-gray-800 text-white p-5">
{/* Logo and Close Button */}
<div className="flex justify-between items-center mb-6">
<div className="flex items-center space-x-2">
<img src="./src/image/pic.png" alt="Logo" className="block w-10 r-20"/><h2 className="text-xl font-bold">Dashboard</h2>
</div>
<button onClick={() => setIsSidebarOpen(false)} className="text-xl">✖</button>
</div>

{/* Navigation */}
<ul className="space-y-3">
{["Home", "Tickets", "Courses", "FAQ"].map((item) => (
<li
key={item}
className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleNavigation(item)}
>
{item}
</li>
))}
</ul>
</div>
)}
{/* Main Content */}
<div className="w-3/4 p-5">
{/* Toggle Sidebar Button */}
{!isSidebarOpen && (
<button onClick={() => setIsSidebarOpen(true)} className="bg-gray-800 text-whitep-2rounded w-7 h-7 ">
☰ Menu
</button>
)}
{/* Top Section with Image */}
<div className="bg-white p-3 shadow-md mb-4">
<img src="./src/image/pic2.jpg" alt="" className="block w-10 h-10"/>
<h1>WELCOME, ALPHA</h1>
</div>
{/* Dynamic Content */}
<div className={`p-5 shadow-md ${isDarkMode ? "bg-black text-white" : "bg-white text- Black"}`}>
<h1 className="text-2xl font-bold"></h1>
<p className="mt-3">{activePage}</p>
</div>
</div>
</div>
);
};
export default Dashboard;