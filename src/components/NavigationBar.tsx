
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, BarChart2, Users, Power, Menu, X, Calculator, LogOut, User } from "lucide-react";
import { AuthContext } from "../App";
import { supabase } from "../integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useContext(AuthContext);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-sandile-orange" />
              <span className="text-xl font-semibold text-sandile-blue">
                Sandile Energies
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/dashboard" icon={BarChart2} text="Dashboard" />
            <NavLink to="/trading" icon={Power} text="Energy Trading" />
            <NavLink to="/estimate" icon={Calculator} text="Price Estimator" />
            <NavLink to="/community" icon={Users} text="Community" />
            
            {session ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-sandile-blue transition-colors duration-200 group">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-gray-800 hover:bg-sandile-softBlue hover:text-sandile-blue transition-colors"
                  >
                    My Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-gray-800 hover:bg-sandile-softBlue hover:text-sandile-blue transition-colors"
                  >
                    Settings
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-sandile-softBlue hover:text-sandile-blue transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white rounded-lg hover:from-sandile-lightBlue hover:to-sandile-blue transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-sandile-blue"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg animate-fade-in">
            <MobileNavLink to="/dashboard" icon={BarChart2} text="Dashboard" />
            <MobileNavLink to="/trading" icon={Power} text="Energy Trading" />
            <MobileNavLink to="/estimate" icon={Calculator} text="Price Estimator" />
            <MobileNavLink to="/community" icon={Users} text="Community" />
            
            {session ? (
              <>
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Account
                </div>
                <MobileNavLink to="/profile" icon={User} text="My Profile" />
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-sandile-blue hover:bg-gray-50 transition-colors duration-200 text-left"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <div className="px-3 pt-4">
                <Link
                  to="/auth"
                  className="w-full flex justify-center px-4 py-2 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white rounded-lg hover:from-sandile-lightBlue hover:to-sandile-blue transition-all duration-300"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, icon: Icon, text }: { to: string; icon: any; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-600 hover:text-sandile-blue transition-colors duration-200"
  >
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon: Icon, text }: { to: string; icon: any; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-sandile-blue hover:bg-gray-50 transition-colors duration-200"
  >
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </Link>
);

export default NavigationBar;
