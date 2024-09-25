import '../styles/globals.css';
import { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with logo and navigation */}
      <header className="bg-[#154734] text-white p-6 flex justify-between items-center">
        {/* Logo on the left */}
        <Link href="https://www.utdallas.edu/" passHref>
          <Image
            src="/header_logo.png"
            alt="UT Dallas Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </Link>
        {/* Navigation Links */}
        <nav className="flex space-x-6">
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
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <footer className="bg-[#154734] text-white text-center p-4">
        © 2024 My Website
      </footer>
    </div>
  );
}

export default MyApp;