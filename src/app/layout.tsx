import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wnotes",
  description: "a web app optimized for taking notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between min-h-screen`}>
				<Navbar/>
				<div className="px-4 grow">
					{children}
				</div>
				<Footer/>
			</body>
    </html>
  );
}

function Navbar() {
	return(
		<div className="px-4 py-2 flex justify-between text-center">
			<h1 className="text-2xl bold">wnotes</h1>
			<div className="text-center space-x-4 align-center">
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Legal</a>
			</div>
		</div>
	)
}

function Footer() {
	return(
		<div className="px-4 py-2">
			Created by Jonathan Nguyen
		</div>
	)
}
