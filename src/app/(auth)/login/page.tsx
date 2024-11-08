"use client";
import React from "react";
import FormLogin from "@/components/form-login";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
  const searchParams = useSearchParams();

  const isVerified = searchParams.get("verified") === "true";
  const OAuthAccountNotLinked =
    searchParams.get("error") === "OAuthAccountNotLinked";

  return (
    <FormLogin
      isVerified={isVerified}
      OAuthAccountNotLinked={OAuthAccountNotLinked}
    />
  );
};

export default LoginPage;
