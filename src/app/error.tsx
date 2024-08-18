// app/error.js

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        500 - Internal Server Error
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Oops! Something went wrong on our end.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 text-blue-600 hover:underline"
      >
        Try Again
      </button>
      <a href="/" className="mt-8 text-blue-600 hover:underline">
        Go back to Home
      </a>
    </div>
  );
}
