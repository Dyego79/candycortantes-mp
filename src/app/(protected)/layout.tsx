import { SessionProvider } from "next-auth/react";
import NavBarAdmin from "../../components/NavBarAdmin";
import { auth } from "../../auth";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <>
      <NavBarAdmin session={session} />

      <div className="grid  place-items-center min-h-screen">{children}</div>
    </>
  );
}
