import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import type { ContactFormData } from '@/types';

type ContactFormProps = {
  defaultSubject?: string;
};

export default function ContactForm({ defaultSubject = '' }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject || 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl p-10 flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: '#FFF9F0', border: '1px solid rgba(200,155,60,0.3)', minHeight: '300px' }}
      >
        <CheckCircle size={48} style={{ color: '#C89B3C' }} className="mb-4" />
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: 'Playfair Display, serif', color: '#3B1A08' }}
        >
          Message Received!
        </h3>
        <p
          className="text-sm leading-relaxed max-w-sm"
          style={{ color: 'rgba(59,26,8,0.7)', fontFamily: 'Inter, sans-serif' }}
        >
          Thanks for reaching out. For the fastest response, give us a call at{' '}
          <a href="tel:+17037893069" style={{ color: '#C89B3C', fontWeight: 600 }}>(703) 789-3069</a>.
          Omar loves to chat!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium"
          style={{ color: '#C89B3C', fontFamily: 'Inter, sans-serif' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputStyle = {
    backgroundColor: '#FFF9F0',
    border: '1px solid rgba(200,155,60,0.35)',
    borderRadius: '8px',
    color: '#3B1A08',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    padding: '10px 14px',
    width: '100%',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    marginBottom: '6px',
    color: '#3B1A08',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            style={inputStyle}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(703) 555-0000"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Subject *</label>
          <select
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Custom Order">Custom Order</option>
            <option value="Wholesale">Wholesale</option>
            <option value="Media">Media</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us what you need — we'd love to help."
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
        style={{
          backgroundColor: '#C89B3C',
          color: '#3B1A08',
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
        }}
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
