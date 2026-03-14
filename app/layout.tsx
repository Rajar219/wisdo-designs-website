import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const metadata = {
  title: "WISDO Designs",
  description: "Premium Digital Solutions for Startups & Businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800 bg-slate-50 relative min-h-screen selection:bg-indigo-500/30">
        <div className="bg-mesh" />
        <div className="glow-orb bg-indigo-200/50 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] top-[-100px] left-[-100px] sm:left-[-200px]" />
        <div className="glow-orb bg-blue-100/40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] top-[40%] right-[-50px] sm:right-[-100px]" />
        
        <div className="relative z-10 flex flex-col min-h-[100dvh]">
          <Navbar />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}