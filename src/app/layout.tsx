import Layout from "@/components/globals/Layout";
import "../styles/main.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Haynay - A platform for HOA associations",
  description:
    "A platform specifically designed to cater to the unique needs of HOA associations, offering a customized solution that addresses their communication challenges and provides features essential for effective community management.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
