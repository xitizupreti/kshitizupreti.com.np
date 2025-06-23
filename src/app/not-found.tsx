export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 – Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-xl text-center">
        Oops! The page you&#39;re looking for doesn&#39;t exist or has been
        moved. Please check the URL or return to the homepage.
      </p>
      <a href="/" className="mt-8 text-blue-600 hover:underline">
        Return to Homepage
      </a>
    </div>
  );
}
