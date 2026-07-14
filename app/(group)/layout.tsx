export default function RouteGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ border: "2px dashed #10b981", padding: "15px", borderRadius: "10px", margin: "20px" }}>
      <div style={{ fontSize: "0.9rem", color: "#10b981", fontWeight: "bold", marginBottom: "15px" }}>
        [Shared Route Group Layout (app/(group)/layout.tsx)] - Wraps only pages inside (group) like /login and /signup
      </div>
      
      {children}
      
      <div style={{ fontSize: "0.9rem", color: "#10b981", fontWeight: "bold", marginTop: "15px", textAlign: "right" }}>
        [End of Route Group Shared Layout]
      </div>
    </div>
  );
}
