export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10 text-sm">
        
        {/* Column 1 */}
        <div>
          <h4 className="text-white font-bold mb-2">CS — Ticket System</h4>
          <p>
            A company ticket system helps track and manage employee or customer requests.
Each request is logged as a “ticket” with a unique ID.
Tickets contain details like issue type, description, priority, and status.
Requests can be submitted through email, portal, or chat.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-bold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-bold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>Product & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white font-bold mb-2">Social Links</h4>
          <ul className="space-y-1">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Email: support@cs.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 py-4 text-xs">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}
