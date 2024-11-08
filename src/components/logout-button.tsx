"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({ redirect: true });
    router.push("/"); // Redirige al usuario a la página de inicio o a cualquier otra página después del logout
  };
  return <Button onClick={handleLogout}>LogOut</Button>;
};
export default LogoutButton;

/* "use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleClick = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  return <Button onClick={handleClick}>LogOut</Button>;
};
export default LogoutButton;
 */
