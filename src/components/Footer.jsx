import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-black text-white w-full">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">MarketEase</h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Your one-stop shop for everything you need. Fast delivery and unbeatable prices!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Shop</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Shipping</a></li>
                        <li><a href="#" className="hover:text-white">Returns</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-white text-xl" /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white text-xl" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white text-xl" /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 text-center text-sm py-4 text-gray-400">
                © {new Date().getFullYear()} MarketEase. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
