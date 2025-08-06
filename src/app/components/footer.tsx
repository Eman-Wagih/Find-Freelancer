// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-10 px-6 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li><a href="#">Design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Marketing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">For Clients</h4>
          <ul className="space-y-1">
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">For Freelancers</h4>
          <ul className="space-y-1">
            <li><a href="#">Become a Seller</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-xs">© 2025 Freelancer Hub</div>
    </footer>
  );
}
