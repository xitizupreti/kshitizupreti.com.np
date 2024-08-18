// app/not-found.js

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="mt-8 text-blue-600 hover:underline">
        Go back to Home
      </a>
    </div>
  );
}
