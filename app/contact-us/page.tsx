import React from "react";

const ContactUs = () => {
  const officeLocations = [
    {
      city: "Bangalore",
      address: "123 Tech Park, Electronic City Phase 1",
      phone: "+91 80 1234 5678",
      email: "bangalore@glengineers.com",
    },
    {
      city: "Mumbai",
      address: "456 Business Hub, Bandra Kurla Complex",
      phone: "+91 22 9876 5432",
      email: "mumbai@glengineers.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 bg-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Get in touch with us for any inquiries or to discuss your project
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground/90 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none
                           text-foreground/90 placeholder-foreground/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground/90 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border
                           focus:border-primary focus:ring-1 focus:ring-primary outline-none
                           text-foreground/90 placeholder-foreground/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-foreground/90 mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none
                         text-foreground/90 placeholder-foreground/50"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-foreground/90 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none
                         text-foreground/90 placeholder-foreground/50"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label className="block text-foreground/90 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border
                         focus:border-primary focus:ring-1 focus:ring-primary outline-none
                         text-foreground/90 placeholder-foreground/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg 
                       font-semibold hover:bg-primary/90 transition-all duration-300 
                       hover-lift shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6">Our Offices</h2>
              <div className="space-y-8">
                {officeLocations.map((office, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground/90">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-foreground/70">
                      <p>{office.address}</p>
                      <p>Phone: {office.phone}</p>
                      <p>Email: {office.email}</p>
                    </div>
                    {index < officeLocations.length - 1 && (
                      <div className="border-t border-border pt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary mb-6">Business Hours</h2>
              <div className="space-y-2 text-foreground/70">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs; 