import { Link } from 'react-router-dom';

const services = [
    {
        title: 'EPF Withdrawal Guidance',
        description: 'Smooth, end-to-end guidance for PF withdrawal, transfer, pension claims, and KYC corrections with zero hassle.',
        badge: 'Most In Demand',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
        image: '/images/pf.webp',
        path: '/services/pf-services',
        highlights: ['Form 19 & 10C Claims', 'UAN & KYC Name Correction', 'Transfer & Passbook Issue'],
        tat: '24-48 Hrs TAT',
    },
    {
        title: 'ESIC Registration & Compliance',
        description: 'Complete employer & employee ESIC registration, insurance code generation, and monthly portal compliance support.',
        badge: '100% Online',
        badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
        image: '/images/esi.webp',
        path: '/services/esi-services',
        highlights: ['Sub-Code Generation', 'Employee E-Pehchan Cards', 'Medical & Maternity Benefit'],
        tat: 'Instant Setup',
    },
    {
        title: 'Monthly ECR & Return Filing',
        description: 'Accurate monthly PF & ESIC returns, salary wage register computation, and timely challan generation for all businesses.',
        badge: 'Zero Penalty',
        badgeColor: 'bg-teal-50 text-teal-700 border-teal-200/80',
        image: '/images/pf.webp',
        path: '/services/monthly-filing',
        highlights: ['ECR Challan Preparation', 'Statutory Compliance Audit', 'Error-Free Portal Upload'],
        tat: 'Monthly Retainer',
    },
];

export default function PopularServices() {
    return (
        <section className="js-popular-services relative isolate bg-gradient-to-b from-white via-slate-50/50 to-white px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 border border-teal-100">
                        <span className="size-1.5 rounded-full bg-teal-600" />
                        Comprehensive Compliance Services
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
                        Tailored PF & ESIC Solutions
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                        Whether you are an individual claiming your hard-earned PF savings or a business managing 500+ employees, our dedicated legal and compliance team has you covered.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mt-14 grid gap-8 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="js-service-card group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-900/10"
                        >
                            {/* Card Top Border Accent */}
                            <div className="absolute inset-x-8 top-0 h-1 rounded-t-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div>
                                {/* Top badges row */}
                                <div className="flex items-center justify-between gap-2 mb-6">
                                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${service.badgeColor}`}>
                                        {service.badge}
                                    </span>
                                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                                        {service.tat}
                                    </span>
                                </div>

                                {/* Logo / Icon Container */}
                                <div className="mx-auto mb-6 grid size-32 place-items-center rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/50 p-4 ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-105">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight transition-colors group-hover:text-teal-900">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {service.description}
                                </p>

                                {/* Feature checklist tags */}
                                <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                                    {service.highlights.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                                            <span className="grid size-4 place-items-center rounded-full bg-teal-100 text-teal-800 text-[10px] font-black">
                                                ✓
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer Link */}
                            <div className="mt-8 pt-5 border-t border-slate-100">
                                <Link
                                    to={service.path}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-sm font-bold text-slate-800 transition-all duration-200 group-hover:bg-teal-700 group-hover:text-white group-hover:shadow-md"
                                >
                                    <span>Learn Details & Apply</span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Banner */}
                <div className="mt-16 rounded-2xl bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 p-8 sm:p-10 text-white shadow-xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                        <div>
                            <span className="inline-flex rounded-full bg-teal-800/80 px-3 py-1 text-xs font-bold text-teal-200 border border-teal-700">
                                Direct Advisory Helpline
                            </span>
                            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                                Confused about your PF rejection reason or ESI calculation?
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-teal-100 max-w-2xl">
                                Speak directly with our senior compliance officers for an instant case analysis.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <a
                                href="tel:+918001044044"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
                            >
                                <span>📞 +91 8001 044 044</span>
                            </a>
                            <Link
                                to="/paid-consulting"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700/80 border border-teal-500/50 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-600"
                            >
                                <span>Book Dedicated Slot</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
