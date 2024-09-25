import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Custom Home Page</h1>
      <p className="text-lg mb-8">This is a custom home page built using Next.js and Tailwind CSS.</p>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/about" className="text-blue-500 underline hover:text-blue-700">
              Go to About Page
            </Link>
          </li>
          <li>
            <Link href="/inputPage" className="text-blue-500 underline hover:text-blue-700">
              Go to Input Page
            </Link>
          </li>
          <li>
            <Link href="/outputPage" className="text-blue-500 underline hover:text-blue-700">
              Go to Output Page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}