import React from 'react';

const Footer = () => {
    return (
        <div>

        <footer className="flex justify-center bg-base-200 text-base-content  px-10 py-4">
             <aside className="grid-flow-col items-center">
                 <h1 className="text-xl font-bold text-center">GetawayInn</h1>
                 <p className="text-center">
                 It is a destination to give your inner soul peace
                 </p>
             </aside>
            
         </footer>
         <footer className="flex justify-between footer bg-base-200 text-base-content py-10 px-9 md:px-36">
             <nav>
                 <h6 className="footer-title">Services</h6>
                 <a className="link link-hover">Branding</a>
                 <a className="link link-hover">Design</a>
                 <a className="link link-hover">Marketing</a>
                 <a className="link link-hover">Advertisement</a>
             </nav>
             <nav>
                 <h6 className="footer-title">Company</h6>
                 <a className="link link-hover">About us</a>
                 <a className="link link-hover">Contact</a>
                 <a className="link link-hover">Jobs</a>
                 <a className="link link-hover">Press kit</a>
             </nav>
             <nav>
             <h6 className="footer-title">Follow Us</h6>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center link link-hover">
                        <img
                            src="https://img.icons8.com/ios-filled/24/facebook--v1.png"
                            alt="Facebook"
                            className="mr-2"
                        />
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center link link-hover">
                        <img
                            src="https://img.icons8.com/ios-filled/24/twitter.png"
                            alt="Twitter"
                            className="mr-2"
                        />
                        Twitter
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center link link-hover">
                        <img
                            src="https://img.icons8.com/ios-filled/24/instagram-new.png"
                            alt="Instagram"
                            className="mr-2"
                        />
                        Instagram
                    </a>
             </nav>

         </footer>
          <div className="border-t bg-base-300 border-base-200 pt-4 text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} GetawayInn. All rights reserved.
    </p>
  </div>
     </div>
    );
};

export default Footer;