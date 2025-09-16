import "./globals.css";

export const metadata = {
  title: "Made Card UX Demo",
  description: "OTP + Micro-interactions + Rewards calculator (demo)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
