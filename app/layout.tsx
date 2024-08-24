import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISEL LEIM 2022/2024",
  description: "Informarções relacionadas com o curso de Licenciatura em Engenharia Informática e Multimédia do Instituto Superior de Engenharia de Lisboa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
        </header>

        <main>{children}</main>
        <footer>
          <p>© 2024 TommyG</p>
        </footer>
      </body>
    </html>
  );
}