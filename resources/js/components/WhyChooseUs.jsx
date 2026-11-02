import { Link } from 'react-router-dom';

const highlights = [
    {
        title: '10+ Years of Specialised EPFO & ESIC Expertise',
        desc: 'Deep familiarity with the latest EPFO portal rules, joint declarations, and ESIC norms.',
    },
    {
        title: 'End-to-End Case Tracking & Live Updates',
        desc: 'We prepare your documents, file claims, resolve employer objections, and update you at every milestone.',
    },
    {
        title: 'Zero Risk, 100% Client-Centric Confidentiality',
        desc: 'Bank-grade privacy for your personal credentials, passbooks, and enterprise payroll data.',
    },
];

const stats = [
    { value: '50K+', label: 'Claims Handled', sub: 'Since 2018' },
    { value: '99.4%', label: 'Settlement Rate', sub: 'Approved first-time' },
    { value: '15 Min', label: 'Avg Call Back', sub: 'Dedicated support' },
    { value: '500+', label: 'Corporate Clients', sub: 'Across 18 states' },
];

const cards = [
    {
        title: 'Fast Approvals',
        metric: '24-48h',
        description: 'Direct portal handling ensures applications and claim updates move with zero bureaucratic stall.',
        icon: '⚡',
        accent: 'from-teal-500/10 to-teal-500/5 text-teal-800',
    },
    {
        title: 'Expert 1:1 Help',
        metric: 'Direct Call',
        description: 'Talk to certified labour law & compliance specialists who thoroughly understand PF & ESIC workflows.',
        icon: '👨‍💼',
        accent: 'from-cyan-500/10 to-cyan-500/5 text-cyan-800',
    },
    {
        title: 'Safe & Compliant',
        metric: '100% Legit',
        description: 'Every submission adheres strictly to official EPFO and ESIC department guidelines.',
        icon: '🛡️',
        accent: 'from-emerald-500/10 to-emerald-500/5 text-emerald-800',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="js-why-us relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
            {/* Ambient Blobs */}
            <div className="absolute -left-32 top-16 size-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -right-24 bottom-10 size-96 rounded-full bg-cyan-200/30 blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                    {/* Left Column */}
                    <div>
                        <div className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-sm border border-teal-100">
                            <span className="grid size-4 place-items-center rounded-full bg-teal-600 text-white text-[10px]">✓</span>
                            <span>Why India Trusts CCS</span>
                        </div>

                        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
                            PF & ESIC consulting that feels simple, fast, and completely dependable.
                        </h2>

                        <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                            Say goodbye to endless EPFO portal error messages, rejected claim notices, and uncooperative employers. We solve statutory issues professionally and transparently.
                        </p>

                        <div className="mt-8 space-y-4">
                            {highlights.map((item) => (
                                <div
                                    key={item.title}
                                    className="group flex items-start gap-3.5 rounded-2xl bg-white/90 backdrop-blur-sm p-4 shadow-sm border border-slate-200/80 transition duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-teal-200"
                                >
                                    <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-teal-600 to-cyan-600 text-white text-xs font-black shadow-sm">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
                            <Link
                                to="/paid-consulting"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-800 px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-teal-900/20 transition hover:from-teal-700 hover:to-cyan-700 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <span>Connect With Our Advisors</span>
                                <span>→</span>
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-center text-sm font-bold text-slate-800 border border-slate-200 shadow-sm transition hover:bg-slate-50 hover:text-teal-800"
                            >
                                <span>Explore All Services</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Visual Feature Showcase & Stats */}
                    <div className="space-y-6">
                        {/* Featured Image Banner */}
                        <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border border-slate-200/50">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                                alt="PF and ESIC consultants discussing client documentation"
                                className="aspect-[16/10] w-full object-cover opacity-60 transition duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/30 self-start">
                                    <span>🇮🇳 Serving Clients Pan-India</span>
                                </div>

                                <div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                        {stats.map((s) => (
                                            <div key={s.label} className="text-center sm:text-left">
                                                <p className="text-xl sm:text-2xl font-black text-white">{s.value}</p>
                                                <p className="text-xs font-bold text-teal-300 mt-0.5">{s.label}</p>
                                                <p className="text-[10px] text-slate-300">{s.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 Value Proposition Cards */}
                        <div className="grid gap-4 sm:grid-cols-3">
                            {cards.map((c) => (
                                <div
                                    key={c.title}
                                    className="js-why-card flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-teal-200"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl">{c.icon}</span>
                                            <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-bold text-teal-800 border border-teal-100">
                                                {c.metric}
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-base font-bold text-slate-900">{c.title}</h3>
                                        <p className="mt-2 text-xs leading-relaxed text-slate-600">{c.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
