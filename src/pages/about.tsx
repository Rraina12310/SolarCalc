import Link from 'next/link';

export default function About() {
  return (
    <div className="border-t-[50px] border-l-[10px] border-r-[10px] border-b-[10px] border-[#154734] min-h-screen flex flex-col justify-between">
      <nav className="bg-[#154734] text-white p-6 flex justify-center">
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/inputPage" className="hover:text-yellow-400 transition">
            Input Page
          </Link>
          <Link href="/outputPage" className="hover:text-yellow-400 transition">
            Output Page
          </Link>
        </div>
      </nav>

      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">This is the About Page.</p>
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back to Home
        </Link>
      </div>

      <footer className="bg-[#154734] text-white text-center p-4">
        © 2024 My Website
      </footer>
    </div>
  );
}