// import { FaInfoCircle } from 'react-icons/fa'; // Icon for About

const Navbar = () => {
  return (
    <nav className="bg-blue-200 text-black p-4 mb-5 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold  text-blue-700">
          Nerve Solutions
        </div>
        <div className="space-x-6 flex items-center">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#about" className="flex items-center hover:text-blue-700">
             About
          </a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
