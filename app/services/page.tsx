import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Interior Designing",
      description: "Transform your space with our expert interior design services. We create beautiful, functional spaces that reflect your style and needs.",
      features: [
        "Custom design solutions",
        "Space planning and optimization",
        "Material and color selection",
        "Furniture and decor consultation",
        "3D visualization",
      ],
      icon: "🎨",
    },
    {
      title: "Construction Management",
      description: "Comprehensive construction management services ensuring your project is completed on time and within budget.",
      features: [
        "Project planning and scheduling",
        "Cost estimation and control",
        "Quality assurance",
        "Site supervision",
        "Progress monitoring",
      ],
      icon: "🏗️",
    },
    {
      title: "Plan Approvals",
      description: "Navigate complex building regulations with our expert guidance and ensure your plans meet all requirements.",
      features: [
        "Building code compliance",
        "Documentation preparation",
        "Permit processing",
        "Regulatory liaison",
        "Fast-track approvals",
      ],
      icon: "📋",
    },
    {
      title: "Renovation Works",
      description: "Revitalize your existing space with our professional renovation services.",
      features: [
        "Complete home renovations",
        "Kitchen and bathroom remodeling",
        "Structural modifications",
        "Electrical and plumbing updates",
        "Finishing works",
      ],
      icon: "🔨",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive construction and design solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass p-8 rounded-xl hover-lift"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-foreground/80 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground/70">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Contact us today for a free consultation and let's bring your vision to life.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg 
                         font-semibold hover:bg-primary/90 transition-all duration-300 
                         hover-lift shadow-lg shadow-primary/20">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services; 