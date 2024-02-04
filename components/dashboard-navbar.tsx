"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgWebsite } from "react-icons/cg";
import { CiInboxIn, CiPen } from "react-icons/ci";

const DashboardNavbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/dashboard/blogg",
      label: "Journal",
      active: pathname === "/dashboard/blogg",
      icon: CiPen,
    },
    {
      href: "/dashboard/kategorier",
      label: "Kategorier",
      active: pathname === "/dashboard/kategorier",
      icon: CiInboxIn,
    },
    {
      href: "/dashboard/projekt",
      label: "Projekt",
      active: pathname === "/dashboard/projekt",
      icon: CgWebsite,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={`flex flex-col items-center gap-2 p-4 text-center text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-800 ${
              route.active && "text-slate-800 border-b-slate-800"
            }`}
          >
            <route.icon size={25} />
            <span>{route.label}</span>
          </Link>
        ))}
      </div>

      <hr className="mb-20" />
    </>
  );
};

export default DashboardNavbar;
