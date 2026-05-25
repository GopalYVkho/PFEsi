import { useState } from 'react';

const phoneNumber = '918001044044';
const whatsappMessage = 'Hello, I need help with PF or ESIC consultation.';

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
            <div
                className={[
                    'flex flex-col items-end gap-3 transition-all duration-200',
                    isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0',
                ].join(' ')}
            >
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#062b33] shadow-lg ring-1 ring-slate-100 transition hover:-translate-y-0.5"
                >
                    WhatsApp Chat
                    <span className="grid size-10 place-items-center rounded-full bg-[#25d366] text-sm font-black text-white">
                        WA
                    </span>
                </a>
                <a
                    href={`tel:+${phoneNumber}`}
                    className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#062b33] shadow-lg ring-1 ring-slate-100 transition hover:-translate-y-0.5"
                >
                    Call Us
                    <span className="grid size-10 place-items-center rounded-full bg-[#0b7f89] text-base font-black text-white">
                        ☎
                    </span>
                </a>
            </div>

            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="relative grid size-14 place-items-center rounded-2xl bg-[#0fd3c8] text-xl font-black text-[#062b33] shadow-xl transition hover:bg-[#10c6bd]"
                aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
                aria-expanded={isOpen}
            >
                {!isOpen && <span className="absolute right-2 top-2 size-2.5 rounded-full bg-[#ff5a5f]" />}
                {isOpen ? 'x' : '•••'}
            </button>
        </div>
    );
}
