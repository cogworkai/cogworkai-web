import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Compass, MapPin, Rocket, Shield, LineChart, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: "AI Assessment & Discovery",
      description: "Comprehensive analysis of your business landscape to identify high-impact AI opportunities. We evaluate your processes, data readiness, and potential use cases.",
      features: [
        "Business process analysis",
        "AI readiness evaluation",
        "Use case identification",
        "Technology landscape review",
      ],
    },
    {
      icon: MapPin,
      title: "Strategic Roadmapping",
      description: "Custom AI implementation roadmap aligned with your business goals and budget. Clear timelines, milestones, and technology recommendations.",
      features: [
        "Phased implementation plans",
        "Budget optimization",
        "Technology stack recommendations",
        "Risk assessment & mitigation",
      ],
    },
    {
      icon: Rocket,
      title: "Implementation Guidance",
      description: "Hands-on support throughout your AI journey. From vendor selection to deployment, we ensure your AI initiatives deliver results.",
      features: [
        "Vendor evaluation & selection",
        "Integration planning",
        "Deployment oversight",
        "Performance monitoring",
      ],
    },
    {
      icon: Shield,
      title: "AI Governance & Ethics",
      description: "Establish responsible AI practices that protect your business and customers. Navigate compliance, privacy, and ethical considerations.",
      features: [
        "Policy framework development",
        "Compliance guidance",
        "Bias detection & mitigation",
        "Data privacy protocols",
      ],
    },
    {
      icon: LineChart,
      title: "Performance Optimization",
      description: "Maximize ROI from your AI investments. Continuous monitoring, refinement, and optimization of your AI systems.",
      features: [
        "KPI tracking & reporting",
        "Model performance analysis",
        "Cost optimization",
        "Scaling strategies",
      ],
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Empower your team to work effectively with AI. Training, workshops, and knowledge transfer tailored to your organization.",
      features: [
        "Custom training programs",
        "Hands-on workshops",
        "Best practices documentation",
        "Ongoing support & consultation",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Advisory <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive AI consulting designed to guide small businesses through the complexity of modern AI adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Advisory Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  phase: "Discovery",
                  description: "Deep dive into your business objectives, current capabilities, and AI aspirations. We identify quick wins and long-term opportunities.",
                },
                {
                  phase: "Analysis",
                  description: "Evaluate AI technologies, vendors, and solutions that align with your needs. We compare options and provide clear recommendations.",
                },
                {
                  phase: "Planning",
                  description: "Develop a phased implementation roadmap with defined milestones, budgets, and success metrics. Everything tailored to your timeline.",
                },
                {
                  phase: "Execution Support",
                  description: "Provide ongoing guidance as you implement AI solutions. From vendor negotiations to deployment oversight, we're with you every step.",
                },
                {
                  phase: "Optimization",
                  description: "Monitor performance, refine strategies, and scale what works. Continuous improvement to maximize your AI ROI.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.phase}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
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
              Let's Build Your AI Strategy
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a consultation to discuss your AI needs and discover how we can help.
            </p>
            <Button size="lg" asChild className="shadow-glow text-lg">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
