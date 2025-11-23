import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Target, Zap, ArrowRight } from "lucide-react";
import logo from "@/assets/cogwork-logo-v3.png";
import { useState, useEffect } from "react";
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const benefits = [{
    icon: Brain,
    title: "Expert AI Guidance",
    description: "Navigate the complex AI landscape with confidence. We cut through the noise to deliver solutions that work."
  }, {
    icon: Target,
    title: "Perfect Match",
    description: "Connect your specific business needs with the right AI technologies, tailored to your budget and goals."
  }, {
    icon: Zap,
    title: "Rapid Results",
    description: "Stop wasting time on trial and error. Get actionable roadmaps and implementation strategies fast."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="mb-8 animate-scale-in" style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
              <img src={logo} alt="CogworkAI" className="h-32 w-auto mx-auto drop-shadow-[0_0_30px_rgba(252,63,173,0.5)]" />
            </div>
            <h1 className="text-6xl lg:text-9xl font-bold mb-10 bg-gradient-primary bg-clip-text text-transparent leading-tight md:text-7xl">
              Elevate Your AI Game
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-12 leading-relaxed font-medium">Get expert advice connecting your business with the right AI technologies — no hype, just results.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" asChild className="shadow-glow text-xl px-10 py-7">
                <Link to="/contact">
                  Start Your AI Roadmap <ArrowRight className="ml-2" size={24} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-xl px-10 py-7 border-primary/50 hover:border-primary">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-primary">CogworkAI</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <benefit.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Your Path to AI Excellence
            </h2>
            <div className="space-y-8">
              {[{
              step: "01",
              title: "Assessment",
              description: "We analyze your business needs, challenges, and objectives to understand where AI can create the most value."
            }, {
              step: "02",
              title: "Strategy",
              description: "Receive a custom AI roadmap with clear technology recommendations matched to your budget and timeline."
            }, {
              step: "03",
              title: "Implementation",
              description: "Get hands-on guidance as you deploy the right AI solutions, ensuring smooth integration and maximum ROI."
            }].map((item, index) => <div key={index} className="flex gap-6 items-start animate-fade-in" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  <div className="text-5xl font-bold text-primary/20">{item.step}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build your custom AI roadmap today.
            </p>
            <Button size="lg" asChild className="shadow-glow text-lg">
              <Link to="/contact">
                Get AI Guidance <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;