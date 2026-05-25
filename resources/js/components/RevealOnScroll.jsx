export default function RevealOnScroll({ children, delay = 0 }) {
    return (
        <div
            className="js-section-reveal"
            data-reveal-delay={delay}
        >
            {children}
        </div>
    );
}
