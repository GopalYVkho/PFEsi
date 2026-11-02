import { useEffect, useState } from 'react';

/**
 * Jon Kantner's "Lines and Dots" pure geometric loader animation.
 * Themed with brand teal.
 */
export function LinesAndDots({ size = '13px', className = 'text-teal-700' }) {
    const sectors = Array.from({ length: 60 }, (_, i) => {
        const fraction = i / 60;
        return (
            <div
                key={i}
                className="lines-and-dots__sector"
                style={{
                    animationDelay: `calc(var(--anim-dur) * ${-fraction})`,
                    transform: `rotate(${-fraction * 360}deg) translateY(4.25em)`,
                }}
            >
                <div className="lines-and-dots__line" />
                <div className="lines-and-dots__dot" />
                <div className="lines-and-dots__dot" />
            </div>
        );
    });

    return (
        <div
            className={`lines-and-dots ${className}`}
            style={{ fontSize: size }}
            aria-hidden="true"
        >
            {sectors}
        </div>
    );
}

/**
 * Fullscreen initial site preloader - pure loader only.
 */
export function InitialPreloader() {
    const [visible, setVisible] = useState(true);
    const [rendered, setRendered] = useState(true);

    useEffect(() => {
        // Clean up static HTML preloader if present
        const staticPreloader = document.getElementById('initial-preloader');
        if (staticPreloader) {
            staticPreloader.style.opacity = '0';
            setTimeout(() => {
                staticPreloader.remove();
            }, 250);
        }

        // Smoothly fade out the preloader after site mounts
        const timer = setTimeout(() => {
            setVisible(false);
            const removeTimer = setTimeout(() => setRendered(false), 500);
            return () => clearTimeout(removeTimer);
        }, 750);

        return () => clearTimeout(timer);
    }, []);

    if (!rendered) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-500 ${
                visible ? 'opacity-100' : 'pointer-events-none opacity-0 scale-95'
            }`}
            aria-live="polite"
            aria-label="Loading..."
        >
            <LinesAndDots size="14px" className="text-teal-700" />
        </div>
    );
}

/**
 * Route transition loader - pure loader only.
 */
export function RouteLoader() {
    return (
        <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-4">
            <LinesAndDots size="9px" className="text-teal-700" />
        </div>
    );
}
