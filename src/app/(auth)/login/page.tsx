"use client";
import React, { Suspense } from "react";
import FormLogin from "@/components/form-login";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
};

const LoginContent = () => {
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
