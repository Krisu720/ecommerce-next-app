import Navbar from "@/components/sections/Navbar";
import CustomContainer from "@/components/ui/CustomContainer";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "@/components/sections/Footer";
import Toaster from "@/components/Toaster";
import Persistor from "./Persistor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SellIt",
  description: "Ecommerce application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CustomContainer>
            <Persistor/>
            <Navbar />
            {children}
          </CustomContainer>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
