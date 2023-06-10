import "./globals.css";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Travel Note | Home",
  description: "Handling your Travel Stress, so you don't have to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
