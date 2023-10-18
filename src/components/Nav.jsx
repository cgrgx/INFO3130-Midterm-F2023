import logo from "../assets/images/logo.png";
function Nav() {
  return (
    <header>
      <nav className="px-7 py-2 relative select-none bg-grey w-full bg-blue-950 flex justify-between items-center">
        <img src={logo} alt="Sneakers Store Logo" className="h-20 w-auto p-2" />
        <div className="flex sm:gap-1 justify-end">
          <a
            href="#"
            className="px-4 py-2 text-md text-white font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Home
          </a>
          <a
            href="#"
            className="px-4 py-2 text-md text-white font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Sneakers
          </a>
          <a
            href="#"
            className="px-4 py-2 text-md text-white font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
