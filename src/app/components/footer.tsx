import { FaLinkedin, FaGoogle, FaGithub, FaTiktok, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1 text-gray-600">
            <li>App Development</li>
            <li>Programming & Tech</li>
            <li>UI Design</li>
            <li>Video & Animation</li>
            <li>Writing & Translation</li>
            <li>Music & Audio</li>
            <li>Digital Marketing</li>
            <li>AI Services</li>
            <li>Consulting</li>
            <li>Bike</li>
            <li>Automation</li>
            <li>Mechanic</li>
            <li>Photography</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">For Clients</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Your UpPhoto account</li>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Intellectual property claims</li>
            <li>Test</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Contact</li>
            <li>Invite a Friend</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>UpPhoto Guides</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">For Freelancers</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Trust & Safety</li>
            <li>Buying on UpPhoto</li>
            <li>Selling on UpPhoto</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Business Solutions</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Events</li>
            <li>Community Standards</li>
            <li>Podcast</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>Eman Wagih. 2025</p>

          <div className="flex space-x-3 mt-3 sm:mt-0">
            <FaLinkedin className="text-blue-700 w-5 h-5" />
            <FaGoogle className="text-red-500 w-5 h-5" />
            <FaGithub className="text-black w-5 h-5" />
            <FaTiktok className="text-black w-5 h-5" />
            <FaPinterest className="text-red-600 w-5 h-5" />
          </div>

          <div className="flex space-x-2 mt-3 sm:mt-0">
            <span className="text-green-600 font-semibold cursor-pointer">English</span>
            <span className="text-gray-500 cursor-pointer">Arabic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
