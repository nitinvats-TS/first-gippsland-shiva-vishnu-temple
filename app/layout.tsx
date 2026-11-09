import type { Metadata } from "next";
import { Footer, Header } from "./components/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "First Gippsland Shiva Vishnu Temple | Traralgon",
    template: "%s | First Gippsland Shiva Vishnu Temple",
  },
  description:
    "A place of worship, service and community in Traralgon, Victoria. Visit First Gippsland Shiva Vishnu Temple for daily darshan, festivals and cultural programs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
