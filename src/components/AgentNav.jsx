import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function AgentNav() {
  const router = useRouter();

  return (
    <div className="w-100">
      <ul className="agent-nav">
        <li
          className={`my-0_5 ${
            router.pathname === "/agent/dashboard" ? "agent-nav-selected" : "agent-nav-item"
          }`}
        >
          <Link href="/agent" passHref>
            <a>Dashboard</a>
          </Link>
        </li>
        <li
          className={`my-0_5 ${
            router.pathname === "/agent/create-listing" ? "agent-nav-selected" : "agent-nav-item"
          }`}
        >
          <Link href="/agent/create-listing" passHref>
            <a>Create Listing</a>
          </Link>
        </li>
        <li
          className={`my-0_5 ${
            router.pathname === "/agent/profile" ? "agent-nav-selected" : "agent-nav-item"
          }`}
        >
          <Link href="/agent/profile" passHref>
            <a>Profile</a>
          </Link>
        </li>
        <li
          className={`my-0_5 ${
            router.pathname === "/agent/statistics" ? "agent-nav-selected" : "agent-nav-item"
          }`}
        >
          <Link href="/agent/statistics" passHref>
            <a>Statistics</a>
          </Link>
        </li>
        <li className="my-0_5 agent-nav-item">
          <Link href="/agent/logout" passHref>
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AgentNav;
