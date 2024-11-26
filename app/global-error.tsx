'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: {error: Error, reset: ()=>void}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">Something went wrong!</h1>
      <p className="text-xl mt-4">
        {error?.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="mt-6">
        <button
          onClick={() => reset()} // Resets the error boundary
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
        >
          Try Again
        </button>
        <Link href="/" passHref>
          <a className="ml-4 px-6 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
}
