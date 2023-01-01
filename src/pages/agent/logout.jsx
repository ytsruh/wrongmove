import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.clear();
    router.push("/login/agent");
  }, []);

  return null;
}
