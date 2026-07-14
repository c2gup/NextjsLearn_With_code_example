export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-green-500 mt-10  ">
        <div className="border-red-500 text-center text-2xl font-bold text-white">
          This is the root layout. It wraps every page in the app. The layout in
        </div>

        {children}
      </div>
    </>
  );
}
