import React from "react";
import Image from "next/image";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "With over 20 years of experience in construction and engineering.",
      image: "/images/team/ceo.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Lead Architect",
      description: "Award-winning architect with expertise in sustainable design.",
      image: "/images/team/architect.jpg",
    },
    {
      name: "Arun Patel",
      role: "Construction Manager",
      description: "Specializes in project execution and quality control.",
      image: "/images/team/manager.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
            About GL Engineers
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Building excellence through innovation and dedication since 2000
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-foreground/80">
              To deliver exceptional construction and engineering solutions that exceed
              client expectations, while maintaining the highest standards of quality,
              safety, and innovation.
            </p>
          </div>
          <div className="glass p-8 rounded-xl animate-fade-in delay-100">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-foreground/80">
              To be the most trusted and respected construction company, known for
              our commitment to excellence, sustainability, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-8 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-3">Excellence</h3>
              <p className="text-foreground/80">
                We strive for excellence in every project, maintaining the highest
                standards of quality and professionalism.
              </p>
            </div>
            <div className="glass p-6 rounded-xl hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
              <p className="text-foreground/80">
                We embrace new technologies and innovative solutions to deliver
                better results for our clients.
              </p>
            </div>
            <div className="glass p-6 rounded-xl hover-lift">
              <h3 className="text-xl font-semibold text-primary mb-3">Integrity</h3>
              <p className="text-foreground/80">
                We conduct our business with honesty, transparency, and ethical
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl hover-lift text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-foreground/90 font-medium mb-2">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 