import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnRouteChange() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return null;
}

export function FloatingScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 420);

        toggleVisibility();
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-5 z-50 grid size-11 place-items-center rounded-full bg-[#0b7f89] text-xl font-black text-white shadow-xl shadow-slate-950/20 transition hover:bg-[#0a6c75] sm:left-6"
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
}
