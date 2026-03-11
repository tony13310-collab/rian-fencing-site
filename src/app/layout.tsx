import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rian Wei | Men's Saber Fencer",
  description:
    "Rian Wei — Rising Men's Saber fencer. Capital Fencing Academy, Capitol Division. Competition results, rating progression, and achievements.",
  keywords: [
    "fencing",
    "saber",
    "sabre",
    "USA Fencing",
    "Rian Wei",
    "Capital Fencing Academy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
