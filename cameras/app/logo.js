"use client";

import Link from "next/link";
// import { useSelectedLayoutSegment } from "next/navigation";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Logo() {
  //   let segment = useSelectedLayoutSegment();
  //   let active = href === `/${segment}`;
  let layoutSegments = useSelectedLayoutSegments();
  let segment = layoutSegments[0];
  if (segment === undefined) segment = "";
  let isHomePage = segment === "";
  return (
    <div className="logo">
      <Link href="/">
        <span className={isHomePage ? "home" : ""}>CAMDB</span>
      </Link>
    </div>
  );
}
