import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Image imports based on your folder structure
import esicRegistrationImg from '../../../public/images/registrationesi.png';
import employeeRegistrationImg from '../../../public/images/employeeregistration.png';
import updateEsicImg from '../../../public/images/updatesesi.png';
import benefitClaimsImg from '../../../public/images/benefitclaimsesi.png';

// --- SMOOTH FADE-IN COMPONENT ---
function FadeIn({ children, delay = 0, className = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
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
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

// All services list for the "Glimpse" section
const allEsicServices = [
    'ESIC Registration',
    'Employee Registration',
    'Employer Registration',
    'TIC / Pehchan Card',
    'Dispensary Change',
    'Family Member Update',
    'Accident Benefit Claims',
    'Other ESIC Corrections'
];

// Featured 4 services for the 2x2 Grid
const featuredServices = [
    {
        id: 'esic-registration',
        title: 'ESIC Registration',
        description: 'Complete setup for employers to comply with ESI acts. We handle the paperwork, company code generation, and portal setup seamlessly.',
        image: esicRegistrationImg,
        bgColor: 'bg-[#ffd8df]', // Theme pink
        linkColor: 'text-rose-600',
        badgeColor: 'text-rose-700 bg-rose-100',
    },
    {
        id: 'employee-registration',
        title: 'Employee Registration',
        description: 'Quickly onboard your workforce into the ESIC portal. We generate ESI Pehchan cards for new hires for immediate medical coverage.',
        image: employeeRegistrationImg,
        bgColor: 'bg-[#c9fbf6]', // Theme cyan
        linkColor: 'text-teal-700',
        badgeColor: 'text-teal-800 bg-teal-100',
    },
    {
        id: 'esi-update',
        title: 'ESI Update & Correction',
        description: 'Rectify mismatched details like name, date of birth, address, or family member information on the ESI portal without bureaucratic delays.',
        image: updateEsicImg,
        bgColor: 'bg-[#c9fbf6]', // Theme cyan
        linkColor: 'text-teal-700',
        badgeColor: 'text-teal-800 bg-teal-100',
    },
    {
        id: 'benefit-claims',
        title: 'Benefit Claims',
        description: 'Expert guidance for claiming ESIC benefits. Be it maternity leave, sickness benefits, or medical reimbursement claims, we ensure quick processing.',
        image: benefitClaimsImg,
        bgColor: 'bg-[#ffd8df]', // Theme pink
        linkColor: 'text-rose-600',
        badgeColor: 'text-rose-700 bg-rose-100',
    }
];

export default function EsicServicesSection() {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 z-0">
            
            {/* --- ANIMATED GRID BACKGROUND --- */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                
                {/* Floating Theme Colors (Blobs) */}
                <div className="absolute top-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#c9fbf6] opacity-40 blur-[120px] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div 
                    className="absolute bottom-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-[#ffd8df] opacity-40 blur-[120px] animate-pulse" 
                    style={{ animationDuration: '5s', animationDelay: '1s' }}
                ></div>
                <div 
                    className="absolute top-[50%] left-[50%] h-[300px] w-[300px] rounded-full bg-[#c9fbf6] opacity-20 blur-[100px] animate-pulse" 
                    style={{ animationDuration: '6s', animationDelay: '2s' }}
                ></div>
            </div>
            {/* --- END ANIMATED BACKGROUND --- */}

            <div className="mx-auto max-w-7xl relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                    <FadeIn delay={0}>
                        <span className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold tracking-widest text-gray-500 uppercase shadow-sm border border-gray-100">
                            Health & Security
                        </span>
                    </FadeIn>
                    <FadeIn delay={150}>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-5xl">
                            Comprehensive ESIC Services
                        </h2>
                    </FadeIn>
                    <FadeIn delay={300}>
                        <p className="mt-6 text-lg text-gray-500 max-w-2xl">
                            From initial company registration to processing employee benefit claims, we manage all your Employees' State Insurance compliance effortlessly.
                        </p>
                    </FadeIn>
                </div>

                {/* --- FEATURED SERVICES: 2x2 GRID --- */}
                <div className="grid gap-8 md:grid-cols-2">
                    {featuredServices.map((service, index) => (
                        <FadeIn key={service.id} delay={index * 150} className="h-full">
                            <div className="group relative flex h-full flex-col rounded-[2.5rem] border border-gray-100 bg-white/70 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:bg-white sm:p-8">
                                
                                {/* Image Box */}
                                <div className={`relative mb-8 flex h-64 w-full items-center justify-center overflow-hidden rounded-[1.5rem] ${service.bgColor} bg-opacity-30 transition-colors duration-500 group-hover:bg-opacity-50`}>
                                    
                                    <div className={`absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black shadow-sm ${service.badgeColor}`}>
                                        0{index + 1}
                                    </div>

                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="relative z-10 h-[75%] w-[75%] object-contain drop-shadow-md transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-2xl"
                                    />
                                </div>

                                {/* Content Box - Added FadeIn for Text Elements */}
                                <div className="flex flex-1 flex-col">
                                    <FadeIn delay={(index * 150) + 150}>
                                        <h3 className="text-2xl font-extrabold text-gray-900">
                                            {service.title}
                                        </h3>
                                    </FadeIn>
                                    
                                    <FadeIn delay={(index * 150) + 250} className="mt-4 flex-1">
                                        <p className="text-base leading-relaxed text-gray-500">
                                            {service.description}
                                        </p>
                                    </FadeIn>
                                    
                                    <FadeIn delay={(index * 150) + 350} className="mt-8">
                                        <Link 
                                            to="/paid-consulting" 
                                            className={`inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-bold ${service.linkColor} ${service.bgColor} bg-opacity-20 transition-all hover:bg-opacity-40 group/btn`}
                                        >
                                            Get consultation 
                                            <svg className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </FadeIn>
                                </div>

                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* --- QUICK GLIMPSE: ALL SERVICES (PILL GRID) --- */}
                <div className="mt-20">
                    <FadeIn delay={400}>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {allEsicServices.map((service, index) => (
                                <Link 
                                    key={index}
                                    to="/paid-consulting"
                                    className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9fbf6] hover:bg-white hover:shadow-lg"
                                >
                                    <span className="text-sm font-bold text-gray-700 transition-colors group-hover:text-teal-800">
                                        {service}
                                    </span>
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-all group-hover:bg-[#c9fbf6] group-hover:text-teal-800">
                                        <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                </div>
                {/* --- END QUICK GLIMPSE --- */}

            </div>
        </section>
    );
}