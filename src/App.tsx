import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                CloudFrugal
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-16 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Optimize Your Cloud Costs</span>
              <span className="block text-primary-600 dark:text-primary-400">Intelligently</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experience the power of AI-driven cloud cost optimization. Automate savings, optimize resources, and gain deep insights into your cloud infrastructure with CloudFrugal.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                Get Started for Free
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-16 sm:mt-24">
            <div className="relative rounded-xl bg-gray-100 dark:bg-gray-800 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
              <div className="relative mx-auto max-w-4xl">
                <div className="aspect-w-16 aspect-h-9 w-full bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-400 dark:text-gray-600 mb-4">CloudFrugal Dashboard</div>
                      <p className="text-gray-500 dark:text-gray-500">Your cloud cost optimization dashboard will appear here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
