import React, { useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { Check, Copy, Mail } from 'lucide-react';
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

const EASE = [0.22, 1, 0.36, 1] as const;

/** Masked line that slides up into view */
const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <span className="block overflow-hidden pb-[0.1em]">
    <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay, ease: EASE }}>
      {children}
    </motion.span>
  </span>
);

const initialsOf = (name: string) =>
  name
    .replace(/^Rtr\.\s*/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

/** Small icon button that copies a value to the clipboard */
const CopyButton = ({ value, label, dark }: { value: string; label: string; dark: boolean }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable, ignore */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
        dark ? 'text-white/50 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-900/5 hover:text-[#061634]'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'done' : 'copy'}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {copied ? <Check size={15} className="text-[#f2c14e]" /> : <Copy size={14} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
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

  const reduceMotion = useReducedMotion();
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const focusMember = (index: number) => {
    document.getElementById(`member-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlighted(index);
    window.setTimeout(() => setHighlighted((current) => (current === index ? null : current)), 2200);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#f7f6f2] text-[#061634] selection:bg-[#f2c14e] selection:text-[#061634]">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative isolate overflow-hidden bg-[#061634] text-white">
            <div aria-hidden="true" className="absolute -left-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#0b3d91]/50 blur-[130px]" />
            <div aria-hidden="true" className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f2c14e]/10 blur-[110px]" />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />

            <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <h1 className="text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[.95] tracking-[-.045em]">
                  <Line delay={0.15}>Contact</Line>
                  <Line delay={0.27}>
                    <span className="font-accent italic text-[#f2c14e]">Us</span>
                  </Line>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                  className="mt-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9"
                >
                  We'd love to hear from you. Get in touch with our team and let's make a difference together.
                </motion.p>
              </div>

              {/* Committee orbit */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, delay: 0.3, ease: EASE }}
                className="relative mx-auto hidden aspect-square w-full max-w-[440px] sm:block"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-[12%] rounded-full border border-dashed border-white/20"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
                <div aria-hidden="true" className="absolute inset-[30%] rounded-full border border-white/10 bg-white/[0.03]" />

                {/* Pulsing centre */}
                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                  {[0, 1, 2].map((ring) => (
                    <motion.span
                      key={ring}
                      className="absolute h-24 w-24 rounded-full border border-[#f2c14e]/40"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={reduceMotion ? undefined : { scale: [1, 2.2], opacity: [0.6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: ring, ease: 'easeOut' }}
                    />
                  ))}
                  <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#f2c14e] text-[#061634] shadow-[0_20px_50px_-12px_rgba(242,193,78,.6)]">
                    <Mail size={34} strokeWidth={1.7} />
                  </span>
                </div>

                {members.map(([name, role], index) => {
                  const angle = (index / members.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 50 + 38 * Math.cos(angle);
                  const y = 50 + 38 * Math.sin(angle);
                  return (
                    <motion.button
                      key={name}
                      type="button"
                      onClick={() => focusMember(index)}
                      aria-label={`${name}, ${role}`}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.6 + index * 0.08, ease: EASE }}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className="group absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b2a5b] text-lg font-bold tracking-tight text-[#f2c14e] shadow-[0_18px_40px_-14px_rgba(0,0,0,.6)] ring-1 ring-white/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#f2c14e] group-hover:text-[#061634] group-hover:ring-[#f2c14e]">
                        {initialsOf(name)}
                      </span>
                      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#061634] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                        {role}
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Executive committee */}
          <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: EASE }}
                className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2"
              >
                <div>
                  <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-[#b8862b]">
                    <span className="h-px w-10 bg-[#b8862b]/60" /> Executive Committee
                  </p>
                  <h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl lg:text-6xl">
                    Your point of <span className="font-accent italic text-[#0b3d91]">contact</span>
                  </h2>
                </div>
                <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">Connect with the members of our executive committee.</p>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {members.map(([name, role, phone, address], index) => {
                  const dark = index === 0;
                  const isHighlighted = highlighted === index;
                  return (
                    <motion.article
                      key={name}
                      id={`member-${index}`}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: EASE }}
                      className={`group relative isolate flex flex-col overflow-hidden rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-1 ${
                        dark
                          ? 'bg-[#061634] text-white shadow-[0_40px_80px_-40px_rgba(6,22,52,.8)]'
                          : 'bg-white shadow-[0_24px_50px_-30px_rgba(6,22,52,.4)] ring-1 ring-slate-900/[0.06] hover:shadow-[0_40px_70px_-30px_rgba(6,22,52,.45)]'
                      } ${isHighlighted ? 'outline outline-4 outline-offset-4 outline-[#f2c14e]' : 'outline-none'}`}
                    >
                      {dark && (
                        <>
                          <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[#0b3d91]/70 blur-[80px]" />
                          <div aria-hidden="true" className="absolute -bottom-16 -left-10 -z-10 h-48 w-48 rounded-full bg-[#f2c14e]/10 blur-[70px]" />
                        </>
                      )}

                      <div className="mb-8 flex items-start justify-between gap-4">
                        <span
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold tracking-tight transition-transform duration-500 group-hover:-rotate-6 ${
                            dark ? 'bg-[#f2c14e] text-[#061634]' : 'bg-[#061634] text-[#f2c14e]'
                          }`}
                        >
                          {initialsOf(name)}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.16em] ${
                            dark ? 'bg-white/10 text-[#f2c14e] ring-1 ring-white/15' : 'bg-[#f2c14e]/15 text-[#8a6417]'
                          }`}
                        >
                          {role}
                        </span>
                      </div>

                      <p className={`text-[11px] font-bold uppercase tracking-[.22em] ${dark ? 'text-white/45' : 'text-slate-400'}`}>Your point of contact</p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-.03em]">{name}</h3>

                      <dl className={`mt-8 space-y-1 border-t pt-5 text-[15px] ${dark ? 'border-white/10' : 'border-slate-900/[0.07]'}`}>
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className={`flex min-w-0 flex-1 items-center gap-3 rounded-xl py-2 transition-colors ${dark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-[#0b3d91]'}`}
                          >
                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-white/10 text-[#f2c14e]' : 'bg-[#061634]/5 text-[#0b3d91]'}`}>
                              <FaPhone size={13} />
                            </span>
                            <dd className="tabular-nums">{phone}</dd>
                          </a>
                          <CopyButton value={phone} label="phone number" dark={dark} />
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${address}`}
                            className={`flex min-w-0 flex-1 items-center gap-3 rounded-xl py-2 transition-colors ${dark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-[#0b3d91]'}`}
                          >
                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-white/10 text-[#f2c14e]' : 'bg-[#061634]/5 text-[#0b3d91]'}`}>
                              <FaEnvelope size={13} />
                            </span>
                            <dd className="min-w-0 [overflow-wrap:anywhere]">
                              {address.split('@')[0]}
                              <wbr />@{address.split('@')[1]}
                            </dd>
                          </a>
                          <CopyButton value={address} label="email address" dark={dark} />
                        </div>
                      </dl>

                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[#f2c14e] transition-transform duration-700 ease-out group-hover:scale-x-100"
                      />
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default Contact;
