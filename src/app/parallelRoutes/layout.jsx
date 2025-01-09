export default function RootLayout({children,team,analytics}) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
        {team}
        {analytics}
      </body>
    </html>
  );
}