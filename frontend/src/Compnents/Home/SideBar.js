import React, { useEffect, useState } from "react";
import { RiSettings4Line, RiLogoutBoxRFill } from "react-icons/ri";
import { GiStabbedNote } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";
import { BsPersonPlus, BsFileEarmarkPersonFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function SideBar() {
  const menus = [
    { name: "Overview", link: "/", icon: GiStabbedNote },
    { name: "Appointments", link: "/", icon: BiCalendar },
    { name: "Doctors", link: "/", icon: BsPersonPlus },
    { name: "Pathology Results", link: "/", icon: BsFileEarmarkPersonFill },
    { name: "Chats", link: "/", icon: TiMessages },
    // { name: "ACCOUNT", link: "/", icon: FiShoppingCart },
  ];
  const account = [
    { name: "Settings", link: "/", icon: RiSettings4Line },
    { name: "Logout", link: "/", icon: RiLogoutBoxRFill },
  ];
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const x = window.matchMedia("(max-width: 640px)");
    function myFunction(e) {
      setOpen(false);
    }
    x.addListener(myFunction);
    return () => x.removeListener(myFunction);
  }, []);
  return (
    <div className="h-screen ">
      <div
        className={`bg-gray-100 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-900 px-4`}
      >
        <div className="py-3 flex justify-between">
          {open && <div className="text-2xl font-bold">LOGO</div>}

          <TfiArrowsHorizontal
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <hr className="" />
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          {open && <h1 className="font-bold text-md ml-3">ACCOUNT</h1>}

          {account?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
