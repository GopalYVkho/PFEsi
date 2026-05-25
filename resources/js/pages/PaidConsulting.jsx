import { useState } from 'react';
import { apiFetch } from '../lib/http.js';

const featureCards = [
    { title: 'Affordable & Transparent Pricing', tone: 'bg-[#062b33] text-white', icon: '01' },
    { title: 'Fast Response Within 15-30 Minutes', tone: 'bg-[#0fd3c8] text-[#062b33]', icon: '02' },
    { title: 'Support Across Pan-India Locations', tone: 'bg-white text-[#062b33] ring-1 ring-slate-200', icon: '03' },
];

const talkingOptions = ['PF Withdrawal', 'EPF Registration', 'ESIC Registration', 'Monthly Filing', 'KYC or Correction'];
const languages = ['Tamil', 'English', 'Hindi', 'Kannada', 'Telugu', 'Malayalam'];
const timeSlots = ['9:30 AM - 10:00 AM', '10:00 AM - 10:30 AM', '11:00 AM - 11:30 AM', '12:30 PM - 01:00 PM', '03:00 PM - 03:30 PM', '03:30 PM - 04:00 PM', '04:30 PM - 05:00 PM', '06:00 PM - 06:30 PM', '06:30 PM - 07:00 PM'];
const plans = [
    {
        key: 'call-before-sharing',
        title: 'Talk to us on a call before sharing UAN & Password',
        price: 349,
        visual: '☎',
    },
    {
        key: 'screen-sharing-call',
        title: 'Sharing Online PC/Laptop Screen with Call',
        price: 899,
        visual: '▣',
    },
    {
        key: 'expert-query-call',
        title: 'Speak with Our Expert to Discuss Your Query',
        price: 649,
        visual: '◉',
    },
];

const initialForm = {
    name: '',
    email: '',
    phone: '',
    talking_about: '',
    preferred_date: '',
    time_slot: '',
    language: '',
};

export default function PaidConsulting() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(initialForm);
    const [booking, setBooking] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(plans[0].key);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const chosenPlan = plans.find((plan) => plan.key === selectedPlan);
    const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

    const updateField = (event) => {
        setForm((currentForm) => ({ ...currentForm, [event.target.name]: event.target.value }));
    };

    const saveDetails = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const data = booking
                ? await apiFetch(`/api/consultation-submissions/${booking.id}/details`, {
                    method: 'PUT',
                    body: JSON.stringify({ ...form, booking_token: booking.booking_token }),
                })
                : await apiFetch('/api/consultation-submissions', {
                    method: 'POST',
                    body: JSON.stringify(form),
                });

            setBooking(data.submission);
            setStep(2);
        } catch (error) {
            setStatus({ type: 'error', message: error.message ?? 'Unable to save consultation details.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const savePlan = async () => {
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const data = await apiFetch(`/api/consultation-submissions/${booking.id}/plan`, {
                method: 'PUT',
                body: JSON.stringify({
                    booking_token: booking.booking_token,
                    service_plan: selectedPlan,
                }),
            });
            setBooking(data.submission);
            setStep(3);
        } catch (error) {
            setStatus({ type: 'error', message: error.message ?? 'Unable to save selected service.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#f4f7fd] px-4 py-12 text-[#062b33] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-2xl bg-white/55 p-5 ring-1 ring-slate-200 sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#087f86]">Want to talk our Experts</p>
                <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Book Your PF & ESIC Online Consultation Slot</h1>

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                    {featureCards.map((card) => (
                        <div key={card.title} className={`flex min-h-28 items-center gap-4 rounded-lg p-6 ${card.tone}`}>
                            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-current text-sm font-black">{card.icon}</span>
                            <h2 className="text-sm font-black leading-tight">{card.title}</h2>
                        </div>
                    ))}
                </div>

                <StepProgress step={step} progress={progress} />

                {step === 1 && (
                    <BasicDetailsForm
                        form={form}
                        onChange={updateField}
                        onSubmit={saveDetails}
                        isSubmitting={isSubmitting}
                        status={status}
                    />
                )}
                {step === 2 && (
                    <ServiceSelection
                        selectedPlan={selectedPlan}
                        onSelect={setSelectedPlan}
                        onPrevious={() => setStep(1)}
                        onNext={savePlan}
                        isSubmitting={isSubmitting}
                        status={status}
                    />
                )}
                {step === 3 && <PaymentPlaceholder booking={booking} onPrevious={() => setStep(2)} />}
            </div>
        </section>
    );
}

function StepProgress({ step, progress }) {
    const labels = ['Fill Basic Details', 'Select Service', 'Payment'];

    return (
        <div className="mt-10">
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-[#0fd3c8] transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-right text-xs font-black text-[#087f86]">{progress}%</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {labels.map((label, index) => {
                    const number = index + 1;
                    const active = number <= step;
                    return (
                        <div key={label} className={active ? 'text-[#062b33]' : 'text-slate-400'}>
                            <span className={`mx-auto grid size-8 place-items-center rounded-full border text-sm font-black ${active ? 'border-[#0fd3c8] bg-[#ddfbf8]' : 'border-slate-300'}`}>{number}</span>
                            <p className="mt-2 text-xs font-bold sm:text-sm">Step {number}</p>
                            <p className="mt-1 hidden text-xs sm:block">{label}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function BasicDetailsForm({ form, onChange, onSubmit, isSubmitting, status }) {
    return (
        <form className="mt-8" onSubmit={onSubmit}>
            <div className="grid gap-6 lg:grid-cols-2">
                <InputField label="Your Name" name="name" value={form.name} onChange={onChange} placeholder="Enter Your Full Name" />
                <InputField label="Email ID" name="email" type="email" value={form.email} onChange={onChange} placeholder="example@mail.com" />
                <InputField label="Phone Number" name="phone" value={form.phone} onChange={onChange} placeholder="Enter Phone Number" />
                <SelectField label="Talking About" name="talking_about" value={form.talking_about} onChange={onChange} options={talkingOptions} />
                <InputField label="Select Your Preferred Date" name="preferred_date" type="date" value={form.preferred_date} onChange={onChange} />
                <div className="lg:row-span-2">
                    <Label>Select Your Preferred Time Slot</Label>
                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {timeSlots.map((slot) => (
                            <label key={slot} className="flex items-center gap-3 text-sm">
                                <input type="radio" name="time_slot" value={slot} checked={form.time_slot === slot} onChange={onChange} className="size-4 accent-[#087f86]" required />
                                {slot}
                            </label>
                        ))}
                    </div>
                </div>
                <SelectField label="Calling Language" name="language" value={form.language} onChange={onChange} options={languages} />
            </div>
            <FooterAction status={status}>
                <button disabled={isSubmitting} className="rounded-lg bg-[#062b33] px-7 py-3 text-sm font-black text-white hover:bg-[#0b3c46] disabled:opacity-60">
                    {isSubmitting ? 'Saving...' : 'Next'}
                </button>
            </FooterAction>
        </form>
    );
}

function ServiceSelection({ selectedPlan, onSelect, onPrevious, onNext, isSubmitting, status }) {
    const selected = plans.find((plan) => plan.key === selectedPlan);

    return (
        <div className="mt-8">
            <Label>Select a Service</Label>
            <div className="grid gap-5 lg:grid-cols-3">
                {plans.map((plan) => (
                    <button
                        type="button"
                        key={plan.key}
                        onClick={() => onSelect(plan.key)}
                        className={`rounded-xl border-2 p-5 text-left transition ${selectedPlan === plan.key ? 'border-[#0fd3c8] bg-[#eefbfa]' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                    >
                        <span className="grid size-12 place-items-center rounded-xl bg-[#f4f7fd] text-2xl font-black text-[#062b33]">{plan.visual}</span>
                        <p className="mt-5 min-h-14 text-sm font-bold leading-6">{plan.title}</p>
                        <p className="mt-5 text-3xl font-black">₹{plan.price}</p>
                    </button>
                ))}
            </div>
            <div className="mt-6 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-2">
                <p className="text-sm"><span className="text-slate-500">Quantity:</span> <strong className="block mt-1">1</strong></p>
                <p className="text-sm"><span className="text-slate-500">Service Price:</span> <strong className="block mt-1">₹{selected.price}</strong></p>
                <p className="text-sm sm:col-span-2"><span className="text-slate-500">Grand Total:</span> <strong className="block mt-1 text-xl">₹{selected.price}</strong></p>
            </div>
            <FooterAction status={status}>
                <button type="button" onClick={onPrevious} className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-black">Previous</button>
                <button type="button" disabled={isSubmitting} onClick={onNext} className="rounded-lg bg-[#062b33] px-7 py-3 text-sm font-black text-white disabled:opacity-60">
                    {isSubmitting ? 'Saving...' : 'Continue'}
                </button>
            </FooterAction>
        </div>
    );
}

function PaymentPlaceholder({ booking, onPrevious }) {
    return (
        <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-200 sm:p-8">
            <p className="text-xs font-black uppercase tracking-wide text-[#087f86]">Booking Summary</p>
            <h2 className="mt-3 text-2xl font-black">Payment step is ready for integration</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
                Your details and selected consultation service have been saved. Online payment will be enabled after payment gateway integration.
            </p>
            <div className="mt-7 rounded-xl bg-[#f4f7fd] p-5">
                <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-bold">{booking.service_plan}</p>
                    <p className="text-3xl font-black">₹{booking.amount}</p>
                </div>
                <p className="mt-3 text-sm text-slate-500">Status: {booking.payment_status}</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button type="button" onClick={onPrevious} className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-black">Previous</button>
                <button type="button" disabled className="rounded-lg bg-slate-300 px-7 py-3 text-sm font-black text-slate-600">
                    Payment Coming Soon
                </button>
            </div>
        </div>
    );
}

function InputField({ label, ...props }) {
    return (
        <div>
            <Label>{label}</Label>
            <input {...props} className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#0fd3c8] focus:ring-2 focus:ring-cyan-100" required />
        </div>
    );
}

function SelectField({ label, options, ...props }) {
    return (
        <div>
            <Label>{label}</Label>
            <select {...props} className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#0fd3c8] focus:ring-2 focus:ring-cyan-100" required>
                <option value="" disabled>Select an Option</option>
                {options.map((option) => <option key={option}>{option}</option>)}
            </select>
        </div>
    );
}

function Label({ children }) {
    return <label className="mb-2 block text-sm font-medium">{children}<span className="text-[#ff5a5f]">*</span></label>;
}

function FooterAction({ status, children }) {
    return (
        <div className="mt-9">
            <div className="flex flex-wrap justify-end gap-3">{children}</div>
            {status.message && <p className={`mt-5 text-right text-sm font-bold ${status.type === 'error' ? 'text-red-600' : 'text-[#087f86]'}`}>{status.message}</p>}
        </div>
    );
}
