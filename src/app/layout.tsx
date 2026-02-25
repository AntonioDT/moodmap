import "../styles/globals.scss";

export const metadata = {
  title: "MoodMap",
  description: "Il tuo specchio emotivo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}