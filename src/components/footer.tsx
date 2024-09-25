import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex flex-col sm:flex-row bg-black align-center items-center justify-between py-4 px-6 text-white font-sm sm:font-base font-bold gap-4 sm:gap-0">
      <ul className="flex gap-4">
        <li>
          <Link to="/impressum" className="hover:underline">
            Impressum
          </Link>
        </li>
        <li>
          <Link to="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.instagram.com/journeyman.cycles/"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </li>
      </ul>
      {/* <div className="mail flex items-center">
        <FaEnvelope className="mr-2" />
        <a
          href="mailto:info@journeymancycles.de"
          className="hover:text-blue-800 hover:underline"
        >
          info@journeymancycles.de
        </a>
      </div> */}
    </footer>
  );
}
