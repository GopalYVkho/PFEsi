import { Link } from 'react-router-dom';

const highlights = [
    '10+ Years of PF & ESIC Expertise',
    'End-to-End PF & ESIC Support',
    'Trusted, Transparent & Client Approach',
];

const cards = [
    ['Fast Approvals', '24h', 'Registration and claim updates move without delay.'],
    ['Expert Help', '1:1', 'Talk to advisors who understand PF and ESIC workflows.'],
    ['Safe & Secure', '99%', 'Your documents are handled with clarity and care.'],
];

export default function WhyChooseUs() {
    return (
        <section className="js-why-us relative isolate overflow-hidden bg-[#eef7fb] px-4 py-24 text-slate-950 sm:px-6 lg:px-8">
            <div className="absolute -left-32 top-16 size-72 rounded-full bg-cyan-200/50 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-24 bottom-10 size-80 rounded-full bg-orange-200/50 blur-3xl" aria-hidden="true" />

            <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div>
                    <p className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-sm ring-1 ring-slate-200">
                        <span className="grid size-7 place-items-center rounded-full bg-[#087f86] text-white">✓</span>
                        Why Choose us?
                    </p>

                    <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
                        PF & ESIC consulting that feels simple, fast, and reliable.
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                        We simplify PF withdrawal, EPFO registration, ESIC registration, monthly filing, and corrections so your team can focus on business while compliance moves clearly in the background.
                    </p>

                    <div className="mt-8 grid gap-3">
                        {highlights.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-lg bg-white/75 p-3 text-sm font-black shadow-sm ring-1 ring-white transition duration-300 hover:translate-x-1 hover:bg-white">
                                <span className="grid size-6 place-items-center rounded-full bg-orange-500 text-xs text-white">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/paid-consulting"
                            className="rounded-lg bg-[#087f86] px-6 py-4 text-center text-sm font-black text-white shadow-lg shadow-cyan-900/10 transition hover:bg-[#066a70]"
                        >
                            Connect With Our Advisors
                        </Link>
                        <Link
                            to="/services"
                            className="rounded-lg bg-white px-6 py-4 text-center text-sm font-black text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:text-orange-600"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-5 rounded-[2rem] bg-white/50 shadow-2xl shadow-cyan-900/10" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-[1.5rem] bg-[#087f86] shadow-2xl shadow-cyan-900/20">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                            alt="PF and ESIC consultants discussing client documentation"
                            className="aspect-[16/10] w-full object-cover opacity-65"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#087f86]/75 via-[#087f86]/25 to-slate-950/30" aria-hidden="true" />
                        <button
                            type="button"
                            className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-2xl text-slate-950 shadow-xl transition hover:scale-105"
                            aria-label="Play introduction video"
                        >
                            ▶
                        </button>

                        <div className="absolute left-5 top-5 rounded-2xl bg-white/95 p-4 shadow-xl">
                            <p className="text-3xl font-black">50K+</p>
                            <p className="mt-1 text-xs font-black uppercase text-slate-500">Customers since 2018</p>
                        </div>

                        <div className="absolute bottom-5 right-5 w-52 rounded-2xl bg-white/95 p-4 shadow-xl">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-black">Satisfaction</p>
                                <p className="text-sm font-black text-[#087f86]">99%</p>
                            </div>
                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                                <div className="h-full w-[99%] rounded-full bg-orange-500" />
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
                        {cards.map(([title, metric, description]) => (
                            <div key={title} className="js-why-card rounded-2xl bg-white/90 p-6 shadow-lg shadow-cyan-900/5 ring-1 ring-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-base font-black">{title}</h3>
                                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-orange-600">
                                        {metric}
                                    </span>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
