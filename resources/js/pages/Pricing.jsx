import { Link } from 'react-router-dom';
import PaymentMethodsRow from '../components/PaymentLogos.jsx';

const plans = [
    {
        badge: 'Starter',
        price: '₹349',
        duration: 'Single Query Session',
        title: 'Quick Call Consultation',
        desc: 'Ideal for quick doubts regarding PF balance, rejection reasons, or eligibility questions.',
        features: [
            '1-on-1 direct phone consultation',
            'PF withdrawal eligibility check',
            'EPFO rejection notice evaluation',
            'Connect within 45-60 minutes',
            'Step-by-step guidance notes',
        ],
        cta: 'Book ₹349 Call',
        popular: false,
    },
    {
        badge: 'Most Popular',
        price: '₹649',
        duration: 'Comprehensive Case Review',
        title: 'Detailed Consultation & Strategy',
        desc: 'Complete analysis of your PF / ESIC case with personalized action plan and direct advisor support.',
        features: [
            'Deep dive discussion on complex issues',
            'Priority callback within 20-30 mins',
            'Joint declaration & correction roadmap',
            'PF transfer & multiple member ID fix',
            'Follow-up support on the same query',
        ],
        cta: 'Book Priority ₹649',
        popular: true,
    },
    {
        badge: 'Screen Share',
        price: '₹899',
        duration: 'Live Remote Assistance',
        title: 'Live PC Screen Sharing + Call',
        desc: 'Solve stubborn portal errors live while an expert navigates the EPFO Unified Portal with you.',
        features: [
            'Live Google Meet / AnyDesk screen share',
            'Live claim filing & portal error troubleshooting',
            'DSC / Digital signature error fix',
            'Connect within 30 minutes',
            'Live verification before final submit',
        ],
        cta: 'Book Live Screen ₹899',
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section className="relative isolate bg-gradient-to-b from-white via-slate-50 to-white px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 border border-teal-100">
                        <span className="size-1.5 rounded-full bg-teal-600" />
                        Transparent & Affordable
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
                        Book Your Online PF & ESIC Expert
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                        No hidden surprises. Choose the consultation tier that fits your situation and speak with an authorized labour law expert today.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3 lg:items-center">
                    {plans.map((plan) => (
                        <div
                            key={plan.price}
                            className={[
                                'relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300',
                                plan.popular
                                    ? 'bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white shadow-2xl shadow-teal-900/25 ring-2 ring-teal-500 lg:-translate-y-2 lg:p-9'
                                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:border-teal-200 hover:shadow-xl',
                            ].join(' ')}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                                    Recommended Choice
                                </div>
                            )}

                            <div>
                                <div className="flex items-center justify-between">
                                    <span
                                        className={[
                                            'rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider',
                                            plan.popular
                                                ? 'bg-white/15 text-teal-200 border border-white/20'
                                                : 'bg-teal-50 text-teal-800 border border-teal-100',
                                        ].join(' ')}
                                    >
                                        {plan.badge}
                                    </span>
                                    <span
                                        className={[
                                            'text-xs font-medium',
                                            plan.popular ? 'text-teal-200' : 'text-slate-500',
                                        ].join(' ')}
                                    >
                                        {plan.duration}
                                    </span>
                                </div>

                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl sm:text-5xl font-black tracking-tight">{plan.price}</span>
                                    <span className={`text-xs font-semibold ${plan.popular ? 'text-teal-200' : 'text-slate-500'}`}>
                                        / session
                                    </span>
                                </div>

                                <h3 className="mt-3 text-lg font-bold tracking-tight">{plan.title}</h3>
                                <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${plan.popular ? 'text-teal-100' : 'text-slate-600'}`}>
                                    {plan.desc}
                                </p>

                                {/* Features Checklist */}
                                <div className="mt-8 space-y-3.5 border-t border-slate-200/20 pt-6">
                                    {plan.features.map((feat) => (
                                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                            <span
                                                className={[
                                                    'grid size-4 shrink-0 place-items-center rounded-full text-[10px] font-black mt-0.5',
                                                    plan.popular
                                                        ? 'bg-teal-400 text-teal-950'
                                                        : 'bg-teal-100 text-teal-800',
                                                ].join(' ')}
                                            >
                                                ✓
                                            </span>
                                            <span className={plan.popular ? 'text-teal-50' : 'text-slate-700 font-medium'}>
                                                {feat}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-9">
                                <Link
                                    to="/paid-consulting"
                                    className={[
                                        'flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-center text-sm font-bold transition-all duration-200',
                                        plan.popular
                                            ? 'bg-white text-teal-900 shadow-lg hover:bg-teal-50'
                                            : 'bg-teal-800 text-white hover:bg-teal-700 shadow-md shadow-teal-900/10',
                                    ].join(' ')}
                                >
                                    <span>{plan.cta}</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secure Trust & Payment Guarantee Bar */}
                <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 text-center max-w-4xl mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-slate-800">
                        <span className="flex items-center gap-2">
                            <span className="grid size-6 place-items-center rounded-full bg-teal-100 text-teal-800 text-xs">🔒</span>
                            256-bit Encrypted Payment
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="grid size-6 place-items-center rounded-full bg-teal-100 text-teal-800 text-xs">⚡</span>
                            Guaranteed On-Time Call
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="grid size-6 place-items-center rounded-full bg-teal-100 text-teal-800 text-xs">🤝</span>
                            100% Verified Advisors
                        </span>
                    </div>

                    <div className="mt-6 border-t border-slate-200/60 pt-5">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Accepted Payment Modes
                        </p>
                        <PaymentMethodsRow />
                    </div>
                </div>
            </div>
        </section>
    );
}
