export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      {/* Left Side - Logo */}
      <h1 className="text-xl font-bold">CS — Ticket System</h1>

      {/* Right Side - Menu */}
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">FAQ</li>
        <li className="cursor-pointer hover:text-blue-600">Changelog</li>
        <li className="cursor-pointer hover:text-blue-600">Blog</li>
        <li className="cursor-pointer hover:text-blue-600">Download</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
        <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + New Ticket
        </button>
      </ul>
    </nav>
  );
}
