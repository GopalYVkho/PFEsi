import { useState } from 'react';

const phoneNumber = '918001044044';
const whatsappMessage = 'Hello CCS, I need help with PF or ESIC consultation.';

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
            {/* Popout Action Links */}
            <div
                className={[
                    'flex flex-col items-end gap-3 transition-all duration-200',
                    isOpen ? 'visible translate-y-0 opacity-100 pointer-events-auto' : 'invisible translate-y-3 opacity-0 pointer-events-none',
                ].join(' ')}
            >
                {/* WhatsApp Chat Button */}
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-full bg-white/95 backdrop-blur-md py-2 pl-4 pr-2 text-xs sm:text-sm font-bold text-slate-900 shadow-xl border border-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                    <span>Instant WhatsApp Chat</span>
                    <span className="grid size-9 place-items-center rounded-full bg-[#25D366] text-white shadow-md transition-transform group-hover:scale-105">
                        <svg className="size-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.058-1.574-.326-1.199-.489-2.023-1.642-2.181-1.854-.158-.212-1.278-1.701-1.278-3.243 0-1.542.809-2.301 1.096-2.612.288-.311.63-.389.84-.389.21 0 .42.003.606.012.196.01.458-.075.716.545.267.643.91 2.22.99 2.38.08.16.133.348.026.56-.106.212-.16.344-.316.533-.157.19-.33.424-.472.569-.158.16-.322.335-.138.653.185.318.82 1.352 1.761 2.19 1.213 1.08 2.234 1.415 2.553 1.574.319.16.505.134.691-.08.187-.213.797-.93 1.01-1.248.213-.318.425-.265.717-.16.292.106 1.859.877 2.177 1.036.319.16.531.239.61.372.08.133.08.77-.064 1.175z" />
                        </svg>
                    </span>
                </a>

                {/* Call Us Button */}
                <a
                    href={`tel:+${phoneNumber}`}
                    className="group flex items-center gap-3 rounded-full bg-white/95 backdrop-blur-md py-2 pl-4 pr-2 text-xs sm:text-sm font-bold text-slate-900 shadow-xl border border-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                    <span>Direct Helpline: +91 8001 044 044</span>
                    <span className="grid size-9 place-items-center rounded-full bg-gradient-to-tr from-teal-700 to-cyan-700 text-white shadow-md transition-transform group-hover:scale-105">
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </span>
                </a>
            </div>

            {/* Toggle Button */}
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-600 to-cyan-600 text-white shadow-2xl shadow-teal-900/30 transition-all duration-200 hover:scale-105 focus:outline-none"
                aria-label={isOpen ? 'Close contact menu' : 'Open live contact options'}
                aria-expanded={isOpen}
            >
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex size-3">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
                    </span>
                )}
                {isOpen ? (
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
