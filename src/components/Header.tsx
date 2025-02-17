import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface Props {
  onShowAWSQuery: () => void;
}

const Header: React.FC<Props> = ({ onShowAWSQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">IWS Error Logs Dashboard</h1>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Slide-out menu */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
        <div className="absolute right-0 h-full w-80 bg-white shadow-xl">
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <button
                  onClick={() => {
                    onShowAWSQuery();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Terminal className="h-5 w-5" />
                  <span>AWS Query Instructions</span>
                </button>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-900 mb-2">About</h3>
                <p className="text-sm text-gray-600">
                  This dashboard visualizes error logs from IWS games, helping identify and analyze issues across different platforms and browsers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;