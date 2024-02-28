import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-yellow-400 text-black">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="/assets/sofa.jpg"
              />
              <span className="ml-3 text-3xl md:text-5xl">Furniture</span>
            </a>
            <p className="mt-2 text-white text-md">
              Find the best Furniture that you want
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-gray-900 mb-3 text-xl">
                About Us
              </h2>
              <nav className="list-none mb-10 text-lg">
                <li>
                  <a className="text-white hover:text-gray-800">Our Story</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Our Design</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Desiginer</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-gray-900 mb-3 text-xl">
                Customer service
              </h2>
              <nav className="list-none mb-10 text-lg">
                <li>
                  <a className="text-white hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Products</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Contacts</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-gray-900 mb-3 text-xl">
                Support
              </h2>
              <nav className="list-none mb-10 text-lg">
                <li>
                  <a className="text-white hover:text-gray-800">FAQs</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Shipping</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Return</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-gray-900 mb-3 text-xl">
                Newsletters
              </h2>
              <input className="p-3 w-full rounded-md mb-3 md:mb-0"></input>
            </div>
          </div>
        </div>
        <div className="bg-yellow-600">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-center sm:text-left">
              © 2024 Job Board —
              <a
                href=""
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                @joboard
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-white">
                <FaTwitter />
              </a>
              <a className="ml-3 text-white">
               <FaInstagram />
              </a>
              <a className="ml-3 text-white">
                <FaFacebook />
              </a>
              <a className="ml-3 text-white">
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
