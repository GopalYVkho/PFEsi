import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// Image imports based on your folder structure
import withdrawalImg from "../../../public/images/withdrawal.png";
import transferImg from "../../../public/images/transfer.png";
import updateImg from "../../../public/images/update.png";
import pensionImg from "../../../public/images/pension.png";

// --- SMOOTH FADE-IN COMPONENT ---
function FadeIn({ children, delay = 0, className = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Show only once when scrolled into view
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

const pfServices = [
    {
        id: "withdrawal",
        title: "PF Withdrawal",
        description:
            "Hassle-free claim processing for full or partial PF withdrawals. We ensure correct documentation for quick bank settlements directly to your registered account without any office visits.",
        image: withdrawalImg,
        bgColor: "bg-[#ffd8df]",
        linkColor: "text-rose-600",
    },
    {
        id: "transfer",
        title: "PF Transfer",
        description:
            "Seamlessly merge your old PF accounts into your new one. Transfer your balance from previous employers to your current employer online to keep your retirement savings consolidated.",
        image: transferImg,
        bgColor: "bg-[#c9fbf6]",
        linkColor: "text-teal-700",
    },
    {
        id: "update",
        title: "KYC & Profile Update",
        description:
            "Fix name mismatches, update Date of Birth, and securely link your Bank account, PAN, and Aadhaar to your UAN. We guide you through the joint declaration process if needed.",
        image: updateImg,
        bgColor: "bg-[#c9fbf6]",
        linkColor: "text-teal-700",
    },
    {
        id: "pension",
        title: "PF Pension Claim",
        description:
            "Expert assistance in processing your Employee Pension Scheme (EPS) benefits, generating Scheme Certificates, and handling form 10C or 10D with complete compliance.",
        image: pensionImg,
        bgColor: "bg-[#ffd8df]",
        linkColor: "text-rose-600",
    },
];
const allPfServices = [
    "EPF Registration",
    "PF Withdrawal",
    "PF Transfer",
    "PF Balance / Passbook",
    "UAN Activation",
    "KYC Update",
    "Name Correction",
    "DOB Correction",
    "Mobile & Email Update",
    "Pension (EPS) Services",
    "Joint Declaration",
    "Death Claim / Nominee Claim",
];
export default function PfServicesSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24 px-4 sm:px-6 lg:px-8 z-0">
            {/* --- ANIMATED BACKGROUND --- */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                <div className="absolute top-[5%] left-[10%] h-[400px] w-[400px] rounded-full bg-[#ffd8df] opacity-40 blur-[120px] animate-pulse"></div>
                <div
                    className="absolute bottom-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-[#c9fbf6] opacity-40 blur-[120px] animate-pulse"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute top-[40%] left-[40%] h-[300px] w-[300px] rounded-full bg-[#ffd8df] opacity-20 blur-[100px] animate-pulse"
                    style={{ animationDuration: "5s", animationDelay: "2s" }}
                ></div>
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
                    <FadeIn delay={0}>
                        <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                            Our Expertise
                        </span>
                    </FadeIn>
                    <FadeIn delay={150}>
                        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-5xl">
                            Complete PF Solutions
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <p className="mt-6 text-lg text-gray-500 max-w-2xl">
                            From basic profile updates to final pension
                            withdrawals, handle all your Provident Fund
                            requirements without visiting government offices.
                        </p>
                    </FadeIn>
                </div>

                {/* Zigzag Services List */}
                <div className="flex flex-col gap-24 lg:gap-36">
                    {pfServices.map((service, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={service.id}
                                className={`group flex flex-col items-center gap-10 md:gap-16 lg:gap-24 ${
                                    isEven
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Image Container with FadeIn */}
                                <FadeIn className="w-full md:w-1/2" delay={100}>
                                    <div
                                        className={`relative w-full aspect-[4/3] rounded-[2.5rem] p-8 flex items-center justify-center ${service.bgColor} bg-opacity-30 backdrop-blur-sm transition-all duration-700 hover:bg-opacity-60 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]`}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-[85%] w-[85%] object-contain drop-shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:drop-shadow-2xl"
                                        />
                                    </div>
                                </FadeIn>

                                {/* Content Container */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <FadeIn delay={200}>
                                        <div
                                            className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${service.bgColor} bg-opacity-60 mb-8 text-2xl font-black ${service.linkColor} shadow-sm`}
                                        >
                                            0{index + 1}
                                        </div>
                                    </FadeIn>

                                    <FadeIn delay={300}>
                                        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                                            {service.title}
                                        </h3>
                                    </FadeIn>

                                    <FadeIn delay={400}>
                                        <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-500">
                                            {service.description}
                                        </p>
                                    </FadeIn>

                                    <FadeIn delay={500}>
                                        <div className="mt-10">
                                            <Link
                                                to={`/paid-consulting`}
                                                className={`inline-flex items-center text-base font-bold ${service.linkColor} transition-all hover:opacity-70 group/link`}
                                            >
                                                Get help with this
                                                <svg
                                                    className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-2"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2.5}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20">
                    <FadeIn delay={400}>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {allPfServices.map((service, index) => (
                                <Link
                                    key={index}
                                    to="/paid-consulting"
                                    className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9fbf6] hover:bg-white hover:shadow-lg"
                                >
                                    <span className="text-sm font-bold text-gray-700 transition-colors group-hover:text-teal-800">
                                        {service}
                                    </span>
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-all group-hover:bg-[#c9fbf6] group-hover:text-teal-800">
                                        <svg
                                            className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
