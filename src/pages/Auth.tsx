
import { useState } from "react";
import { supabase } from "../integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import NavigationBar from "../components/NavigationBar";
import { ArrowLeft, Mail, Lock, User, Smartphone, ChevronsUpDown, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
        
        navigate("/dashboard");
      } else if (mode === "register") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              phone: phone,
              user_type: userType,
            },
          },
        });

        if (error) throw error;
        
        toast({
          title: "Registration successful!",
          description: "Please check your email to confirm your account.",
        });
        
        setMode("login");
      } else if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        
        if (error) throw error;
        
        toast({
          title: "Password reset requested",
          description: "Check your email for a password reset link.",
        });
        
        setMode("login");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sandile-softBlue/20">
      <NavigationBar />
      
      {/* Auth Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-sandile-blue to-sandile-lightBlue p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {mode === "login" ? "Welcome Back" : mode === "register" ? "Create Account" : "Reset Password"}
              </h2>
              {mode !== "login" && (
                <button 
                  onClick={() => setMode("login")} 
                  className="text-white hover:text-sandile-sand transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              )}
            </div>
            <p className="text-white/80 mt-1">
              {mode === "login" 
                ? "Sign in to access your account" 
                : mode === "register" 
                  ? "Join our sustainable energy marketplace" 
                  : "We'll send you a link to reset your password"}
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleAuth} className="p-6 space-y-4">
            {mode === "register" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-sandile-blue focus:border-sandile-blue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Smartphone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (234) 567-8901"
                      className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-sandile-blue focus:border-sandile-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I want to
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType("buyer")}
                      className={`p-3 rounded-md border ${
                        userType === "buyer"
                        ? "bg-sandile-blue text-white border-sandile-blue"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-blue"
                      } transition-colors`}
                    >
                      Buy Energy
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType("seller")}
                      className={`p-3 rounded-md border ${
                        userType === "seller"
                        ? "bg-sandile-green text-white border-sandile-green"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-green"
                      } transition-colors`}
                    >
                      Sell Energy
                    </button>
                  </div>
                </div>
              </>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-sandile-blue focus:border-sandile-blue"
                  required
                />
              </div>
            </div>
            
            {mode !== "forgot" && (
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  {mode === "login" && (
                    <button
                      type="button"
                      onClick={() => setMode("forgot")}
                      className="text-sm text-sandile-blue hover:text-sandile-lightBlue"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-sandile-blue focus:border-sandile-blue"
                    required
                  />
                </div>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white rounded-md hover:from-sandile-lightBlue hover:to-sandile-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sandile-blue transition-all duration-300 flex justify-center"
            >
              {isLoading ? (
                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
              ) : mode === "login" ? (
                "Sign In"
              ) : mode === "register" ? (
                "Create Account"
              ) : (
                "Send Reset Link"
              )}
            </button>
            
            <div className="text-center mt-4">
              {mode === "login" ? (
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("register")}
                    className="text-sandile-blue hover:text-sandile-lightBlue"
                  >
                    Create one
                  </button>
                </p>
              ) : mode === "register" && (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-sandile-blue hover:text-sandile-lightBlue"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
            
            {mode === "login" && (
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
            )}
            
            {mode === "login" && (
              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Apple</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </button>
              </div>
            )}
          </form>
          
          {/* Verification Notice */}
          {mode === "register" && (
            <div className="p-4 bg-sandile-softGreen/50 border-t border-sandile-green/20">
              <div className="flex items-start space-x-3">
                <BadgeCheck className="h-5 w-5 text-sandile-green mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-medium text-sandile-green">Verification Required</p>
                  <p className="mt-1">After registration, you'll need to complete KYC verification by uploading your National ID or Passport.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Auth;
