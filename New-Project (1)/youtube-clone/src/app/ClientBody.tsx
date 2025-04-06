"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "bg-white"; // Updated to have a YouTube-style background
  }, []);

  return (
    <body className="bg-white font-roboto" suppressHydrationWarning>
      {children}
    </body>
  );
}
