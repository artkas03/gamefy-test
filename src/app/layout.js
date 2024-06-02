import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

import './App.scss';
import './globals.css';
// import { inter, poppins } from "@/utils/fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
