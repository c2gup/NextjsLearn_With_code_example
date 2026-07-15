"use client";

import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => router.back()}
    >
      <div
        style={{
          background: "white",
          padding: 30,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
