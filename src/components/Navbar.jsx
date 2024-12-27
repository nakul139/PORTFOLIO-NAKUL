

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <h1 className="font-bold text-xl mx-2 bg-white rounded-full p-3 text-black">
          NJ
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-lg">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>

      {/* Social Media Links */}
      
    </nav>
  );
};

export default Navbar;
