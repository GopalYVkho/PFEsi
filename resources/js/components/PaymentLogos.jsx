export function UpiIcon({ className = 'h-5' }) {
    return (
        <svg viewBox="0 0 76 24" fill="none" className={className} aria-label="UPI">
            {/* UPI arrows */}
            <path d="M3 19.5L12 4.5H19L10 19.5H3Z" fill="#097938" />
            <path d="M12.5 19.5L21.5 4.5H28.5L19.5 19.5H12.5Z" fill="#ED7524" />
            {/* UPI text */}
            <text x="31" y="17" fill="#0f172a" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13.5" fontWeight="900" fontStyle="italic" letterSpacing="0.5">
                UPI
            </text>
        </svg>
    );
}

export function GooglePayIcon({ className = 'h-5' }) {
    return (
        <svg viewBox="0 0 78 24" fill="none" className={className} aria-label="Google Pay">
            {/* Google 4-color 'G' */}
            <g transform="translate(1, 3)">
                <path d="M8.8 8.8v2.6h4.3c-.4 1.8-2 3.1-4.3 3.1-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7c1.2 0 2.2.4 3 1.2l1.9-1.9C12.4 3.2 10.7 2.5 8.8 2.5 4.8 2.5 1.5 5.8 1.5 9.8s3.3 7.3 7.3 7.3c4.2 0 7-3 7-7.2 0-.6-.1-1.1-.2-1.6H8.8z" fill="#4285F4" />
                <path d="M3.2 6.5l2 1.5c.6-1.5 2-2.6 3.6-2.6 1.2 0 2.2.4 3 1.2l1.9-1.9C12.4 3.2 10.7 2.5 8.8 2.5 6.3 2.5 4.2 4.1 3.2 6.5z" fill="#EA4335" />
                <path d="M8.8 17.1c1.9 0 3.5-.6 4.7-1.8l-1.9-1.6c-.6.4-1.5.7-2.8.7-2.3 0-3.9-1.3-4.3-3.1L2.4 12.8c1 2.5 3.3 4.3 6.4 4.3z" fill="#34A853" />
                <path d="M4.5 11.3c-.2-.6-.3-1.3-.3-2 0-.7.1-1.4.3-2L2.4 5.8C1.8 7 1.5 8.3 1.5 9.8s.3 2.8.9 4l2.1-2.5z" fill="#FBBC05" />
            </g>
            {/* Pay text */}
            <text x="21" y="16.5" fill="#3c4043" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.2">
                Pay
            </text>
        </svg>
    );
}

export function PhonePeIcon({ className = 'h-5' }) {
    return (
        <svg viewBox="0 0 92 24" fill="none" className={className} aria-label="PhonePe">
            {/* PhonePe Purple Circle with Devanagari Pe */}
            <circle cx="12" cy="12" r="10.5" fill="#5f259f" />
            <path
                d="M8.5 7.5h6.5v1.8h-4v2.4h3.5c1.8 0 3 1.1 3 2.7 0 1.7-1.3 2.8-3.1 2.8h-1.8V20H8.5V7.5zm4.1 5.4h-1.6v2.3h1.6c.8 0 1.4-.4 1.4-1.1 0-.8-.6-1.2-1.4-1.2z"
                fill="#ffffff"
            />
            {/* PhonePe wordmark */}
            <text x="27" y="16.5" fill="#1e1b4b" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12.5" fontWeight="800">
                Phone<span fill="#5f259f" className="fill-[#5f259f]">Pe</span>
            </text>
        </svg>
    );
}

export function PaytmIcon({ className = 'h-5' }) {
    return (
        <svg viewBox="0 0 76 24" fill="none" className={className} aria-label="Paytm">
            {/* Pay in navy blue */}
            <text x="2" y="17" fill="#002970" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="900" letterSpacing="-0.5">
                Pay
            </text>
            {/* tm in cyan */}
            <text x="29" y="17" fill="#00b9f5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="900" letterSpacing="-0.5">
                tm
            </text>
            <rect x="53" y="6" width="20" height="12" rx="3" fill="#00b9f5" fillOpacity="0.12" stroke="#00b9f5" strokeWidth="1" />
            <text x="56.5" y="15" fill="#00b9f5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="800">
                UPI
            </text>
        </svg>
    );
}

export function VisaIcon({ className = 'h-4' }) {
    return (
        <svg viewBox="0 0 38 16" fill="none" className={className} aria-label="Visa">
            <text x="1" y="13" fill="#1434CB" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" letterSpacing="0.8">
                VISA
            </text>
        </svg>
    );
}

export function MastercardIcon({ className = 'h-5' }) {
    return (
        <svg viewBox="0 0 36 22" fill="none" className={className} aria-label="Mastercard">
            {/* Red circle */}
            <circle cx="12" cy="11" r="9" fill="#EB001B" />
            {/* Yellow circle */}
            <circle cx="24" cy="11" r="9" fill="#F79E1B" fillOpacity="0.95" />
            {/* Intersecting shade */}
            <path d="M18 4.2a9 9 0 013 6.8 9 9 0 01-3 6.8 9 9 0 01-3-6.8 9 9 0 013-6.8z" fill="#FF5F00" />
        </svg>
    );
}

export function RuPayIcon({ className = 'h-4' }) {
    return (
        <svg viewBox="0 0 54 18" fill="none" className={className} aria-label="RuPay">
            <path d="M42 3l6 6-6 6h4l6-6-6-6h-4z" fill="#007934" />
            <path d="M36 3l6 6-6 6h4l6-6-6-6h-4z" fill="#F37021" />
            <text x="1" y="14" fill="#1a365d" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="900" fontStyle="italic">
                RuPay
            </text>
        </svg>
    );
}

export default function PaymentMethodsRow() {
    return (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {/* UPI */}
            <div className="flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs">
                <UpiIcon className="h-4.5 w-auto" />
            </div>

            {/* Google Pay */}
            <div className="flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs">
                <GooglePayIcon className="h-4.5 w-auto" />
            </div>

            {/* PhonePe */}
            <div className="flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs">
                <PhonePeIcon className="h-4.5 w-auto" />
            </div>

            {/* Paytm */}
            <div className="flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-3.5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs">
                <PaytmIcon className="h-4.5 w-auto" />
            </div>

            {/* Cards (Visa / Mastercard / RuPay) */}
            <div className="flex h-10 items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs">
                <VisaIcon className="h-3.5 w-auto" />
                <span className="text-slate-200">|</span>
                <MastercardIcon className="h-4 w-auto" />
                <span className="text-slate-200">|</span>
                <RuPayIcon className="h-3.5 w-auto" />
            </div>
        </div>
    );
}
