"use client";

import Link from "next/link";
import { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { CiInboxIn, CiPen } from "react-icons/ci";

const DashboardNavbar = () => {
  const [active, setActive] = useState("blog");

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/dashboard"
          onClick={() => setActive("blog")}
          className={`flex flex-col items-center gap-2 p-4 text-center text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-800 ${
            active === "blog" && "text-slate-800 border-b-slate-800"
          }`}
        >
          <CiPen size={25} />
          <span>Blogg</span>
        </Link>
        <Link
          href="/dashboard/kategorier"
          onClick={() => setActive("category")}
          className={`flex flex-col items-center gap-2 p-4 text-center text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-800 ${
            active === "category" && "text-slate-800 border-b-slate-800"
          }`}
        >
          <CiInboxIn size={25} />
          <span>Kategorier</span>
        </Link>
        <Link
          href="/dashboard/projekt"
          onClick={() => setActive("project")}
          className={`flex flex-col items-center gap-2 p-4 text-center text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-800 ${
            active === "project" && "text-slate-800 border-b-slate-800"
          }`}
        >
          <CgWebsite size={25} />
          <span>Projekt</span>
        </Link>
      </div>

      <hr className="mb-20" />
    </>
  );
};

export default DashboardNavbar;
