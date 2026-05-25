import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { mainLinks, pageLinks } from '../data/navigation.js';

function navClass(isScrolled) {
    return ({ isActive }) =>
        [
            'text-sm font-semibold transition',
            'hover:text-[#062b33]',
            isActive ? 'text-[#062b33]' : 'text-slate-600',
        ].join(' ');
}

function mobileNavClass({ isActive }) {
    return [
        'rounded-lg px-3 py-3 text-base font-semibold hover:bg-slate-100',
        isActive ? 'text-orange-600' : 'text-slate-800',
    ].join(' ');
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateHeader = () => setIsScrolled(window.scrollY > 16);

        updateHeader();
        window.addEventListener('scroll', updateHeader);

        return () => window.removeEventListener('scroll', updateHeader);
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
        setPagesOpen(false);
    };

    return (
        <header
            className={[
                'sticky top-0 z-50 px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8',
                isScrolled ? 'bg-white/20 backdrop-blur-md' : 'bg-transparent',
            ].join(' ')}
        >
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-lg bg-white px-4 shadow-2xl shadow-slate-200/80 ring-1 ring-slate-100 sm:px-6">
                <Link to="/" className="flex items-center gap-3" aria-label="Home" onClick={closeMenu}>
                    <span className="grid size-9 place-items-center rounded-full bg-[#0fd3c8] text-base font-black text-white">
                        C
                    </span>
                    <span className="text-2xl font-black tracking-tight text-[#062b33]">CCS</span>
                </Link>

                <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
                    {mainLinks.map((link) => (
                        <NavLink key={link.path} to={link.path} className={navClass(isScrolled)}>
                            {link.label}
                        </NavLink>
                    ))}

                    <div
                        className="relative flex h-16 items-center"
                        onMouseEnter={() => setPagesOpen(true)}
                        onMouseLeave={() => setPagesOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setPagesOpen((open) => !open)}
                            aria-expanded={pagesOpen}
                            className={[
                                'flex items-center gap-2 text-sm font-semibold transition',
                                'text-slate-600 hover:text-[#062b33]',
                            ].join(' ')}
                        >
                            Pages
                            <span className="text-xs">v</span>
                        </button>
                        <div
                            className={[
                                'absolute right-0 top-full w-56 pt-2 transition',
                                pagesOpen ? 'visible opacity-100' : 'invisible opacity-0',
                            ].join(' ')}
                        >
                            <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
                                {pageLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setPagesOpen(false)}
                                        className={({ isActive }) =>
                                            [
                                                'block rounded-md px-3 py-2 text-sm font-medium hover:bg-[#eefbfa] hover:text-[#062b33]',
                                                isActive ? 'bg-[#eefbfa] text-[#062b33]' : 'text-slate-700',
                                            ].join(' ')
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <NavLink
                        to="/paid-consulting"
                        className="rounded-md bg-[#062b33] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b3c46]"
                    >
                        Paid Consulting
                    </NavLink>
                </div>

                <button
                    type="button"
                    className={[
                        'grid size-11 place-items-center rounded-lg text-2xl font-semibold transition lg:hidden',
                        'border border-slate-300 text-[#062b33]',
                    ].join(' ')}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? 'x' : '='}
                </button>
            </div>

            {menuOpen && (
                <div className="mt-3 rounded-lg bg-white px-4 py-4 shadow-xl lg:hidden">
                    <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
                        {mainLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={mobileNavClass}
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <div className="px-3 pb-2 pt-3 text-xs font-bold uppercase text-slate-500">
                            Pages
                        </div>
                        {pageLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    [
                                        'rounded-lg px-3 py-3 text-base font-medium hover:bg-[#eefbfa] hover:text-[#062b33]',
                                        isActive ? 'bg-[#eefbfa] text-[#062b33]' : 'text-slate-700',
                                    ].join(' ')
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <NavLink
                            to="/paid-consulting"
                            onClick={closeMenu}
                            className="mt-3 rounded-lg bg-[#062b33] px-5 py-3 text-center text-base font-bold text-white shadow-sm hover:bg-[#0b3c46]"
                        >
                            Paid Consulting
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
}
