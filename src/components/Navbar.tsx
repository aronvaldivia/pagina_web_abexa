import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const logos = [
  'https://mcusercontent.com/c379e3356454ef2a14873d293/images/0cb4d9c4-b9e0-96da-8272-4a0714662e7e.png',
  'https://mcusercontent.com/c379e3356454ef2a14873d293/images/cc2d8465-5220-c03b-6980-426570a33af1.png'
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => {
        setCurrentLogo((prev) => (prev + 1) % logos.length);
      }, 500);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleInicioClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed w-screen bg-blue-600/70 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition">
            <div className="relative w-40 h-20 overflow-hidden rounded-lg">
              {logos.map((logo, index) => (
                <div
                  key={logo}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    index === currentLogo
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-full opacity-0'
                  }`}
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={handleInicioClick}
              className="text-white hover:text-blue-200 transition text-xl font-sans"
            >
              Inicio
            </button>
            <Link to="/products" className="text-white hover:text-blue-200 transition text-xl font-sans">Nuestros Productos</Link>
            
            {/* About Dropdown */}
            <div className="relative group text-xl font-sans">
              <button 
                className="flex items-center text-white hover:text-blue-200 transition"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                Intranets <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="https://tgps.abexacloud.com/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group/item">
                    <span className="flex-1">TGPS</span>
                    <img 
                      src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/d26e192f-290f-9afb-3af6-d47f010a7b80.png"
                      alt="Company"
                      className="w-12 h-12 rounded object-cover opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                  <a href="https://xbest.abexacloud.com/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group/item">
                    <span className="flex-1">XBEST</span>
                    <img 
                      src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/7f5bbff7-7ab0-125e-a1fb-22b0bc258828.png"
                      alt="Team"
                      className="w-12 h-12 rounded object-cover opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                  <a href="https://tgps.abexacloud.com/Usuario/LoginWA" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group/item">
                    <span className="flex-1">MOVIL</span>
                    <img 
                      src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/277276c7-11a2-4a5e-3bea-434bd81e4ff0.png"
                      alt="Company"
                      className="w-12 h-12 rounded object-cover opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3 px-4">
              <button 
                onClick={() => {
                  handleInicioClick();
                  setIsOpen(false);
                }} 
                className="text-white hover:text-blue-200 transition text-lg text-left"
              >
                Inicio
              </button>
              <Link 
                to="/products"
                className="text-white hover:text-blue-200 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                Nuestros Servicios
              </Link>
              
              {/* Mobile About Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center text-white hover:text-blue-200 transition w-full text-lg"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  Intranets <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 mt-2 space-y-4 ${isAboutOpen ? 'block' : 'hidden'}`}>
                  <a 
                    href="https://tgps.abexacloud.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-blue-200 transition gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>TGPS</span>
                    <img 
                      src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/d26e192f-290f-9afb-3af6-d47f010a7b80.png"
                      alt="Company"
                      className="w-10 h-10 rounded object-cover"
                    />
                  </a>
                  <a 
                    href="https://xbest.abexacloud.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-blue-200 transition gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>XBEST</span>
                    <img 
                      src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/7f5bbff7-7ab0-125e-a1fb-22b0bc258828.png"
                      alt="Team"
                      className="w-10 h-10 rounded object-cover"
                    />
                  </a>
                  <a 
                    href="https://tgps.abexacloud.com/Usuario/LoginWA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-blue-200 transition gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>MOVIL</span>
                    <img 
                      src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/277276c7-11a2-4a5e-3bea-434bd81e4ff0.png"
                      alt="Company"
                      className="w-10 h-10 rounded object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;