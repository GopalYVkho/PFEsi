import { Link } from 'react-router-dom';

const plans = [
    {
        badge: 'Best Value',
        price: '₹349',
        title: 'Talk to Us on Call',
        tone: 'bg-[#f4f4f5] text-slate-950',
        button: 'bg-[#087f86] hover:bg-[#066a70] text-white',
        features: [
            'Basic talk with our consultant',
            'PF withdrawal eligibility check',
            'Answers to basic EPFO / ESIC queries',
            'Connect within 60 minutes',
            'Essential Functions',
        ],
    },
    {
        badge: 'Popular',
        price: '₹649',
        title: 'Discuss Your Query on Call',
        tone: 'bg-gradient-to-br from-[#087f86] to-[#2bb7c4] text-white',
        button: 'bg-[#05717a] hover:bg-[#055f66] text-white',
        features: [
            'Detailed discussion on your queries',
            'Priority consultation support',
            'Unlimited access',
            'Connect within 30 minutes',
            'Essential Functions',
        ],
    },
    {
        badge: 'Flexible',
        price: '₹899',
        title: 'Sharing Online PC/Laptop Screen',
        tone: 'bg-[#f4f4f5] text-slate-950',
        button: 'bg-[#087f86] hover:bg-[#066a70] text-white',
        features: [
            'Live PC/Laptop screen sharing + Call',
            'PF withdrawal / EPF claim details check',
            'Help with EPFO portal errors',
            'Connect within 30 minutes',
            'Essential Functions',
        ],
    },
];

function PlanCard({ plan, featured = false }) {
    return (
        <article className={`rounded-xl p-8 shadow-sm ${plan.tone}`}>
            <span className={`inline-flex rounded-md px-3 py-1 text-xs font-black ${featured ? 'bg-white text-[#087f86]' : 'bg-cyan-100 text-[#087f86]'}`}>
                {plan.badge}
            </span>

            <h2 className="mt-6 text-5xl font-black">{plan.price}</h2>
            <p className={`mt-3 text-sm font-black ${featured ? 'text-white/90' : 'text-slate-700'}`}>
                {plan.title}
            </p>

            <div className="mt-10 space-y-5">
                {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-black">
                        <span className={`grid size-5 place-items-center rounded-full text-xs ${featured ? 'bg-white/15 text-white' : 'bg-[#087f86] text-white'}`}>
                            ✓
                        </span>
                        {feature}
                    </div>
                ))}
            </div>

            <Link
                to="/paid-consulting"
                className={`mt-10 flex h-12 items-center justify-center rounded-lg text-sm font-black transition ${plan.button}`}
            >
                Book Consultation <span className="ml-2">+</span>
            </Link>
        </article>
    );
}

export default function Pricing() {
    return (
        <section className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <span className="inline-flex rounded-full bg-slate-200 px-4 py-2 text-xs font-black">
                        Flexible Pricing
                    </span>
                    <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">
                        Book Your Online PF Consultant
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
                        Get instant consultation to experienced Chakraborty Consultancy Services LLP - ESIC & PF consultant in India. Whether you need help with PF withdrawal claims, EPFO/ESIC registration, monthly compliance.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <PlanCard key={plan.price} plan={plan} featured={index === 1} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-black">
                        <span className="inline-flex items-center gap-2">
                            <span className="grid size-7 place-items-center rounded-full bg-[#087f86] text-white">✓</span>
                            Secure
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <span className="grid size-7 place-items-center rounded-full bg-[#087f86] text-white">✓</span>
                            Technical Support
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <span className="grid size-7 place-items-center rounded-full bg-[#087f86] text-white">✓</span>
                            Payment
                        </span>
                    </div>
                    <p className="mt-6 text-sm text-slate-500">
                        Payments are handled securely through the most popular payment methods.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-xl font-black text-slate-300">
                        <span>VISA</span>
                        <span>Mastercard</span>
                        <span>PayPal</span>
                        <span>Amex</span>
                        <span>G Pay</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
