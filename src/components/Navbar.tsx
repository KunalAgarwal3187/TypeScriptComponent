import React from 'react';

interface NavbarProps {
  logo: string;
  links: { label: string; href: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600 tracking-tight">{logo}</span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile menu button placeholder */}
          <div className="flex items-center sm:hidden">
             <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
