export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-[2rem]">🍋</span>
            <span style={{ color: '#334D2F' }}>Little Lemon</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:opacity-70 transition-opacity" style={{ color: '#334D2F' }}>
              Home
            </a>
            <a href="#about" className="hover:opacity-70 transition-opacity" style={{ color: '#334D2F' }}>
              About
            </a>
            <a href="#booking" className="hover:opacity-70 transition-opacity" style={{ color: '#334D2F' }}>
              Book Table
            </a>
            <a href="#contact" className="hover:opacity-70 transition-opacity" style={{ color: '#334D2F' }}>
              Contact
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" style={{ color: '#334D2F' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
