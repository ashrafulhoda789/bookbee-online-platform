import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['600', '700', '800', '900']
})

export const metadata = {
  title: "BookBee",
  description: "Borrow your choosen books",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="w-10/12 mx-auto flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
