import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AdPlaceholder from './AdPlaceholder';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {/* Top Ad Banner */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4">
          <AdPlaceholder size="leaderboard" title="Advertisement Space" />
        </div>
      </div>

      <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-1.5 md:p-2 rounded-lg shadow-md">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-lg md:text-2xl font-bold text-white">
                CareerHub
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2 flex-wrap">
              <Link to="/" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/') ? 'bg-blue-800 font-bold' : ''}`}>
                Home
              </Link>
              <Link to="/latest-jobs" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/latest-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Latest Jobs
              </Link>
              <Link to="/govt-jobs" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/govt-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Govt Jobs
              </Link>
              <Link to="/railway-jobs" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/railway-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Railway Jobs
              </Link>
              <Link to="/bank-jobs" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/bank-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Bank Jobs
              </Link>
              <Link to="/privacy-policy" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/privacy-policy') ? 'bg-blue-800 font-bold' : ''}`}>
                Privacy Policy
              </Link>
              <Link to="/contact-us" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/contact-us') ? 'bg-blue-800 font-bold' : ''}`}>
                Contact Us
              </Link>
              <Link to="/disclaimer" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/disclaimer') ? 'bg-blue-800 font-bold' : ''}`}>
                Disclaimer
              </Link>
              <Link to="/about-us" className={`text-white hover:bg-blue-700 transition font-medium px-2 xl:px-3 py-2 rounded-lg text-sm xl:text-base ${isActive('/about-us') ? 'bg-blue-800 font-bold' : ''}`}>
                About Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/') ? 'bg-blue-800 font-bold' : ''}`}>
                Home
              </Link>
              <Link to="/latest-jobs" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/latest-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Latest Jobs
              </Link>
              <Link to="/govt-jobs" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/govt-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Govt Jobs
              </Link>
              <Link to="/railway-jobs" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/railway-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Railway Jobs
              </Link>
              <Link to="/bank-jobs" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/bank-jobs') ? 'bg-blue-800 font-bold' : ''}`}>
                Bank Jobs
              </Link>
              <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/privacy-policy') ? 'bg-blue-800 font-bold' : ''}`}>
                Privacy Policy
              </Link>
              <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/contact-us') ? 'bg-blue-800 font-bold' : ''}`}>
                Contact Us
              </Link>
              <Link to="/disclaimer" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/disclaimer') ? 'bg-blue-800 font-bold' : ''}`}>
                Disclaimer
              </Link>
              <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className={`block text-white hover:bg-blue-700 py-2 px-3 rounded-lg transition ${isActive('/about-us') ? 'bg-blue-800 font-bold' : ''}`}>
                About Us
              </Link>
            </nav>
          )}

          {/* Search Bar - Hidden on Job Detail and Apply Pages */}
          {!location.pathname.startsWith('/job/') && !location.pathname.startsWith('/apply/') && (
            <div className="py-3 md:py-4 border-t border-blue-500">
              <div className="flex">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search Sarkari Naukri, Government Jobs..."
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 border-2 border-blue-400 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500 text-sm md:text-base"
                />
                <button
                  onClick={handleSearch}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-r-lg transition shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <span className="hidden sm:inline">Search Jobs</span>
                  <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
