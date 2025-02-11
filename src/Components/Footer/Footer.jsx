import React from 'react';

const Footer = () => {
    return (
        <div className="bg-base-200 text-base-content">
  {/* Top Footer Section */}
  <footer className="flex flex-col items-center text-center px-6 py-6 md:py-8">
    <h1 className="text-2xl font-bold">GetawayInn</h1>
    <p className="mt-2 max-w-md">
      It is a destination to give your inner soul peace.
    </p>
  </footer>

  {/* Main Footer Section */}
  <footer className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pb-8">
    {/* Follow Us Section - Centered on Small Screens, Right-Aligned on Larger Screens */}
    <nav className="flex flex-col items-center  text-center md:text-right">
      <h6 className="footer-title text-lg font-semibold">Follow Us</h6>
      <div className="flex gap-6 mt-3">
        <a href="https://www.facebook.com/fozlullah.tamim.3/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/28/facebook--v1.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/28/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/28/instagram-new.png" alt="Instagram" />
        </a>
      </div>
    </nav>
  </footer>

  {/* Bottom Copyright Section */}
  <div className="border-t bg-base-300 border-base-200 pt-4 pb-6 text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} GetawayInn. All rights reserved.
    </p>
  </div>
</div>

      
    );
};

export default Footer;