
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { ChevronsUpDown, Calculator, MapPin, ArrowRight, Clock, Zap, ChevronDown } from "lucide-react";
import Footer from "../components/Footer";

const PriceEstimator = () => {
  const [location, setLocation] = useState("");
  const [energyAmount, setEnergyAmount] = useState("10");
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [season, setSeason] = useState("normal");
  const [showResults, setShowResults] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [estimatedSavings, setEstimatedSavings] = useState(0);
  const [gridPrice, setGridPrice] = useState(0);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Base price per kWh in different regions (in KES)
    const basePrices: Record<string, number> = {
      "nairobi": 25.5,
      "mombasa": 26.2,
      "kisumu": 25.8,
      "nakuru": 25.3,
      "eldoret": 25.7,
      "other": 26.0
    };
    
    // Adjust for time of day
    const timeMultiplier = timeOfDay === "peak" ? 1.2 : timeOfDay === "offpeak" ? 0.8 : 1;
    
    // Adjust for season
    const seasonMultiplier = season === "high" ? 1.15 : season === "low" ? 0.9 : 1;
    
    // Calculate P2P price
    const basePrice = basePrices[location.toLowerCase()] || basePrices.other;
    const amount = parseFloat(energyAmount);
    
    // P2P price with 15% discount from grid price
    const gridPricePerKWh = basePrice * timeMultiplier * seasonMultiplier;
    const p2pPricePerKWh = gridPricePerKWh * 0.85;
    
    setGridPrice(gridPricePerKWh * amount);
    setEstimatedPrice(p2pPricePerKWh * amount);
    setEstimatedSavings(gridPricePerKWh * amount - p2pPricePerKWh * amount);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sandile-softBlue/20">
      <NavigationBar />
      
      {/* Price Estimator Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-sandile-softYellow px-3 py-1 rounded-full text-sandile-orange text-sm font-medium mb-3">
              Cost Calculator
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-sandile-blue">
              Energy Price Estimator
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Get an estimate of how much you can save by trading energy on our platform
              compared to traditional grid prices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-sandile-blue to-sandile-lightBlue p-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Your Savings
                </h2>
              </div>
              
              <form onSubmit={calculateEstimate} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="block w-full pl-10 pr-10 py-2 border-gray-300 rounded-md shadow-sm focus:ring-sandile-blue focus:border-sandile-blue"
                      required
                    >
                      <option value="">Select your location</option>
                      <option value="nairobi">Nairobi County</option>
                      <option value="mombasa">Mombasa County</option>
                      <option value="kisumu">Kisumu County</option>
                      <option value="nakuru">Nakuru County</option>
                      <option value="eldoret">Eldoret</option>
                      <option value="other">Other regions</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Energy Amount (kWh)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Zap className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={energyAmount}
                      onChange={(e) => setEnergyAmount(e.target.value)}
                      className="block w-full pl-10 pr-12 py-2 border-gray-300 rounded-md shadow-sm focus:ring-sandile-blue focus:border-sandile-blue"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">kWh</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time of Day
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setTimeOfDay("offpeak")}
                      className={`p-2 rounded-md border text-sm ${
                        timeOfDay === "offpeak"
                        ? "bg-sandile-softBlue text-sandile-blue border-sandile-blue"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-blue"
                      } transition-colors`}
                    >
                      Off-Peak
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimeOfDay("day")}
                      className={`p-2 rounded-md border text-sm ${
                        timeOfDay === "day"
                        ? "bg-sandile-softBlue text-sandile-blue border-sandile-blue"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-blue"
                      } transition-colors`}
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimeOfDay("peak")}
                      className={`p-2 rounded-md border text-sm ${
                        timeOfDay === "peak"
                        ? "bg-sandile-softBlue text-sandile-blue border-sandile-blue"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-blue"
                      } transition-colors`}
                    >
                      Peak
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Season
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setSeason("low")}
                      className={`p-2 rounded-md border text-sm ${
                        season === "low"
                        ? "bg-sandile-softGreen text-sandile-green border-sandile-green"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-green"
                      } transition-colors`}
                    >
                      Low Demand
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeason("normal")}
                      className={`p-2 rounded-md border text-sm ${
                        season === "normal"
                        ? "bg-sandile-softGreen text-sandile-green border-sandile-green"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-green"
                      } transition-colors`}
                    >
                      Normal
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeason("high")}
                      className={`p-2 rounded-md border text-sm ${
                        season === "high"
                        ? "bg-sandile-softGreen text-sandile-green border-sandile-green"
                        : "bg-white text-gray-700 border-gray-300 hover:border-sandile-green"
                      } transition-colors`}
                    >
                      High Demand
                    </button>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white rounded-md hover:from-sandile-lightBlue hover:to-sandile-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sandile-blue transition-all duration-300 flex items-center justify-center"
                  >
                    Calculate Savings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
            
            {/* Results Display */}
            <div className="lg:col-span-3">
              {showResults ? (
                <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-up">
                  <div className="bg-gradient-to-r from-sandile-green to-sandile-lightGreen p-4">
                    <h2 className="text-xl font-semibold text-white">
                      Your Estimated Savings
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-sandile-softBlue/30 rounded-lg p-4 text-center">
                        <p className="text-gray-500 text-sm mb-1">Traditional Grid Cost</p>
                        <p className="text-2xl font-bold text-sandile-blue">
                          KES {gridPrice.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          For {energyAmount} kWh
                        </p>
                      </div>
                      
                      <div className="bg-sandile-softGreen/30 rounded-lg p-4 text-center">
                        <p className="text-gray-500 text-sm mb-1">P2P Energy Cost</p>
                        <p className="text-2xl font-bold text-sandile-green">
                          KES {estimatedPrice.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          For {energyAmount} kWh
                        </p>
                      </div>
                      
                      <div className="bg-sandile-softPeach/30 rounded-lg p-4 text-center">
                        <p className="text-gray-500 text-sm mb-1">Your Savings</p>
                        <p className="text-2xl font-bold text-sandile-orange">
                          KES {estimatedSavings.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          ({(estimatedSavings / gridPrice * 100).toFixed(1)}% off grid price)
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-sandile-blue mb-4">Savings Over Time</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <SavingsCard 
                          period="Monthly" 
                          savings={estimatedSavings * 30} 
                          consumption={parseFloat(energyAmount) * 30}
                        />
                        <SavingsCard 
                          period="Quarterly" 
                          savings={estimatedSavings * 90} 
                          consumption={parseFloat(energyAmount) * 90}
                        />
                        <SavingsCard 
                          period="Biannual" 
                          savings={estimatedSavings * 180} 
                          consumption={parseFloat(energyAmount) * 180}
                        />
                        <SavingsCard 
                          period="Yearly" 
                          savings={estimatedSavings * 365} 
                          consumption={parseFloat(energyAmount) * 365}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <div className="bg-sandile-softYellow/50 border border-sandile-softYellow rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Note:</span> These estimates are based on current market rates and may vary based on actual energy availability and demand. Prices are in Kenyan Shillings (KES).
                        </p>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <Link
                          to="/trading"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white rounded-lg hover:from-sandile-blue/90 hover:to-sandile-lightBlue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sandile-blue transition-all duration-300"
                        >
                          Start Trading Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-gray-100">
                  <div className="text-center max-w-md mx-auto">
                    <Calculator className="h-16 w-16 text-sandile-blue/30 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-sandile-blue mb-2">
                      Calculate Your Potential Savings
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Fill in the form to see how much you could save by trading energy on our P2P platform compared to traditional energy sources.
                    </p>
                    <ul className="text-left space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="bg-sandile-softGreen rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-sandile-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-sm">Get accurate estimates based on your location</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sandile-softGreen rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-sandile-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-sm">Compare P2P energy prices with grid electricity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sandile-softGreen rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-sandile-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-sm">See your potential savings over time</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const SavingsCard = ({ period, savings, consumption }: { period: string; savings: number; consumption: number }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300">
    <h4 className="text-sm font-medium text-gray-500">{period} Savings</h4>
    <p className="text-xl font-bold text-sandile-orange mt-1">KES {savings.toFixed(0)}</p>
    <p className="text-xs text-gray-500 mt-1">
      Based on {consumption.toFixed(1)} kWh consumption
    </p>
  </div>
);

// TypeScript fix for Link component
const Link = ({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

export default PriceEstimator;
