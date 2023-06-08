"use client";
import { useEffect } from "react";

// Error components must be CLient Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        {/* Attempt to recover by trying to re-render the segment */}
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
