import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Walter Palacín | Ingeniería, Datos e Innovación",
  description: "Portfolio profesional de Walter Palacín: ingeniería de sistemas, Business Intelligence, automatización y proyectos tecnológicos.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
