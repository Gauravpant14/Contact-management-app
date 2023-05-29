import React from "react";
import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";
import { MdAddChart } from "react-icons/md";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm hover:bg-slate-100">
              <Link
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <GrContactInfo size={25} />
                <span>Contact</span>
              </Link>
            </li>
            <li className="rounded-sm hover:bg-slate-100">
              <Link
                to="/map"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <MdAddChart size={25} />
                <span>Maps and Charts</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
