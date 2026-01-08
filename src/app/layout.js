import "./globals.css";

export const metadata = {
  title: "Vineet k. Chauhan - Portfolio",
  description: "Portfolio of Vineet k. Chauhan, a Java backend and full-stack developer specializing in building secure, scalable systems and clean applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-gray-900 to-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

