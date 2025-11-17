import { Card } from "@/components/ui/card";
import { Brain, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Brain,
      title: "Deep AI Expertise",
      description: "15+ years combined experience in AI, machine learning, and enterprise technology implementations across industries.",
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "We've guided 100+ businesses through AI transformation, focusing on practical solutions that deliver measurable ROI.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our clients see an average 40% improvement in operational efficiency within the first 6 months of implementation.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certified AI consultants with credentials from leading technology platforms and continuous education in emerging AI trends.",
    },
  ];

  const values = [
    {
      title: "Clarity Over Hype",
      description: "We cut through AI marketing noise to deliver honest, actionable guidance that serves your business needs.",
    },
    {
      title: "Budget-Conscious",
      description: "Not every business needs the latest AI model. We match solutions to your budget and scale appropriately.",
    },
    {
      title: "Implementation Focus",
      description: "Strategy without execution is just talk. We stay with you through implementation to ensure success.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-40" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">CogworkAI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're AI advisors who believe small businesses deserve expert guidance without the enterprise price tag. No fluff, no overselling—just clear paths to AI success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The AI landscape is overwhelming. Every vendor claims their solution is revolutionary. Every consultant promises transformation. We exist to be different—to be the trusted advisor who helps you navigate this complexity with honesty, expertise, and a focus on what actually works for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Businesses Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="space-y-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-6 items-start animate-fade-in border-l-4 border-primary pl-6 py-4"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's have an honest conversation about your AI needs and whether we're the right fit to help you succeed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
