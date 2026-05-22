import React from "react";
import "./globals.css";

export const metadata = {
  title: "Floating Hero",
  description: "Legal Work Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}