"use client";

import React from "react";
import { signOut } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import { Session } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  session?: Session | null;
}

export default function Account({ session }: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: true });
    router.push("/"); // Redirige al usuario a la página de inicio o a cualquier otra página después del logout
  };

  // Define las propiedades comunes
  const avatarProps: {
    size: "sm";
    isBordered: boolean;
    as: keyof JSX.IntrinsicElements;
    classNames: {
      base: string;
      icon: string;
    };
    className: string;
    src?: string;
    icon?: JSX.Element;
  } = {
    size: "sm",
    isBordered: true,
    as: "button",
    classNames: {
      base: "bg-gogoRojo",
      // base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
      icon: "text-white/80",
    },
    className: "transition-transform fill-slate-500",
  };

  // Condicionalmente asigna src o icon
  if (session) {
    avatarProps.src = session.user.image || undefined;
  } else {
    avatarProps.icon = <AvatarIcon />;
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar {...avatarProps} />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold text-gray-500">Ingresaste como</p>
            <p className="font-bold">{session?.user.email}</p>
          </DropdownItem>
          <DropdownItem key="pedidos">
            <Link href="/pedidos">Mis Pedidos</Link>
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" onClick={handleLogout} color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
