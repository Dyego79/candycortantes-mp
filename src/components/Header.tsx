"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Account from "./ui/account";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Badge } from "@nextui-org/react";
import { Session } from "next-auth";

interface Props {
  session?: Session | null;
}

export default function Header({ session }: Props) {
  /* const [isInvisible, setIsInvisible] = React.useState(false); */
  return (
    <header className="bg-principal flex justify-center">
      <div className="container max-w-[1600px] flex items-center px-3 py-2">
        <Link href={"/"}>
          <Image
            priority={true}
            src={"/img/logo-candy-cortantes.png"}
            alt={"Logo Candy Cortantes"}
            width={91}
            height={92}
          />
        </Link>

        <div className="flex-1"></div>
        <nav className="px-6 animate-fade-up animate-once animate-ease-out">
          <ul className="flex gap-5">
            <li>
              <Link className="linkNav" href={"/login"}>
                Inicio
              </Link>
            </li>
            <li>
              <Link className="linkNav" href={"/register"}>
                Tienda
              </Link>
            </li>
            <li>
              <Link className="linkNav" href={"#"}>
                Cómo Comprar
              </Link>
            </li>
            <li>
              {" "}
              <Link className="linkNav" href={"#"}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          {/* <Account session={session} /> */}
          <div className="flex flex-col leading-4 text-white uppercase">
            <span>Ingresar</span>
            <span>Registro</span>
          </div>
          <Badge
            content={12}
            isInvisible={false}
            className="bg-white text-principal font-bold "
          >
            <HiOutlineShoppingBag size={32} className="text-white ml-3" />
          </Badge>
        </div>
      </div>
    </header>
  );
}
