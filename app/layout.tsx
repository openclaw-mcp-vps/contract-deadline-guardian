import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contract Deadline Guardian – Never Miss Critical Deadlines",
  description: "AI-powered contract deadline tracking. Extract key dates from contracts and get smart reminders for renewals, terminations, and deliverables."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="894d4aec-dc2f-440b-8808-5b95abd2a77e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
