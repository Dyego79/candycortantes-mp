import React from "react";
import { auth } from "@/auth";
import LogoutButton from "@/components/logout-button";

export default async function DashboardPage() {
  const session = await auth();
  console.log(session);

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
}
