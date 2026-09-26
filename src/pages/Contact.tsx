import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const LegacyContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message) {
        setSuccess(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

            {/* Feedback messages */}
            {success && (
              <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded p-3 text-center">
                {success}
              </div>
            )}
            {error && (
              <div className="mb-4 text-[#05204a] bg-sky-50 border border-sky-200 rounded p-3 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="events">Event Information</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-60"
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                )}
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="mt-10 bg-gradient-to-r from-green-700 to-green-400 text-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="flex flex-col gap-2 mb-4 text-base">
              <div className="flex items-center gap-2">
                <FaEnvelope /> <span>rotaractwellawatte@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone /> <span>+94 77 432 0482</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://web.facebook.com/RotaractClubOfWellawatte"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/rac_wellawatte/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const LegacyContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); setSuccess(''); setError('');
    if (!formData.name || !formData.email || !formData.subject || !formData.message) { setError('Please fill in all fields.'); return; }
    if (!validateEmail(formData.email)) { setError('Please enter a valid email address.'); return; }
    setLoading(true);
    try { const response = await fetch('http://localhost:5000/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) }); const data = await response.json(); if (data.message) { setSuccess(data.message); setFormData({ name: '', email: '', subject: '', message: '' }); } else setError(data.error || 'Something went wrong.'); } catch { setError('Something went wrong. Please try again.'); } finally { setLoading(false); }
  };
  const inputClass = 'w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-slate-900 outline-none transition focus:border-[#0b3d91] focus:ring-0';
  return <div className="min-h-screen bg-[#f5f7fa] text-slate-900"><Navbar /><main><section className="bg-[#082b66] pb-20 pt-36 text-white sm:pb-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><h1 className="text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Contact Us</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-sky-100 sm:text-xl">We'd love to hear from you. Get in touch with our team and let's make a difference together.</p></motion.div></div></section><section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><motion.aside initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}><h2 className="text-4xl font-semibold tracking-[-.035em]">Contact Information</h2><p className="mt-5 max-w-sm text-lg leading-8 text-slate-600">Reach out to us directly or send a message using the form.</p><div className="mt-12 space-y-5 text-slate-700"><div className="flex items-center gap-4"><FaEnvelope className="text-blue-700" /><span>rotaractwellawatte@gmail.com</span></div><div className="flex items-center gap-4"><FaPhone className="text-blue-700" /><span>+94 77 432 0482</span></div></div><div className="mt-10 flex gap-5 text-blue-700"><a href="https://web.facebook.com/RotaractClubOfWellawatte" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-sky-500"><FaFacebook size={22} /></a><a href="https://www.instagram.com/rac_wellawatte/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-sky-500"><FaInstagram size={22} /></a></div></motion.aside><motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }} viewport={{ once: true }} className="bg-white p-7 shadow-[0_18px_50px_rgba(15,35,70,.1)] sm:p-10"><h2 className="mb-10 text-2xl font-semibold">Send us a Message</h2>{success && <div className="mb-6 border border-green-200 bg-green-50 p-3 text-center text-green-700">{success}</div>}{error && <div className="mb-6 border border-sky-200 bg-sky-50 p-3 text-center text-[#05204a]">{error}</div>}<form onSubmit={handleSubmit} className="space-y-8"><div className="grid gap-8 sm:grid-cols-2"><label className="text-sm font-medium text-slate-600">Full Name<input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your full name" /></label><label className="text-sm font-medium text-slate-600">Email Address<input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your.email@example.com" /></label></div><label className="block text-sm font-medium text-slate-600">Subject<select name="subject" value={formData.subject} onChange={handleChange} required className={inputClass}><option value="">Select a subject</option><option value="membership">Membership Inquiry</option><option value="events">Event Information</option><option value="volunteer">Volunteer Opportunities</option><option value="partnership">Partnership</option><option value="other">Other</option></select></label><label className="block text-sm font-medium text-slate-600">Message<textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us how we can help you..." /></label><button type="submit" disabled={loading} className="w-full bg-[#082b66] px-6 py-3 font-semibold text-white transition hover:bg-[#123f85] disabled:opacity-60">{loading ? 'Sending...' : 'Send Message'}</button></form></motion.div></div></section></main><Footer /></div>;
};

const Contact = () => {
  const members = [
    ['Rtr. Harisuthan Mohanadas', 'President', '+94 70 298 6858', 'harisuthan.rotaract@gmail.com'],
    ['Rtr. Dilash Sivakumaran', 'Immediate Past President', '+94 77 432 0482', 'dilash.rotaract@gmail.com'],
    ['Rtr. Rodney Rajaratnam', 'Vice President', '+94 72 850 6994', 'rodney.rotaract@gmail.com'],
    ['Rtr. Nitishe Premnath', 'Vice President', '+94 77 023 9694', 'nitishe.rotaract@gmail.com'],
    ['Rtr. Niroshan Murugendran', 'Joint Secretary', '+94 77 627 0307', 'niroshan.rotaract@gmail.com'],
    ['Rtr. Umashini Krishananthan', 'Joint Secretary', '+94 70 573 5254', 'umashini.rotaract@gmail.com'],

  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-slate-900">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-[#082b66] pb-20 pt-36 text-white sm:pb-28">
          <div className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-3xl">
              <h1 className="text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Contact Us</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-sky-100 sm:text-xl">We'd love to hear from you. Get in touch with our team and let's make a difference together.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-blue-700">Executive Committee</p>
              <h2 className="text-4xl font-semibold tracking-[-.035em] text-slate-900 sm:text-5xl">Your point of contact</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Connect with the members of our executive committee.</p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {members.map(([name, role, phone, address], index) => (
                <motion.article key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: index * .06 }} viewport={{ once: true }} className="group flex min-h-[310px] flex-col border-t-4 border-[#0b3d91] bg-white p-7 shadow-[0_14px_40px_rgba(15,35,70,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,35,70,.14)]">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Your point of contact</p>
                    <h3 className="mt-5 text-xl font-semibold leading-7 text-slate-900">{name}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">{role}</p>
                  </div>
                  <dl className="mt-8 space-y-4 border-t border-slate-200 pt-5 text-sm">
                    <div className="flex items-center gap-3 text-slate-700"><FaPhone className="shrink-0 text-blue-700" size={14} /><dd>{phone}</dd></div>
                    <div className="flex items-center gap-3 text-slate-700"><FaEnvelope className="shrink-0 text-blue-700" size={14} /><dd className="truncate">{address}</dd></div>
                  </dl>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
