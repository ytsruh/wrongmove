import React from "react";
import { useRouter } from "next/router";

function AgentNav() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="w-100">
      <ul className="agent-nav">
        <li>
          <a
            className={`${router.pathname === "/agent/dashboard" ? "agent-nav-selected" : "agent-nav-item"}`}
            href="/agent/dashboard"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            className={`${
              router.pathname === "/agent/create-listing" ? "agent-nav-selected" : "agent-nav-item"
            }`}
            href="/agent/create-listing"
          >
            Create Listing
          </a>
        </li>
        <li>
          <a
            className={`${router.pathname === "/agent/profile" ? "agent-nav-selected" : "agent-nav-item"}`}
            href="/agent/profile"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            className={`${router.pathname === "/agent/statistics" ? "agent-nav-selected" : "agent-nav-item"}`}
            href="/agent/statistics"
          >
            Statistics
          </a>
        </li>
        <li>
          <a className="agent-nav-item" href="/agent/logout">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AgentNav;
