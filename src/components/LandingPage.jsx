

import React from 'react';
import { Menu, Instagram, Linkedin } from 'lucide-react'; // Importing Instagram and Linkedin icons
import BgVideo from '../assets/BG.mp4';

const LandingPage = () => {
  // Smooth scrolling handler
  const handleScroll = (sectionId) => (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">LOGO</div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-gray-900" onClick={handleScroll('home')}>
              HOME
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={handleScroll('about')}>
              ABOUT
            </a>
            <a href="#treatments" className="text-gray-600 hover:text-gray-900" onClick={handleScroll('treatments')}>
              TREATMENTS
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={handleScroll('contact')}>
              CONTACT
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="relative h-[50vh] md:h-[70vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={BgVideo}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">NICK ERICKSON</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">Physical Therapy in Motion</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
              Book an Appointment
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                src="https://static.wixstatic.com/media/c22c23_7be5c30f877646d097bbd78318c14a00~mv2_d_3413_5120_s_4_2.png/v1/fill/w_570,h_790,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c22c23_7be5c30f877646d097bbd78318c14a00~mv2_d_3413_5120_s_4_2.png"
                alt="Nick Erickson"
                className="rounded-lg h-96"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT</h2>
              <p className="text-gray-600 mb-4">
                I'm a paragraph. Click here to add your own text and edit me. It's easy...
              </p>
              <p className="text-gray-600">
                This is a great space to write long text about your company...
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="treatments" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">PHYSIOTHERAPY</h2>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center max-w-md mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4">INITIAL CONSULTATION</h3>
              <p className="text-gray-600 mb-4">I'm a tagline. Click here to add your own text and edit me.</p>
              <div className="flex justify-center items-center mb-4 gap-4">
                <span>1 hr 30 min</span>
                <span className="font-bold">$85</span>
              </div>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <img
                src="https://static.wixstatic.com/media/c22c23_1e0fc07e072d43bdbf1be5574753a8ff~mv2_d_6720_4480_s_4_2.jpg/v1/crop/x_2100,y_820,w_2880,h_2880/fill/w_360,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1e0fc07e072d43bdbf1be5574753a8ff~mv2_d_6720_4480_s_4_2.jpg"
                alt="Treatment 1"
                className="rounded-lg w-full h-60"
              />
              <img
                src="https://static.wixstatic.com/media/c22c23_cbb7508393fc44029871ed18fe72dc6b~mv2_d_5300_3533_s_4_2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_cbb7508393fc44029871ed18fe72dc6b~mv2_d_5300_3533_s_4_2.jpg"
                alt="Treatment 2"
                className="rounded-lg w-full h-60"
              />
              <div className="bg-emerald-500 rounded-lg flex items-center justify-center p-4">
                <span className="text-white text-lg md:text-xl font-bold text-center">See All Treatments</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-200 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">THE CLINIC</h2>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <img
                    src="https://via.placeholder.com/400x200"
                    alt="Clinic Map"
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="text-gray-600">
                  1600 Amphitheatre Parkway<br />
                  Mountain View, CA 94043<br />
                  Email: info@mysite.com<br />
                  Tel: 123-456-7890
                </p>
                <div className="mt-4">
                  <h3 className="font-bold mb-2">Opening Hours:</h3>
                  <p className="text-gray-600">
                    Mon - Fri: 7am - 10pm<br />
                    Saturday: 8am - 10pm<br />
                    Sunday: 8am - 11pm
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">CONTACT</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows="4"
                  ></textarea>
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Follow Us</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 hover:text-emerald-500" />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-handle" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 hover:text-emerald-500" />
            </a>
          </div>
          <p className="mt-4">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;



