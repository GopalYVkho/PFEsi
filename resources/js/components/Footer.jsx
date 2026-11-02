import { Link } from 'react-router-dom';

const locations = ['Bangalore', 'Kolkata', 'Mumbai', 'Chennai', 'Delhi NCR', 'Hyderabad'];

const servicesList = [
    ['EPF Withdrawal & Claims', '/services/pf-services'],
    ['ESIC Registration & Code', '/services/esi-services'],
    ['Monthly ECR & Return Filing', '/services/monthly-filing'],
    ['Joint Declaration Correction', '/services/pf-services'],
];

const companyLinks = [
    ['About CCS', '/about-us'],
    ['All Services', '/services'],
    ['Pricing & Plans', '/pricing'],
    ['Client Reviews', '/review'],
    ['Compliance Blog', '/blog'],
    ['Contact Support', '/contact'],
];

const legalLinks = [
    ['Privacy Policy', '/privacy-policy'],
    ['Terms of Use', '/terms-of-use'],
    ['Refund Policy', '/refund-cancellation-policy'],
    ['Admin Portal', '/admin/login'],
];

export default function Footer() {
    return (
        <footer className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-[#06242b] to-[#04171c] text-white border-t border-teal-900/40">
            {/* Top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20">
                                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white font-display">
                                CCS <span className="text-teal-400 font-semibold text-lg">Advisory</span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
                            India's dedicated labour compliance advisory helping employees and enterprises navigate EPFO & ESIC regulations with precision, speed, and integrity.
                        </p>

                        <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-300">
                            <p className="flex items-center gap-2">
                                <span className="text-teal-400">📧</span>
                                <a href="mailto:support@pfesiconsultancy.com" className="hover:text-teal-300 transition">
                                    support@pfesiconsultancy.com
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-teal-400">📞</span>
                                <a href="tel:+918001044044" className="font-bold text-teal-300 hover:text-white transition">
                                    +91 8001 044 044
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-teal-400">📍</span>
                                <span>Kolkata, WB - 700074 (Pan-India Service)</span>
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400">Our Services</h3>
                        <div className="mt-4 flex flex-col space-y-2.5 text-sm text-slate-300">
                            {servicesList.map(([label, path]) => (
                                <Link key={label} to={path} className="transition hover:text-teal-300 hover:translate-x-1 duration-150">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400">Quick Links</h3>
                        <div className="mt-4 flex flex-col space-y-2.5 text-sm text-slate-300">
                            {companyLinks.map(([label, path]) => (
                                <Link key={label} to={path} className="transition hover:text-teal-300 hover:translate-x-1 duration-150">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Consultation Card & Hubs */}
                    <div>
                        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
                            <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">Need Immediate Guidance?</span>
                            <p className="mt-2 text-xs leading-relaxed text-slate-300">
                                Book a 1-on-1 confidential session with our seasoned PF & ESIC consultants.
                            </p>
                            <Link
                                to="/paid-consulting"
                                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 py-2.5 text-xs sm:text-sm font-bold text-slate-950 transition hover:from-teal-400 hover:to-cyan-400"
                            >
                                <span>Schedule Online Session</span>
                                <span>→</span>
                            </Link>
                        </div>

                        <div className="mt-5">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Service Hubs</p>
                            <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                                {locations.map((loc) => (
                                    <span key={loc} className="rounded bg-white/5 px-2 py-0.5 border border-white/10">
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal bar */}
                <div className="mt-14 border-t border-white/10 pt-8 flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p>© 2026 CCS (Chakraborty Consultancy Services). All rights reserved.</p>
                        <p className="text-[11px] text-slate-500 mt-1">
                            Disclaimer: We are an independent legal compliance consultancy firm providing advisory services. We are not officially affiliated with the EPFO or ESIC statutory bodies.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 shrink-0">
                        {legalLinks.map(([label, path]) => (
                            <Link key={label} to={path} className="transition hover:text-teal-300">
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
