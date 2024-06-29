export const metadata = {
  title: "Millie Editing",
  description: "Editing view for Millie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
