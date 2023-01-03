import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function AgentNav() {
  const router = useRouter();

  return (
    <div className="w-100">
      <ul className="agent-nav">
        <li>
          <Link href="/agent/dashboard" passHref>
            <a
              className={`${
                router.pathname === "/agent/dashboard" ? "agent-nav-selected" : "agent-nav-item"
              }`}
            >
              Dashboard
            </a>
          </Link>
        </li>
        <li>
          <Link href="/agent/create-listing" passHref>
            <a
              className={`${
                router.pathname === "/agent/create-listing" ? "agent-nav-selected" : "agent-nav-item"
              }`}
            >
              Create Listing
            </a>
          </Link>
        </li>
        <li>
          <Link href="/agent/profile" passHref>
            <a
              className={`${router.pathname === "/agent/profile" ? "agent-nav-selected" : "agent-nav-item"}`}
            >
              Profile
            </a>
          </Link>
        </li>
        <li>
          <Link href="/agent/statistics" passHref>
            <a
              className={`${
                router.pathname === "/agent/statistics" ? "agent-nav-selected" : "agent-nav-item"
              }`}
            >
              Statistics
            </a>
          </Link>
        </li>
        <li>
          <Link href="/agent/logout" passHref>
            <a className="agent-nav-item">Logout</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AgentNav;
