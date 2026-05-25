import { useState } from 'react';
import { apiFetch } from '../lib/http.js';

const subjects = [
    'Correction of PF Account',
    'PF Withdrawal',
    'EPF Registration',
    'ESIC Registration',
    'Monthly Filing',
    'KYC or Correction',
];

const initialForm = {
    name: '',
    subject: 'Correction of PF Account',
    phone: '',
    email: '',
    message: '',
};

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateField = (event) => {
        setForm((currentForm) => ({
            ...currentForm,
            [event.target.name]: event.target.value,
        }));
    };

    const submitForm = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const data = await apiFetch('/api/contact-submissions', {
                method: 'POST',
                body: JSON.stringify(form),
            });

            setForm(initialForm);
            setStatus({ type: 'success', message: data.message });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message ?? 'Unable to submit now. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                    <p className="inline-flex items-center gap-2 text-sm font-black">
                        <span className="text-xl text-[#087f86]">◖</span>
                        We're here to help
                    </p>
                    <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                        Contact Us
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                        Get expert PF withdrawal agents, EPF & ESI Registration Consultant in India. Share your details or call / WhatsApp for quick support.
                    </p>

                    <form onSubmit={submitForm} className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium">Your Name*</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={updateField}
                                placeholder="Type your name here..."
                                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Subject*</label>
                            <select
                                name="subject"
                                value={form.subject}
                                onChange={updateField}
                                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                required
                            >
                                {subjects.map((subject) => (
                                    <option key={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Mobile / WhatsApp Number*</label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={updateField}
                                placeholder="Enter your Number..."
                                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                required
                            />
                        </div>

                        <div className="sm:row-span-2">
                            <label className="mb-2 block text-sm font-medium">Any Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={updateField}
                                placeholder="Any queries..."
                                className="min-h-32 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={updateField}
                                placeholder="example@mail.com"
                                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-12 w-full rounded-lg bg-blue-600 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>

                    {status.message && (
                        <p className={`mt-5 text-sm font-bold ${status.type === 'success' ? 'text-[#087f86]' : 'text-red-600'}`}>
                            {status.message}
                        </p>
                    )}

                    <p className="mt-8 text-sm text-slate-600">
                        We'll get back to you within 2 hours.
                    </p>
                </div>

                <div className="rounded-2xl bg-[#f7fbff] p-6 shadow-sm ring-1 ring-slate-100">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                        alt="Support team helping a business customer"
                        className="aspect-[4/3] w-full rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
