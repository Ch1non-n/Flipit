import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Flipit — Make learning stick", description: "A calm flashcard study space", manifest: "/manifest.webmanifest", appleWebApp: { capable: true, statusBarStyle: "default", title: "Flipit" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="th"><body>{children}</body></html>; }
