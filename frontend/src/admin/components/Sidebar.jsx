import React, { useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS,DASHBOARD_SIDEBAR_LINKS } from "../lib/constants";
import {
  HiOutlineLogout,

} from "react-icons/hi";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="bg-neutral-800 w-60 text-white p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 border-b py-3">
        <span className="text-white text-2xl">DEV CMS (Movies)</span>
      </div>    
  
      <div className="py-4 flex flex-1 flex-col  gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink
            key={link.key}
            link={link}
            isOpen={openDropdown === link.key}
            toggleDropdown={() => toggleDropdown(link.key)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div
          className={classNames(linkClass, "cursor-pointer text-red-500")}
          onClick={() => toggleDropdown("logout")}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link, isOpen, toggleDropdown }) {
  const { pathname } = useLocation();

  return (
    <div className="relative">
      {link.subLinks ? (
        <>
          <div
            onClick={() => toggleDropdown(link.key)}
            className={classNames(
              linkClass,
              pathname === link.path
                ? "bg-neutral-700 text-white"
                : "text-neutral-400"
            )}
          >
            <span className="text-xl">{link.icon}</span>
            {link.label}
          </div>
          {isOpen && (
            <div className="ml-6 absolute bg-neutral-800 p-2 rounded-md z-10">
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink.key}
                  to={subLink.path}
                  className={classNames(
                    pathname === subLink.path
                      ? "bg-neutral-700 text-white"
                      : "text-neutral-400",
                    "block py-1"
                  )}
                >
                  {subLink.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          to={`/admin${link.path}`}
          className={classNames(
            pathname === link.path
              ? "bg-neutral-700 text-white"
              : "text-neutral-400",
            linkClass
          )}
        >
          <span className="text-xl">{link.icon}</span>
          {link.label}
        </Link>
      )}
    </div>
  );
}