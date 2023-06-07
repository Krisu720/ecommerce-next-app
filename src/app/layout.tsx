import Navbar from "./components/Navbar";
import CustomContainer from "./components/ui/CustomContainer";
import "./globals.css";
import { Inter } from "next/font/google";

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
        <CustomContainer>
          <Navbar />
          {children}
        </CustomContainer>
      </body>
    </html>
  );
}
