import React, { useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import contactData from '../../data/contact.json';
import { checkRateLimit, sanitizeInput } from '../../utils/security';

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [rateLimitError, setRateLimitError] = useState('');
  const [botTrap, setBotTrap] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    requirement: 'Commercial IAQ Audit',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (rateLimitError) setRateLimitError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-Bot Honeypot Security Check
    if (botTrap) {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    // Rate Limiting Security Check (Max 3 submissions per 5 minutes)
    const rateCheck = checkRateLimit('contact_form_submit', 3, 300000);
    if (!rateCheck.allowed) {
      const waitSeconds = Math.ceil(rateCheck.resetTimeMs / 1000);
      setRateLimitError(
        `Security Alert: Too many submissions detected. Please wait ${waitSeconds} seconds before trying again.`
      );
      return;
    }

    // Sanitize Form Input Data against XSS
    const sanitizedData = {
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      organization: sanitizeInput(formData.organization),
      requirement: sanitizeInput(formData.requirement),
      message: sanitizeInput(formData.message),
    };

    console.log('Sanitized Clean Form Submission:', sanitizedData);
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#F5F5F5] relative border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Send Us a Message</h3>
              <p className="text-sm text-slate-600 mt-1">Fill out the form below to connect with an IntelliGreen specialist.</p>
            </div>

            {/* Rate Limit Security Error Alert */}
            {rateLimitError && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold flex items-center gap-3 animate-shake">
                <ShieldAlert size={18} className="text-amber-600 shrink-0" />
                <span>{rateLimitError}</span>
              </div>
            )}

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <CheckCircle2 size={40} className="text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                <p className="text-sm text-slate-700">Your inquiry has been submitted. Our team will contact you within 24 hours.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setRateLimitError('');
                  }}
                  className="mt-4 text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot Security Field (Hidden from real users, traps automated bots) */}
                <input
                  type="text"
                  name="website_url_hp"
                  value={botTrap}
                  onChange={(e) => setBotTrap(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99710 02858"
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Interest
                  </label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  >
                    <option value="Commercial IAQ Audit">Commercial IAQ Audit</option>
                    <option value="CTFA Air Purifiers">CTFA Wall Air Purifiers</option>
                    <option value="Active Bipolar Ionisation">Active Bipolar Ionisation System</option>
                    <option value="EAC Electronic Air Cleaner">EAC Electronic Air Cleaner</option>
                    <option value="IAQ Smart Sensors">IAQ Smart Sensor Station</option>
                    <option value="IntelliGreen Cloud AI Platform">IntelliGreen Cloud AI Platform</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your facility size, building type, or clean-air goals..."
                    className="w-full rounded-xl bg-slate-50 border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                  <Send size={18} />
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Office HQ Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900">{contactData.office.title}</h3>
              
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-slate-900">{contactData.office.company}</div>
                    <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{contactData.office.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <div className="space-y-0.5 text-xs text-slate-700">
                    <div><strong className="text-slate-900">Phone:</strong> {contactData.office.phone}</div>
                    <div><strong className="text-slate-900">Mobile:</strong> {contactData.office.mobile}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Mail size={18} className="text-emerald-600 shrink-0" />
                  <span><strong className="text-slate-900">Email:</strong> {contactData.office.email}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Clock size={18} className="text-emerald-600 shrink-0" />
                  <span><strong className="text-slate-900">Working Hours:</strong> {contactData.office.workingHours}</span>
                </div>
              </div>

              {/* Map Box */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center p-6 text-center shadow-inner">
                <div className="space-y-2">
                  <MapPin size={32} className="text-emerald-600 mx-auto animate-bounce" />
                  <div className="text-xs font-bold text-slate-900">M3M Cosmopolitan, Sector - 66, Gurgaon</div>
                  <a
                    href="https://maps.google.com/?q=M3M+Cosmopolitan+Sector+66+Gurgaon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-emerald-700 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
