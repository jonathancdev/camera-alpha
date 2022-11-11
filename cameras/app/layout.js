import "../styles/sass/style.scss";
import "../styles/globals.scss";
import { Inter } from "@next/font/google";
const inter = Inter();
import Logo from "./logo";
import NavLink from "./nav-link";

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <head>
        <title>nested layouts</title>
      </head>
      <body>
        <header className="header">
          <Logo />
          <nav>
            <NavLink href="/">home</NavLink>
            <NavLink href="/cameras">cameras</NavLink>
          </nav>
        </header>
        <nav className="sidebar"></nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
