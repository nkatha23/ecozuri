
import { Mail, Phone, MapPin, ArrowRight, Sun, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sandile-blue text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-8 w-8 text-sandile-sand" />
              <span className="text-xl font-semibold text-white">
                Sandile Energies
              </span>
            </div>
            <p className="text-sandile-softBlue mb-6">
              Transforming Africa's energy landscape through peer-to-peer renewable energy trading.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Instagram} href="#" />
              <SocialLink icon={Linkedin} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sandile-sand">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/dashboard" text="Dashboard" />
              </li>
              <li>
                <FooterLink href="/trading" text="Energy Trading" />
              </li>
              <li>
                <FooterLink href="/community" text="Community" />
              </li>
              <li>
                <FooterLink href="/estimate" text="Price Estimator" />
              </li>
              <li>
                <FooterLink href="/auth" text="Login / Register" />
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sandile-sand">About Us</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#our-mission" text="Our Mission" />
              </li>
              <li>
                <FooterLink href="#our-team" text="Our Team" />
              </li>
              <li>
                <FooterLink href="#how-it-works" text="How It Works" />
              </li>
              <li>
                <FooterLink href="#sustainability" text="Sustainability" />
              </li>
              <li>
                <FooterLink href="#careers" text="Careers" />
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sandile-sand">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-sandile-softBlue" />
                <span>info@sandileenergies.com</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-sandile-softBlue" />
                <span>+254 113 325 992</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-sandile-softBlue" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            <a 
              href="#contact-form" 
              className="inline-flex items-center mt-4 text-sandile-sand hover:text-white transition-colors duration-200"
            >
              <span>Get in touch</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="border-t border-sandile-blue/30 mt-12 pt-8">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-sandile-softBlue text-center mb-4">
              Stay updated with the latest news and developments in renewable energy.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-sandile-sand text-sandile-blue px-4 py-2 rounded-r-md hover:bg-sandile-sand/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-sandile-blue border-t border-sandile-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sandile-softBlue text-sm">
              &copy; {new Date().getFullYear()} Sandile Energies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terms" className="text-sm text-sandile-softBlue hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#privacy" className="text-sm text-sandile-softBlue hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-sm text-sandile-softBlue hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <a 
    href={href} 
    className="text-sandile-softBlue hover:text-white transition-colors duration-200"
  >
    {text}
  </a>
);

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a 
    href={href} 
    className="bg-sandile-blue/30 p-2 rounded-full hover:bg-sandile-blue/50 transition-colors duration-200"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default Footer;
