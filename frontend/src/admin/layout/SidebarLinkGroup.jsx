import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function SidebarLinkGroup({ children, activecondition }) {
  const { pathname } = useLocation();

  const lastPathSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const isActive = lastPathSegment === activecondition(pathname);
  console.log(isActive);

  console.log(`Is Active ${isActive}`);
  console.log(pathname);

  const [open, setOpen] = useState(isActive);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        isActive ? "bg-slate-900" : ""
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;
