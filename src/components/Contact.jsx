import React, { useState } from 'react';
import '../Contact.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct the mailto link with subject and body
    const mailtoLink = `mailto:mriduloffi@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Redirect to the default email client with pre-filled content
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row">
          {/* Left side for contact details with card effect */}
          <div className="col-md-6">
            <div className="card shadow-lg p-4 mb-4" style={{ backgroundColor: '#2c3e50' }}>
              <div className="text-center mb-4">
                {/* Profile Image from the public folder */}
                <img
                  src="/me.jpeg" // Image from public folder
                  alt="Profile"
                  className="rounded-circle glowing-img"
                  width="150"
                  height="150"
                />
              </div>
              <h4 className="text-center text-light">Contact Details</h4>
              <ul className="list-unstyled text-center">
                <li className="mb-2 text-light"><strong>Email:</strong> mriduloffi@gmail.com</li>
                <li className="mb-2 text-light"><strong>Phone:</strong> 8420505585</li>
                <li className="mb-2 text-light"><strong>Address:</strong> Kolkata, West Bengal</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mridul-bhakta-97aa47258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <strong>LinkedIn Profile</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side for the mail send form (no card) */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center text-light mb-4">Send Me a Message</h4>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-light w-100">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
