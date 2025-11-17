import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Users, Rocket, Heart } from "lucide-react";

const Careers = () => {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We're at the cutting edge of AI advisory, constantly exploring new ways to deliver value to our clients.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Our team thrives on collaboration. We believe the best solutions come from diverse perspectives.",
    },
    {
      icon: Heart,
      title: "Client Impact",
      description: "Every day, we help businesses transform. Your work will have real, measurable impact.",
    },
  ];

  const openings = [
    {
      title: "Senior AI Consultant",
      type: "Full-time",
      location: "Remote / Hybrid",
      description: "Lead client engagements, develop AI strategies, and mentor junior consultants. 5+ years experience in AI/ML consulting required.",
    },
    {
      title: "AI Solutions Architect",
      type: "Full-time",
      location: "Remote",
      description: "Design and architect AI solutions for enterprise clients. Strong technical background with cloud platforms and AI frameworks.",
    },
    {
      title: "Business Development Manager",
      type: "Full-time",
      location: "Hybrid",
      description: "Drive growth by identifying new opportunities and building relationships with potential clients in the SMB space.",
    },
    {
      title: "Junior AI Analyst",
      type: "Full-time",
      location: "Remote",
      description: "Support senior consultants in research, analysis, and client deliverables. Perfect for recent graduates passionate about AI.",
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
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Help shape the future of AI adoption for small businesses. Work with cutting-edge technology and make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Work at CogworkAI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <value.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perks & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Competitive salary & equity",
                "Comprehensive health coverage",
                "Flexible remote work",
                "Professional development budget",
                "Latest tech & tools",
                "Unlimited PTO",
                "Team retreats & events",
                "Mentorship programs",
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
            </div>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className="text-primary">▸</span> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="text-primary">▸</span> {job.location}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" asChild className="border-primary/50 hover:border-primary whitespace-nowrap">
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for exceptional talent. Send us your resume and let's talk about how you can contribute.
            </p>
            <Button size="lg" asChild className="shadow-glow text-lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
