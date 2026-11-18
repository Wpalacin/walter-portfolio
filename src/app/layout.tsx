import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walter Palacín | Ingeniería, Datos e Innovación",
  description:
    "Portfolio profesional de Walter Palacín: ingeniería de sistemas, MBA, Business Intelligence, automatización y proyectos tecnológicos.",
  keywords: [
    "Walter Palacín",
    "Business Intelligence",
    "Power BI",
    "Ingeniería de sistemas",
    "Automatización",
    "SQL",
  ],
  authors: [{ name: "Walter Palacín" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09111f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
