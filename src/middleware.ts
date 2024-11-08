import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

const publicRoutes = ["/", "/prices"];
const authRoutes = ["/login", "/register", "/recuperar-pass", "/reset-pass"];
const apiAuthPrefix = "/api/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user.role; // Obteniendo el rol del usuario

  console.log({ isLoggedIn, path: nextUrl.pathname, userRole });

  // Permitir todas las rutas de API de autenticación
  if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return NextResponse.next();
  }

  // Permitir acceso a rutas públicas sin importar el estado de autenticación
  if (publicRoutes.includes(nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Redirigir a la ruta correspondiente dependiendo del rol
  if (isLoggedIn) {
    if (authRoutes.includes(nextUrl.pathname)) {
      if (userRole === "admin") {
        return NextResponse.redirect(new URL("/admin", nextUrl));
      } else {
        return NextResponse.redirect(new URL("/", nextUrl));
      }
    }
  } else {
    if (
      !authRoutes.includes(nextUrl.pathname) &&
      !publicRoutes.includes(nextUrl.pathname)
    ) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
  }

  // Redirigir a /login si el usuario no está logueado y trata de acceder a una ruta protegida
  if (
    !isLoggedIn &&
    !authRoutes.includes(nextUrl.pathname) &&
    !publicRoutes.includes(nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};