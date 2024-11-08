"use client";

/* import { auth } from "@/auth";
import LogoutButton from "@/components/logout-button";
import { Button } from "@/components/ui/button"; 
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";*/
import React from "react";
/* import { Session } from "next-auth"; */
import Link from "next/link";
import { Session } from "next-auth";
interface NavBarAdminProps {
  session: Session | null;
}
/* interface Props {
  session?: Session | null;
} */

export default function NamePage({ session }: NavBarAdminProps) {
  /* const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";
  const isUser = session?.user.role === "user";
  console.log({ session });

  //onst [session, setSession2] = useState<Session | null>(null);
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";
  const isUser = session?.user.role === "user";
  /* useEffect(() => {
    async function fetchAuthSession() {
      const sessionData = await auth();
      setSession2(sessionData);
    }

    fetchAuthSession();
  }, []); */
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link href={"#"}>Link 1</Link>
              <Link href={"#"}>Link 2</Link>
              <Link href={"#"}>Link 3</Link>
              <Link href={"#"}>Link 4</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/*     <nav>
      <h1>NAV</h1>
      {isAuthenticated && isUser && (
        <div>OPCIONES DE USUARIO {session?.user.email}</div>
      )}
      {isAuthenticated && isAdmin && (
        <div>OPCIONES DE ADMINISTRADOR {session?.user.email}</div>
      )}
      <p>
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <Link href={"/login"}>Ingresar</Link>
        )}
      </p>
    </nav> */}
    </header>
  );
}
