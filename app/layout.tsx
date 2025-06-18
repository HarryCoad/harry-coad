import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import Head from "next/head";
import { Footer } from "@/components/Footer";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Harry Coad",
  description: "Personal website of Harry Coad, a frontend developer.",
  openGraph: {
    title: "Harry Coad",
    description: "Personal website of Harry Coad, a frontend developer.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={`${sourceCodePro.variable} antialiased bg-zinc-100 dark:bg-black min-h-screen flex flex-col items-center px-4`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="dark">
          <Header />
          <main className="flex-1 flex grow w-full max-w-[800px] font-sans">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
