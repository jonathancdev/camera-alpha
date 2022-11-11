"use client";

import Link from "next/link";
// import { useSelectedLayoutSegment } from "next/navigation";
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavLink({ href, children }) {
  //   let segment = useSelectedLayoutSegment();
  //   let active = href === `/${segment}`;
  let layoutSegments = useSelectedLayoutSegments();
  let segment = layoutSegments[0];
  if (segment === undefined) segment = "";
  let active = href === `/${segment}`;
  return (
    <Link className={active ? "underline nav-link" : "nav-link"} href={href}>
      {children}
    </Link>
  );
}
