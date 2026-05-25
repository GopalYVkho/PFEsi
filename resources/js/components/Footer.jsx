import { Link } from 'react-router-dom';

const locations = ['Bangalore', 'Kolkata', 'Mumbai', 'Chennai'];

const companyLinks = [
    ['About', '/about-us'],
    ['Services', '/services'],
    ['Pricing', '/pricing'],
    ['Contact', '/contact'],
];

const legalLinks = [
    ['Refund', '/refund-cancellation-policy'],
    ['Privacy', '/privacy-policy'],
    ['Terms', '/terms-of-use'],
];

const socialLinks = ['X', 'in', '▶'];

export default function Footer() {
    return (
        <footer className="bg-[#062b33] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-xl bg-[#0fd3c8] text-lg font-bold">
                                C
                            </span>
                            <span className="text-2xl font-bold tracking-tight">CCS</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                            Online PF & ESIC consultant support for registration, monthly filing, and PF withdrawal guidance.
                        </p>
                        <div className="mt-5 space-y-2 text-sm leading-6 text-white/70">
                            <p>support@pfesiconsultancy.com</p>
                            <p>+91 8001 044 044</p>
                            <p>Kolkata, WB - 700074</p>
                        </div>
                    </div>

                    <FooterGroup title="Locations">
                        {locations.map((location) => (
                            <Link key={location} to="/contact" className="transition hover:text-white">
                                {location}
                            </Link>
                        ))}
                    </FooterGroup>

                    <FooterGroup title="Company">
                        {companyLinks.map(([label, path]) => (
                            <Link key={label} to={path} className="transition hover:text-white">
                                {label}
                            </Link>
                        ))}
                    </FooterGroup>

                    <div>
                        <h2 className="text-sm font-semibold text-white">Consultation</h2>
                        <p className="mt-4 text-sm leading-6 text-white/70">
                            Need help with PF, ESI, KYC correction, or filing?
                        </p>
                        <Link
                            to="/paid-consulting"
                            className="mt-5 inline-flex rounded-lg bg-[#0b7f89] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a6c75]"
                        >
                            Get in touch
                        </Link>
                        <div className="mt-6 flex gap-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="grid size-9 place-items-center rounded-full bg-white/10 text-sm font-semibold text-white transition hover:bg-white hover:text-[#062b33]"
                                    aria-label={`Social ${item}`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
                    <span>© 2026 CCS. All rights reserved.</span>
                    <div className="flex gap-5">
                        {legalLinks.map(([label, path]) => (
                            <Link key={label} to={path} className="transition hover:text-white">
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterGroup({ title, children }) {
    return (
        <div>
            <h2 className="text-sm font-semibold text-white">{title}</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
                {children}
            </div>
        </div>
    );
}
