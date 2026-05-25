import { Link } from 'react-router-dom';

const services = [
    {
        title: 'EPF Withdrawal',
        description: 'Quick and hassle-free PF withdrawal with expert support and fast processing.',
        label: 'Popular',
        tone: 'bg-cyan-100 text-cyan-800',
        image: '/images/pf.webp',
        path: '/services#epf-withdrawal',
    },
    {
        title: 'ESIC Registration',
        description: 'Easy ESIC registration with complete guidance and full compliance support.',
        label: 'Popular',
        tone: 'bg-cyan-100 text-cyan-800',
        image: '/images/esi.webp',
        path: '/services#esic-registration',
    },
    {
        title: 'EPF Registration',
        description: 'Fast and accurate EPF registration with professional assistance and zero errors.',
        label: 'Popular',
        tone: 'bg-slate-200 text-slate-800',
        image: '/images/pf.webp',
        path: '/services#epf-registration',
    },
];

function ServiceImage({ src, alt }) {
    return (
        <div className="mx-auto grid size-44 place-items-center rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition duration-300 group-hover:scale-105 group-hover:shadow-md">
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-contain"
                loading="lazy"
            />
        </div>
    );
}

export default function PopularServices() {
    return (
        <section className="js-popular-services bg-white px-4 py-20 text-[#062b33] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <span className="inline-flex rounded-full bg-[#eefbfa] px-4 py-1 text-xs font-black text-[#062b33]">
                        Popular Services
                    </span>
                    <h2 className="mt-8 text-3xl font-black tracking-tight sm:text-5xl">
                        Complete PF & ESIC Solutions
                    </h2>
                    <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-600">
                        India's trusted PF Consultant providing fast PF withdrawal, EPF compliance, and ESIC services for employees, businesses & startups with expert support.
                    </p>
                </div>

                <div className="mt-14 grid gap-7 lg:grid-cols-3">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            to={service.path}
                            className="js-service-card group relative rounded-2xl border border-slate-200 bg-[#fbfcff] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[#0fd3c8] hover:shadow-xl hover:shadow-slate-200/70"
                        >
                            <span className={`absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-black ${service.tone}`}>
                                {service.label}
                            </span>

                            <ServiceImage src={service.image} alt={`${service.title} logo`} />

                            <h3 className="mt-8 text-2xl font-black text-slate-950">
                                {service.title}
                            </h3>
                            <p className="mx-auto mt-5 max-w-xs text-base leading-8 text-slate-600">
                                {service.description}
                            </p>

                            <div className="mt-8 border-t border-slate-200 pt-6">
                                <span className="inline-flex items-center gap-2 text-sm font-black text-[#062b33] transition group-hover:text-[#0b7f89]">
                                    View Details <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
