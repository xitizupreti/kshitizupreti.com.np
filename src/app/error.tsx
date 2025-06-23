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
        Something Went Wrong 😕
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center max-w-xl">
        Sorry, an unexpected error occurred. Our team has been notified (not
        really, but we pretend). You can try again or head back to the homepage.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 text-blue-600 hover:underline"
      >
        Retry
      </button>
      <a href="/" className="mt-4 text-blue-600 hover:underline">
        Return to Homepage
      </a>
    </div>
  );
}
