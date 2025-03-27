import React from "react";

const Home = () => {
  const testimonials = [
    {
      name: "Arjun Mehta",
      review: "Gruha Laksmi helped us turn our old house into a modern marvel.",
      role: "Homeowner",
    },
    {
      name: "Devika Nair",
      review: "From design to final touches, they made our dream come alive.",
      role: "Property Developer",
    },
    {
      name: "Rohan Patel",
      review: "Partnering with Gruha Laksmi was the best decision I made.",
      role: "Business Owner",
    },
  ];

  const services = [
    {
      name: "Interior Designing",
      description:
        "Enhance your living space with stylish and functional designs tailored to your taste.",
      icon: "🎨",
    },
    {
      name: "Plan Approvals",
      description:
        "Seamlessly navigate building regulations and get your construction plans approved with ease.",
      icon: "📋",
    },
    {
      name: "Construction Management",
      description:
        "From planning to execution, we ensure smooth and timely project completion.",
      icon: "🏗️",
    },
    {
      name: "Renovation Works",
      description:
        "Revamp your existing space with our expert renovation and remodeling services.",
      icon: "🔨",
    },
    {
      name: "Consultation Services",
      description:
        "Get expert advice on design, budgeting, and project planning for your dream home.",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-primary/10 text-center py-20 px-4 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/50" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 leading-tight md:leading-snug ">
            Build Your Dream Home with <br className="max-md:hidden" /> GL
            Engineers
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-4">
            Transforming Spaces, One Brick at a Time
          </p>
          <p className="text-md md:text-lg text-foreground/80 mb-8">
            Expert Construction Services Tailored Just for You
          </p>
          <button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold 
                           hover:bg-primary/90 transition-all duration-300 hover-lift
                           shadow-lg shadow-primary/20"
          >
            Get Your Free Consultation
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-8 text-center max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
          Who We Are
        </h2>
        <div className="glass p-8 rounded-xl">
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
            At GL Engineers, we specialize in crafting personalized spaces that
            reflect your unique lifestyle and preferences. With years of
            experience and a passion for excellence, we bring your architectural
            dreams to life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl hover-lift cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {service.name}
                </h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass p-6 rounded-xl hover-lift">
              <p className="italic text-foreground/90 mb-4">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 md:px-8 text-center bg-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Build Your Dream?
          </h2>
          <p className="text-lg text-foreground/90 mb-8">
            Let GL Engineers guide you every step of the way.
          </p>
          <button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold 
                           hover:bg-primary/90 transition-all duration-300 hover-lift
                           shadow-lg shadow-primary/20"
          >
            Schedule Your Free Consultation Today!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
