
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Sun, Users, Zap, Shield, ChevronRight, ArrowRight, Star, Sparkles, BarChart2, Leaf, Wind, Bolt } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sandile-softBlue/20">
      <NavigationBar />
      
      {/* Decorative elements */}
      <div className="fixed -z-10 top-1/4 right-0 w-64 h-64 bg-sandile-softGreen rounded-full blur-3xl opacity-20"></div>
      <div className="fixed -z-10 bottom-1/4 left-0 w-80 h-80 bg-sandile-softPeach rounded-full blur-3xl opacity-20"></div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sandile-blue/10 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-sandile-softGreen/30 via-transparent to-sandile-softBlue/30 opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-up">
            <div className="inline-block bg-gradient-to-r from-sandile-blue/10 to-sandile-softGreen/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sandile-blue font-semibold text-sm sm:text-base flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-sandile-orange" />
                Sustainable Energy For Africa
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sandile-blue mb-6">
              Powering Africa Through
              <span className="bg-gradient-to-r from-sandile-blue to-sandile-lightGreen bg-clip-text text-transparent"> P2P Energy Trading</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join the renewable energy revolution. Trade surplus energy, earn rewards, and help bring reliable electricity to 600 million people across Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/trading"
                className="px-8 py-3 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white rounded-lg hover:from-sandile-lightBlue hover:to-sandile-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
              >
                <span className="flex items-center">
                  Start Trading 
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                to="/dashboard"
                className="px-8 py-3 bg-white text-sandile-blue border-2 border-sandile-blue rounded-lg hover:bg-sandile-blue hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-sandile-softBlue/10 via-transparent to-sandile-softPeach/10 opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-sandile-softBlue px-3 py-1 rounded-full text-sandile-blue text-sm font-medium mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-sandile-blue mb-4">
              Transforming Africa's Energy Future
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Sandile Energies, we're committed to democratizing energy access across Africa through innovative peer-to-peer trading solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-sandile-blue mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To create a sustainable energy ecosystem that empowers communities across Africa by making clean energy accessible, affordable, and reliable. We're tackling energy poverty while promoting renewable solutions.
                  </p>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-sandile-green mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    A future where every African has reliable access to sustainable energy, communities are self-sufficient in their energy needs, and surplus energy becomes a source of income for households.
                  </p>
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-sandile-orange mb-3">Our Impact</h3>
                  <p className="text-gray-600">
                    We've helped communities reduce energy costs by up to 25%, increased renewable energy adoption, and created new income streams for households with solar installations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Solar panels in an African village" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="bg-sandile-softGreen rounded-full p-2">
                    <Leaf className="h-5 w-5 text-sandile-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-sandile-blue">600+ Million</h4>
                    <p className="text-xs text-gray-500">People in Africa lack reliable electricity access. We're changing that, one connection at a time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-sandile-blue/5 via-transparent to-sandile-softGreen/10 rounded-[50%] blur-3xl transform translate-x-[-30%] translate-y-[-20%] w-[80%] h-[80%] opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center text-sandile-blue mb-4">How It Works</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Our platform makes renewable energy trading simple, secure, and beneficial for everyone</p>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            onMouseLeave={() => setActiveFeature(-1)}
          >
            <FeatureCard
              icon={Sun}
              title="Renewable Energy"
              description="Trade surplus solar and wind energy directly with other users"
              color="sandile-orange"
              isActive={activeFeature === 0}
              onMouseEnter={() => setActiveFeature(0)}
            />
            <FeatureCard
              icon={Users}
              title="P2P Trading"
              description="Connect with energy producers and consumers in your community"
              color="sandile-lightBlue"
              isActive={activeFeature === 1}
              onMouseEnter={() => setActiveFeature(1)}
            />
            <FeatureCard
              icon={Leaf}
              title="Sustainable Future"
              description="Contribute to a greener and more sustainable Africa"
              color="sandile-lightGreen"
              isActive={activeFeature === 2}
              onMouseEnter={() => setActiveFeature(2)}
            />
            <FeatureCard
              icon={Shield}
              title="Secure Platform"
              description="Advanced security for all energy transactions"
              color="sandile-blue"
              isActive={activeFeature === 3}
              onMouseEnter={() => setActiveFeature(3)}
            />
          </div>
        </div>
      </section>

      {/* Stats Section with wavy top border */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-white" style={{ 
          clipPath: "polygon(0% 0%, 5% 60%, 10% 0%, 15% 60%, 20% 0%, 25% 60%, 30% 0%, 35% 60%, 40% 0%, 45% 60%, 50% 0%, 55% 60%, 60% 0%, 65% 60%, 70% 0%, 75% 60%, 80% 0%, 85% 60%, 90% 0%, 95% 60%, 100% 0%, 100% 100%, 0% 100%)"
        }}></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="350+" label="Active Users" icon={Users} />
            <StatCard number="12.5 MWh" label="Energy Traded" icon={Bolt} />
            <StatCard number="24/7" label="Monitoring" icon={BarChart2} />
            <StatCard number="100%" label="Renewable" icon={Wind} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block bg-sandile-softGreen px-3 py-1 rounded-full text-sandile-green text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-sandile-blue mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied users already benefiting from our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Sandile Energies has transformed how we manage our solar energy. We're now able to sell excess power and generate additional income."
              author="John Doe"
              role="Solar Farm Owner"
              rating={5}
              color="sandile-blue"
            />
            <TestimonialCard
              quote="The platform's real-time monitoring helps us optimize our energy usage. It's user-friendly and the support team is excellent."
              author="Jane Smith"
              role="Business Owner"
              rating={5}
              color="sandile-green"
            />
            <TestimonialCard
              quote="As a small business owner, having reliable access to renewable energy has significantly reduced our operating costs."
              author="Mike Johnson"
              role="Restaurant Owner"
              rating={4}
              color="sandile-orange"
            />
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sandile-softBlue/10 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-sandile-softGreen/20 via-transparent to-sandile-softPeach/20 opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <span className="inline-block bg-sandile-softYellow px-3 py-1 rounded-full text-sandile-orange text-sm font-medium mb-3">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-sandile-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our platform
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="How does P2P energy trading work?"
              answer="Energy producers can list their surplus renewable energy on our marketplace, where consumers can purchase it directly. Smart contracts ensure secure and automated transactions."
            />
            <FaqItem
              question="Who can participate in the marketplace?"
              answer="Any household, business, or community with renewable energy generation capacity can participate as a seller. Anyone seeking reliable, renewable energy can participate as a buyer."
            />
            <div className="text-center mt-8">
              <Link
                to="/faq"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sandile-blue/10 to-sandile-softGreen/30 text-sandile-blue rounded-lg hover:bg-sandile-blue hover:text-white transition-colors duration-300"
              >
                View all FAQs <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sandile-blue to-sandile-lightBlue text-white relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZtNiAwdjZtLTYtNnY2Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join the Energy Revolution Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of the solution to Africa's energy challenges. Start trading renewable energy and contribute to a sustainable future.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-4 bg-white text-sandile-blue rounded-lg hover:bg-sandile-softGreen/80 transition-all duration-300 shadow-lg hover:shadow-xl group hover:translate-y-[-2px]"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  isActive,
  onMouseEnter,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
  isActive: boolean;
  onMouseEnter: () => void;
}) => (
  <div 
    className={`p-6 rounded-xl border transition-all duration-300 animate-fade-up cursor-pointer ${
      isActive 
        ? `bg-${color} text-white border-transparent shadow-lg transform scale-105` 
        : `bg-white/60 backdrop-blur-sm border-gray-100 shadow-sm hover:shadow-md hover:border-${color}/30`
    }`}
    onMouseEnter={onMouseEnter}
  >
    <Icon className={`h-12 w-12 mb-4 ${isActive ? "text-white" : `text-${color}`}`} />
    <h3 className={`text-xl font-semibold mb-2 ${isActive ? "text-white" : `text-${color}`}`}>{title}</h3>
    <p className={isActive ? "text-white/90" : "text-gray-600"}>{description}</p>
  </div>
);

const StatCard = ({
  number,
  label,
  icon: Icon,
}: {
  number: string;
  label: string;
  icon: any;
}) => (
  <div className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
    <Icon className="h-10 w-10 mx-auto mb-4 text-white" />
    <div className="text-3xl font-bold mb-1 animate-pulse-soft">{number}</div>
    <div className="text-white/80">{label}</div>
  </div>
);

const TestimonialCard = ({
  quote,
  author,
  role,
  rating,
  color,
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
  color: string;
}) => (
  <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-sandile-blue/30 hover:translate-y-[-5px]">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 text-${color} fill-current`} />
      ))}
    </div>
    <p className="text-gray-600 mb-4 italic">{quote}</p>
    <div>
      <p className={`font-semibold text-${color}`}>{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-sandile-blue/30">
    <h3 className="text-lg font-semibold text-sandile-blue mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Index;
