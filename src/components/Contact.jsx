'use client';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! We'll reach out to ${formData.email} soon.`);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="p-grid p-ai-center">
          {/* Contact Info */}
          <div className="p-col-12 p-lg-5">
            <div className="p-pr-0 p-lg-pr-6">
              <h2
                className="text-4xl font-bold"
                style={{ marginBottom: 'var(--spacing-4)', color: '#000000' }}
              >
                Let&apos;s Build Something <span style={{ color: '#0046B6' }}>Amazing</span>{' '}
                Together
              </h2>
              <p
                className="text-lg"
                style={{ marginBottom: 'var(--spacing-8)', lineHeight: '1.7', color: '#666666' }}
              >
                Ready to transform your ideas into reality? Get in touch with us and let&apos;s
                discuss how we can help you achieve your digital goals.
              </p>

              {/* Contact Details */}
              <div style={{ marginBottom: 'var(--spacing-8)' }}>
                <div className="p-d-flex p-ai-center p-mb-4">
                  <div
                    className="p-d-flex p-ai-center p-jc-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      background: '#e6f0ff',
                      marginRight: 'var(--spacing-4)',
                    }}
                  >
                    <i className="pi pi-envelope" style={{ color: '#0046B6' }}></i>
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#000000' }}>
                      Email
                    </div>
                    <div style={{ color: '#666666' }}>hello@digiwave.com</div>
                  </div>
                </div>

                <div className="p-d-flex p-ai-center p-mb-4">
                  <div
                    className="p-d-flex p-ai-center p-jc-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      background: '#e6f0ff',
                      marginRight: 'var(--spacing-4)',
                    }}
                  >
                    <i className="pi pi-phone" style={{ color: '#0046B6' }}></i>
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#000000' }}>
                      Phone
                    </div>
                    <div style={{ color: '#666666' }}>+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="p-d-flex p-ai-center">
                  <div
                    className="p-d-flex p-ai-center p-jc-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      background: '#e6f0ff',
                      marginRight: 'var(--spacing-4)',
                    }}
                  >
                    <i className="pi pi-map-marker" style={{ color: '#0046B6' }}></i>
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#000000' }}>
                      Location
                    </div>
                    <div style={{ color: '#666666' }}>San Francisco, CA</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-d-flex" style={{ gap: 'var(--spacing-4)' }}>
                <Button
                  icon="pi pi-twitter"
                  className="p-button-rounded p-button-text"
                  aria-label="Twitter"
                  style={{ color: '#0046B6' }}
                />
                <Button
                  icon="pi pi-linkedin"
                  className="p-button-rounded p-button-text"
                  aria-label="LinkedIn"
                  style={{ color: '#0046B6' }}
                />
                <Button
                  icon="pi pi-github"
                  className="p-button-rounded p-button-text"
                  aria-label="GitHub"
                  style={{ color: '#0046B6' }}
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-col-12 p-lg-7">
            <div className="card card-body">
              <h3
                className="text-2xl font-semibold"
                style={{ marginBottom: 'var(--spacing-6)', color: '#000000' }}
              >
                Send us a message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="p-grid p-fluid">
                  <div className="p-col-12 p-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <InputText
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="p-col-12 p-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <InputText
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="p-col-12">
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company
                      </label>
                      <InputText
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="p-col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <InputTextarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>
                  </div>

                  <div className="p-col-12">
                    <Button
                      type="submit"
                      label="Send Message"
                      icon="pi pi-send"
                      className="btn-large"
                      style={{
                        width: '100%',
                        backgroundColor: '#0046B6',
                        borderColor: '#0046B6',
                        color: '#FFFFFF',
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
