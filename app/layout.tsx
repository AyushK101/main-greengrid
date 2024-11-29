import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '@/components/Footer'
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


// const poppins = localFont({
//   src: "./fonts/Poppins-Black.ttf",
//   variable: "--poppins",
//   weight: "200",
// })

const outfit = localFont({
  src: "./fonts/Outfit-VariableFont_wght.ttf",
  variable: "--outfit",
  weight: "400"
})

// const vettom = localFont({
//   src: "./fonts/Fontspring-DEMO-vettom-bold.otf",
//   variable: "--vettom",
//   weight: "300"
// })




export const metadata: Metadata = {
  title: "GreenGrid",
  description: "Smart Energy Management website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${outfit.className}  `}
        
      >
        <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
