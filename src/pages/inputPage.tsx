import Link from 'next/link';

export default function InputPage() {
  return (
    <div className="border-t-[50px] border-l-[10px] border-r-[10px] border-b-[10px] border-[#154734] min-h-screen flex flex-col justify-between">
      {/* Menu Bar */}
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

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Input Page</h1>
        <p className="text-lg mb-8">This is where you can enter data.</p>
        {/* Example form structure */}
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input">
              Input
            </label>
            <input
              id="input"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter something..."
            />
          </div>
          <button className="bg-[#154734] text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-[#154734] text-white text-center p-4">
        © 2024 My Website
      </footer>
    </div>
  );
}