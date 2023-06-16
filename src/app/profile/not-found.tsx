import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
