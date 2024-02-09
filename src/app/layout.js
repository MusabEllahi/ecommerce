import "./globals.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from "@/components/navbar/navbar"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}><Navbar />
      
        {children}</body>
    </html>
  );
}