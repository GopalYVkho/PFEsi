import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../public/images/hero.png';

const consultingTopics = [
    'PF Withdrawal?',
    'EPF Registration?',
    'ESIC Registration?',
    'Monthly Compliance Filing?',
    'KYC & Name Correction?',
    'Form 19, 10C & 31 Claims?',
];

const proofPoints = [
    { text: 'EPFO & ESIC Compliant', desc: 'Govt. portal certified procedures' },
    { text: '99.8% Success Rate', desc: '50,000+ satisfied clients' },
    { text: 'Express 24h Assistance', desc: 'Direct 1-on-1 advisor support' },
];

function HeroGraphic() {
    return (
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Ambient Radial Backlight Glow */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[320px] sm:size-[420px] rounded-full bg-gradient-to-tr from-teal-300/35 via-cyan-200/30 to-amber-200/25 blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            {/* Main Illustration Container */}
            <div className="relative mx-auto flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
                <img
                    src={hero}
                    alt="PF and ESIC consulting expert illustration"
                    className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-2xl transition duration-500 hover:scale-[1.02]"
                    loading="eager"
                />

                {/* Floating Glassmorphic Metric Card 1 - Top Left */}
                <div className="absolute -left-2 sm:left-2 top-4 sm:top-8 z-20 animate-float-gentle hidden sm:block">
                    <div className="glass-panel flex items-center gap-3 rounded-2xl p-3 sm:p-4 shadow-xl ring-1 ring-white/80">
                        <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/25 text-lg">
                            ★
                        </div>
                        <div>
                            <div className="flex items-center gap-1 text-amber-400 text-xs">
                                {'★'.repeat(5)}
                                <span className="ml-1 text-xs font-bold text-slate-800">4.9/5</span>
                            </div>
                            <p className="text-xs sm:text-sm font-bold text-slate-900">50,000+ Cases Resolved</p>
                            <p className="text-[11px] text-slate-500 font-medium">Trusted across India</p>
                        </div>
                    </div>
                </div>

                {/* Floating Glassmorphic Metric Card 2 - Bottom Right */}
                <div className="absolute -right-2 sm:right-2 bottom-6 sm:bottom-12 z-20 animate-float-reverse hidden sm:block">
                    <div className="glass-panel rounded-2xl p-3.5 sm:p-4 shadow-xl ring-1 ring-white/80 max-w-[210px]">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="relative flex size-2.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Fast-Track</span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">24-48h Express Support</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Zero rejection guarantee on guided claims</p>
                    </div>
                </div>

                {/* Floating Badge 3 - Bottom Left Pill */}
                <div className="absolute left-6 bottom-2 z-20 hidden md:flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-lg border border-slate-100 text-xs font-bold text-slate-800">
                    <span className="grid size-5 place-items-center rounded-full bg-teal-100 text-teal-700 text-[11px]">✓</span>
                    <span>100% Safe & Confidential</span>
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    const [topicIndex, setTopicIndex] = useState(0);
    const [displayedTopic, setDisplayedTopic] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTopic = consultingTopics[topicIndex];
        const typingSpeed = 80;
        const deletingSpeed = 40;
        const holdTime = 1300;

        const timer = window.setTimeout(() => {
            if (!isDeleting && displayedTopic.length < currentTopic.length) {
                setDisplayedTopic(currentTopic.slice(0, displayedTopic.length + 1));
                return;
            }

            if (!isDeleting && displayedTopic.length === currentTopic.length) {
                setIsDeleting(true);
                return;
            }

            if (isDeleting && displayedTopic.length > 0) {
                setDisplayedTopic(currentTopic.slice(0, displayedTopic.length - 1));
                return;
            }

            setIsDeleting(false);
            setTopicIndex((currentIndex) => (currentIndex + 1) % consultingTopics.length);
        }, !isDeleting && displayedTopic.length === currentTopic.length ? holdTime : isDeleting ? deletingSpeed : typingSpeed);

        return () => window.clearTimeout(timer);
    }, [displayedTopic, isDeleting, topicIndex]);

    return (
        <section className="js-hero relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/25 to-white text-slate-900 pt-8 pb-16 lg:pt-14 lg:pb-24">
            {/* Background Decorative Mesh Gradients */}
            <div
                className="js-hero-blob absolute -left-40 top-10 size-[420px] rounded-full bg-gradient-to-br from-teal-200/40 via-cyan-100/30 to-transparent blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="js-hero-blob absolute -right-20 top-20 size-[460px] rounded-full bg-gradient-to-bl from-amber-100/40 via-teal-100/30 to-transparent blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            {/* Subtle Grid Accent Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
                aria-hidden="true"
            />

            <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                <div className="max-w-2xl">
                    {/* Top Announcement Pill */}
                    <div className="js-hero-item mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-semibold text-teal-900 shadow-sm border border-teal-100/90 transition hover:shadow-md">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal-400 opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-teal-600" />
                        </span>
                        <span>India's Leading PF & ESIC Advisory Portal</span>
                        <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-700 uppercase">
                            Govt Compliant
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="js-hero-item text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Looking for an Experienced Consultant for{' '}
                        <span className="block mt-2 min-h-[1.15em] gradient-text-teal font-black">
                            {displayedTopic}
                            <span
                                className="ml-1 inline-block h-[0.85em] w-1 animate-pulse bg-teal-500 align-[-0.05em]"
                                aria-hidden="true"
                            />
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="js-hero-item mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 max-w-xl">
                        Fast-track your PF withdrawals, seamless EPF/ESIC registrations, monthly compliance filings, and complex EPFO error corrections with certified advisors.
                    </p>

                    {/* CTA Actions */}
                    <div className="js-hero-item mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Link
                            to="/paid-consulting"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-800 px-8 py-4 text-center text-base font-bold text-white shadow-xl shadow-teal-900/20 transition-all duration-200 hover:from-teal-700 hover:to-cyan-700 hover:shadow-teal-900/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            <span>Book a Consultation</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1 font-black">→</span>
                        </Link>

                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/90 backdrop-blur-sm px-6 py-4 text-center text-base font-bold text-slate-800 border border-slate-200 shadow-sm transition hover:bg-slate-50 hover:border-slate-300 hover:text-teal-800"
                        >
                            <span>Explore Services</span>
                            <span className="text-slate-400">›</span>
                        </Link>
                    </div>

                    {/* Quick Hotline Pill */}
                    <div className="js-hero-item mt-5 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
                        <span>Need urgent assistance? Call direct:</span>
                        <a
                            href="tel:+918001044044"
                            className="font-bold text-teal-700 hover:text-teal-800 underline decoration-teal-300 underline-offset-2 transition"
                        >
                            +91 8001 044 044
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="js-hero-item mt-10 grid gap-3 sm:grid-cols-3 border-t border-slate-200/70 pt-6">
                        {proofPoints.map((point) => (
                            <div key={point.text} className="flex items-start gap-2.5">
                                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-700 text-xs font-black">
                                    ✓
                                </span>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 leading-tight">{point.text}</p>
                                    <p className="text-[11px] text-slate-500 leading-normal mt-0.5">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Visual Right Column */}
                <HeroGraphic />
            </div>
        </section>
    );
}
