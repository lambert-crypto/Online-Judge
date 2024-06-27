export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-slate-900 text-white">{children}</div>
      </body>
    </html>
  );
}
