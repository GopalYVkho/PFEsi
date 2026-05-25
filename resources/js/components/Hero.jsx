import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const consultingTopics = [
    'PF Withdrawal?',
    'EPF Registration?',
    'ESIC Registration?',
    'Monthly Filing?',
    'KYC or Correction?',
];

const proofPoints = [
    'EPFO & ESIC registration',
    'Monthly compliance support',
    'PF withdrawal guidance',
];

function HeroGraphic() {
    return (
        <div className="js-hero-visual relative mx-auto min-h-[420px] w-full max-w-xl">
            <div className="js-hero-blob absolute right-0 top-0 size-80 rounded-full bg-[#b8f4ef] blur-2xl" aria-hidden="true" />
            <div className="js-hero-blob absolute bottom-0 left-0 size-72 rounded-full bg-[#ffd8df] blur-2xl" aria-hidden="true" />

            <div className="js-float-panel relative ml-auto mt-6 w-[82%] rounded-[2rem] border-2 border-[#062b33] bg-white/70 p-6 shadow-2xl shadow-slate-200">
                <div className="flex items-center justify-between">
                    <div className="h-3 w-32 rounded-full bg-[#0fd3c8]" />
                    <div className="flex gap-2">
                        <span className="size-3 rounded-full border border-[#062b33]" />
                        <span className="size-3 rounded-full border border-[#062b33]" />
                        <span className="size-3 rounded-full border border-[#062b33]" />
                    </div>
                </div>

                <div className="mt-8 grid gap-4">
                    {['PF withdrawal request', 'EPF registration file', 'Monthly filing status'].map((item, index) => (
                        <div key={item} className="flex items-center gap-4 rounded-xl border-2 border-[#062b33] bg-white p-4">
                            <span className={`grid size-10 place-items-center rounded-full font-black text-white ${index === 1 ? 'bg-[#ff6b6b]' : 'bg-[#0fd3c8]'}`}>
                                {index + 1}
                            </span>
                            <div className="flex-1">
                                <p className="text-sm font-black text-[#062b33]">{item}</p>
                                <div className="mt-2 h-2 rounded-full bg-slate-200">
                                    <div className={`h-full rounded-full ${index === 2 ? 'w-4/5 bg-[#ff6b6b]' : 'w-2/3 bg-[#0fd3c8]'}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="js-float-card absolute left-4 top-20 rounded-2xl border-2 border-[#062b33] bg-white p-5 shadow-xl">
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">Compliance</p>
                <p className="mt-2 text-3xl font-black text-[#062b33]">99%</p>
            </div>

            <div className="js-float-card absolute bottom-8 right-4 rounded-2xl bg-[#062b33] p-5 text-white shadow-xl">
                <p className="text-xs font-black uppercase tracking-wide text-white/60">Support</p>
                <p className="mt-2 text-xl font-black">Pan India</p>
            </div>
        </div>
    );
}

export default function Hero() {
    const [topicIndex, setTopicIndex] = useState(0);
    const [displayedTopic, setDisplayedTopic] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTopic = consultingTopics[topicIndex];
        const typingSpeed = 90;
        const deletingSpeed = 45;
        const holdTime = 1100;

        const timer = window.setTimeout(() => {
            if (!isDeleting && displayedTopic.length < currentTopic.length) {
                setDisplayedTopic(currentTopic.slice(0, displayedTopic.length + 1));
                return;
            }

            if (!isDeleting && displayedTopic.length === currentTopic.length) {
                setIsDeleting(true);
                return;
            }

            if (isDeleting && displayedTopic.length > 0) {
                setDisplayedTopic(currentTopic.slice(0, displayedTopic.length - 1));
                return;
            }

            setIsDeleting(false);
            setTopicIndex((currentIndex) => (currentIndex + 1) % consultingTopics.length);
        }, !isDeleting && displayedTopic.length === currentTopic.length ? holdTime : isDeleting ? deletingSpeed : typingSpeed);

        return () => window.clearTimeout(timer);
    }, [displayedTopic, isDeleting, topicIndex]);

    return (
        <section className="js-hero relative isolate overflow-hidden bg-[#f4f7fd] text-[#062b33]">
            <div className="js-hero-blob absolute -left-32 top-20 size-96 rounded-full bg-[#ffd8df] blur-3xl" aria-hidden="true" />
            <div className="js-hero-blob absolute right-10 top-28 size-96 rounded-full bg-[#c9fbf6] blur-3xl" aria-hidden="true" />

            <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-24 lg:pt-24">
                <div className="max-w-3xl">
                    <p className="js-hero-item mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#062b33] shadow-sm ring-1 ring-slate-100">
                        A complete compliance solution for your business needs
                    </p>

                    <h1 className="js-hero-item text-4xl font-black leading-tight tracking-tight text-[#062b33] sm:text-5xl lg:text-6xl">
                        Looking Experienced Consultant for{' '}
                        <span className="block min-h-[1.05em] text-[#062b33]">
                            {displayedTopic}
                            <span className="ml-1 inline-block h-[0.85em] w-1 animate-pulse bg-[#ff5a5f] align-[-0.05em]" aria-hidden="true" />
                        </span>
                    </h1>

                    <p className="js-hero-item mt-8 max-w-xl text-xl leading-8 text-[#062b33]">
                        We provide EPFO registration, ESIC registration, monthly compliance and PF withdrawal services across India.
                    </p>

                    <div className="js-hero-item mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Link
                            to="/paid-consulting"
                            className="motion-button rounded-md bg-[#062b33] px-7 py-4 text-center text-base font-black text-white transition hover:bg-[#0b3c46]"
                        >
                            Get a Consultation
                        </Link>
                        <Link
                            to="/services"
                            className="px-4 py-4 text-base font-black text-[#062b33] transition hover:text-[#ff5a5f]"
                        >
                            View Services <span className="ml-2">›</span>
                        </Link>
                    </div>

                    <div className="js-hero-item mt-10 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
                        {proofPoints.map((point) => (
                            <div key={point} className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-[#0fd3c8]" aria-hidden="true" />
                                {point}
                            </div>
                        ))}
                    </div>
                </div>

                <HeroGraphic />
            </div>
        </section>
    );
}
