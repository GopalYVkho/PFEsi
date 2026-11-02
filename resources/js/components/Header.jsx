import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const services = [
    {
        path: '/services/pf-services',
        title: 'PF Services',
        desc: 'EPF withdrawal, transfer & KYC corrections',
    },
    {
        path: '/services/esi-services',
        title: 'ESI Services',
        desc: 'Registration, IP generation & benefits',
    },
    {
        path: '/services/monthly-filing',
        title: 'Monthly Filing',
        desc: 'ECR challan filing & statutory compliance',
    },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
        setServicesOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeAll = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
                isScrolled
                    ? 'border-slate-200 bg-white/95 backdrop-blur-md shadow-xs'
                    : 'border-slate-200/70 bg-white/85 backdrop-blur-md'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand Logo - Minimal & Sharp */}
                <Link
                    to="/"
                    onClick={closeAll}
                    className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
                    aria-label="CCS Advisory"
                >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-teal-800 text-white">
                        <svg className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div className="flex items-baseline gap-1.5 font-display">
                        <span className="text-lg font-bold tracking-tight text-slate-950">CCS</span>
                        <span className="text-xs font-semibold text-teal-800 tracking-wide uppercase">Advisory</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                isActive ? 'text-slate-950 font-semibold' : 'text-slate-600 hover:text-slate-950'
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setServicesOpen((v) => !v)}
                            aria-expanded={servicesOpen}
                            className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                servicesOpen || location.pathname.startsWith('/services')
                                    ? 'text-slate-950 font-semibold'
                                    : 'text-slate-600 hover:text-slate-950'
                            }`}
                        >
                            <span>Services</span>
                            <svg
                                className={`size-3.5 text-slate-400 transition-transform duration-150 ${servicesOpen ? 'rotate-180 text-slate-700' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`absolute left-0 top-full w-64 pt-1 transition-all duration-150 ${
                                servicesOpen
                                    ? 'visible opacity-100 translate-y-0'
                                    : 'invisible opacity-0 translate-y-1 pointer-events-none'
                            }`}
                        >
                            <div className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/5">
                                {services.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setServicesOpen(false)}
                                        className={({ isActive }) =>
                                            `block rounded-lg px-3 py-2 transition-colors ${
                                                isActive ? 'bg-slate-50 text-teal-800' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                                            }`
                                        }
                                    >
                                        <div className="text-sm font-medium leading-none">{item.title}</div>
                                        <div className="mt-1 text-xs text-slate-500 font-normal">{item.desc}</div>
                                    </NavLink>
                                ))}
                                <div className="mt-1 border-t border-slate-100 pt-1">
                                    <NavLink
                                        to="/services"
                                        onClick={() => setServicesOpen(false)}
                                        className="block rounded-lg px-3 py-1.5 text-xs font-medium text-teal-800 hover:bg-teal-50/50"
                                    >
                                        All Services →
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <NavLink
                        to="/pricing"
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                isActive ? 'text-slate-950 font-semibold' : 'text-slate-600 hover:text-slate-950'
                            }`
                        }
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                isActive ? 'text-slate-950 font-semibold' : 'text-slate-600 hover:text-slate-950'
                            }`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/faq"
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                isActive ? 'text-slate-950 font-semibold' : 'text-slate-600 hover:text-slate-950'
                            }`
                        }
                    >
                        FAQ
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                                isActive ? 'text-slate-950 font-semibold' : 'text-slate-600 hover:text-slate-950'
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Right Actions */}
                <div className="hidden items-center gap-4 sm:flex">
                    <a
                        href="tel:+918001044044"
                        className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
                    >
                        +91 8001 044 044
                    </a>

                    <NavLink
                        to="/paid-consulting"
                        className="rounded-lg bg-teal-800 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-teal-900 active:bg-teal-950"
                    >
                        Consult Expert
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden hover:bg-slate-50"
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
                    <nav className="flex flex-col gap-1 text-sm font-medium">
                        <NavLink
                            to="/"
                            end
                            onClick={closeAll}
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-2 ${isActive ? 'bg-slate-50 text-teal-800 font-semibold' : 'text-slate-700'}`
                            }
                        >
                            Home
                        </NavLink>

                        <div className="px-3 pt-2 pb-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Services
                        </div>
                        {services.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={closeAll}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-1.5 text-xs ${isActive ? 'text-teal-800 font-semibold' : 'text-slate-600'}`
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/services"
                            onClick={closeAll}
                            className="rounded-lg px-4 py-1.5 text-xs text-teal-800 font-medium"
                        >
                            All Services →
                        </NavLink>

                        <div className="my-1 border-t border-slate-100" />

                        <NavLink
                            to="/pricing"
                            onClick={closeAll}
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-2 ${isActive ? 'bg-slate-50 text-teal-800 font-semibold' : 'text-slate-700'}`
                            }
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="/about-us"
                            onClick={closeAll}
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-2 ${isActive ? 'bg-slate-50 text-teal-800 font-semibold' : 'text-slate-700'}`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/faq"
                            onClick={closeAll}
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-2 ${isActive ? 'bg-slate-50 text-teal-800 font-semibold' : 'text-slate-700'}`
                            }
                        >
                            FAQ
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={closeAll}
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-2 ${isActive ? 'bg-slate-50 text-teal-800 font-semibold' : 'text-slate-700'}`
                            }
                        >
                            Contact
                        </NavLink>

                        <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-slate-100">
                            <a
                                href="tel:+918001044044"
                                className="flex items-center justify-center rounded-lg border border-slate-200 py-2 text-xs font-medium text-slate-800"
                            >
                                Call +91 8001 044 044
                            </a>
                            <NavLink
                                to="/paid-consulting"
                                onClick={closeAll}
                                className="flex items-center justify-center rounded-lg bg-teal-800 py-2 text-xs font-medium text-white"
                            >
                                Consult Expert
                            </NavLink>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}