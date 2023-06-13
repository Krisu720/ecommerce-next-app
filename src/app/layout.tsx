import Navbar from "@/components/Navbar";
import CustomContainer from "@/components/ui/CustomContainer";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import Toaster from "@/components/Toaster";

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
