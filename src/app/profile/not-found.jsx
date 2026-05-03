// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex container mx-auto flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-warning">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
