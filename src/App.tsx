import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaHandshake, FaPhone } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    preferredTime: '',
    caseType: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '', phone: '', preferredTime: '', caseType: '' });
    setShowConsultModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const practiceAreas = [
    {
      title: "Civil Litigation",
      icon: <FaBalanceScale />,
      description: "Expert representation in civil disputes, contract matters, and property cases."
    },
    {
      title: "Corporate Law",
      icon: <FaHandshake />,
      description: "Comprehensive legal solutions for businesses, from startups to established corporations."
    },
    {
      title: "Criminal Defense",
      icon: <FaGavel />,
      description: "Skilled defense attorneys protecting your rights in criminal proceedings."
    }
  ];

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <div className="logo">
            <img src={require('./KAMALA-KUMAR-Associates-Logo.png')} alt="Kamala Kumar Associates Logo" className="logo-image" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <motion.section 
          id="home" 
          className="hero-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <video autoPlay muted loop className="hero-video">
            <source src="/hero-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h1>Kamala Kumar Associates</h1>
            <p>Dedicated to Justice & Excellence Since 1995</p>
            <button className="cta-button pulse-animation" onClick={() => setShowConsultModal(true)}>
              Request Consultation
            </button>
          </div>
        </motion.section>

        <motion.section 
          id="about" 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <div className="section-header">
              <h2>A Legacy of Legal Excellence</h2>
              <p className="section-subtitle">Over Two Decades of Distinguished Legal Service</p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>For over two decades, Kamala Kumar Associates has stood as a beacon of legal excellence, providing sophisticated counsel to individuals and businesses across India. Our commitment to delivering exceptional results, coupled with our unwavering ethical standards, has established us as one of the region's most respected law firms.</p>
                <div className="achievements-grid">
                  <div className="achievement-card">
                    <h3>1000+</h3>
                    <p>Successfully Resolved Cases</p>
                  </div>
                  <div className="achievement-card">
                    <h3>Legal 500</h3>
                    <p>Recognized for Excellence</p>
                  </div>
                  <div className="achievement-card">
                    <h3>25+</h3>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="practice-areas" 
          className="practice-areas-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Practice Areas</h2>
          <div className="practice-areas-grid">
            {practiceAreas.map((area, index) => (
              <motion.div 
                key={area.title}
                className="practice-area-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="icon-wrapper">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="services" 
          className="services-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Our Services</h2>
              <p className="section-subtitle">Comprehensive Legal Solutions for Every Need</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Corporate Law</h3>
                <p>Expert guidance in business formation, contracts, mergers & acquisitions, and corporate governance.</p>
                <ul className="service-features">
                  <li>Business Formation</li>
                  <li>Contract Negotiation</li>
                  <li>M&A Advisory</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">⚖️</div>
                <h3>Civil Litigation</h3>
                <p>Skilled representation in civil disputes, including contract disputes and property matters.</p>
                <ul className="service-features">
                  <li>Contract Disputes</li>
                  <li>Property Litigation</li>
                  <li>Civil Appeals</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">🏢</div>
                <h3>Real Estate</h3>
                <p>Comprehensive legal services for property transactions, leasing, and development projects.</p>
                <ul className="service-features">
                  <li>Property Transactions</li>
                  <li>Lease Agreements</li>
                  <li>Development Projects</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">👨‍👩‍👧‍👦</div>
                <h3>Family Law</h3>
                <p>Compassionate counsel for divorce, custody, and other family-related legal matters.</p>
                <ul className="service-features">
                  <li>Divorce Proceedings</li>
                  <li>Child Custody</li>
                  <li>Family Disputes</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="testimonials" 
          className="testimonials-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Client Testimonials</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            <SwiperSlide>
              <div className="testimonial-card">
                <p>"Exceptional legal service. The team at Kamala Kumar Associates handled my case with utmost professionalism."</p>
                <h4>- Rajesh Sharma</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <p>"Their expertise in corporate law helped our business navigate complex legal challenges effectively."</p>
                <h4>- Priya Patel</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.section>

        <motion.section 
          id="team" 
          className="team-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Our Team</h2>
              <p className="section-subtitle">Expert Legal Professionals at Your Service</p>
            </div>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-photo">KK</div>
                </div>
                <div className="member-info">
                  <h3>Kamala Kumar</h3>
                  <p className="member-role">Managing Partner</p>
                  <p className="member-specialty">Corporate Law</p>
                  <p className="member-description">With over 25 years of experience in corporate law, Kamala leads our firm with expertise and vision.</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-photo">RK</div>
                </div>
                <div className="member-info">
                  <h3>Rajesh Kumar</h3>
                  <p className="member-role">Senior Partner</p>
                  <p className="member-specialty">Civil Litigation</p>
                  <p className="member-description">A distinguished litigator with extensive experience in complex civil cases.</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <div className="placeholder-photo">AP</div>
                </div>
                <div className="member-info">
                  <h3>Anita Patel</h3>
                  <p className="member-role">Partner</p>
                  <p className="member-specialty">Real Estate Law</p>
                  <p className="member-description">Specializing in property law and real estate transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="contact-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Contact Us</h2>
              <p className="section-subtitle">Get in Touch for Expert Legal Assistance</p>
            </div>
            <div className="contact-container">
              <div className="contact-info">
                <div className="info-item">
                  <h3>Address</h3>
                  <p>123 Legal Street, City, State</p>
                </div>
                <div className="info-item">
                  <h3>Phone</h3>
                  <p>+1 234 567 8900</p>
                </div>
                <div className="info-item">
                  <h3>Email</h3>
                  <p>contact@kamalakumar.com</p>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><FaPhone /> +91 123 456 7890</p>
            <p>info@kamalakumar.com</p>
            <p>123 Legal Street, New Delhi, India</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kamala Kumar Associates. All rights reserved.</p>
        </div>
      </footer>

      {showConsultModal && (
        <div className="modal-overlay" onClick={() => setShowConsultModal(false)}>
          <div className="consultation-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowConsultModal(false)}>&times;</button>
            <h2>Request a Free Consultation</h2>
            <p className="modal-subtitle">Take the first step towards resolving your legal matters</p>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTime">Preferred Contact Time</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="caseType">Type of Legal Assistance</label>
                  <select
                    id="caseType"
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Case Type</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="family">Family Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Brief Description of Your Case</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide a brief overview of your legal matter..."
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-button">Schedule Consultation</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;