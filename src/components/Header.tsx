import React, { useState } from 'react';
import { Menu, X, User, Home, HelpCircle, Bot, MessageSquare, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Homepage', icon: <Home size={20} />, path: '/' },
    { name: 'FAQ', icon: <HelpCircle size={20} />, path: '/faq' },
    { name: 'YukkthiBot', icon: <Bot size={20} />, path: '/yukkthibot' },
    { name: 'Forum', icon: <MessageSquare size={20} />, path: '/forum' },
    { name: 'About Us', icon: <Info size={20} />, path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-[#7A0000] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-bold">YUKKTHIYA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#5a0000]'
                    : 'hover:bg-[#6a0000]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="text-white hover:bg-[#6a0000] p-2 rounded-md">
              <User size={24} />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white hover:bg-[#6a0000] p-2 rounded-md"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-64 bg-[#7A0000] shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 text-white px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-[#5a0000]'
                      : 'hover:bg-[#6a0000]'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <button className="flex items-center space-x-2 text-white hover:bg-[#6a0000] w-full px-3 py-2 rounded-md text-base font-medium">
                <User size={20} />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;