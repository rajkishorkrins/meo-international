
import "./globals.css";

export const metadata = {
  title: "Meo International Logistics",
  description: "Meo International Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

