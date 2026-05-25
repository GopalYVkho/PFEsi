const steps = [
    ['01', 'Share Requirement', 'Tell us your PF, ESI, filing, or correction need.'],
    ['02', 'Document Check', 'We verify the documents and clarify the exact process.'],
    ['03', 'Consultant Action', 'Our team handles registration, filing, or correction work.'],
    ['04', 'Track Updates', 'You receive clear status updates until completion.'],
];

const services = [
    'EPF Registration',
    'ESIC Registration',
    'Monthly Filing',
    'PF Withdrawal',
    'KYC Correction',
    'Compliance Advisory',
];

export default function HomeHighlights() {
    return (
        <>
            <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-black uppercase text-orange-500">Work with us</p>
                    <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                        <h2 className="max-w-2xl text-3xl font-black text-slate-950 sm:text-4xl">
                            Get your compliance work done in 04 simple steps
                        </h2>
                        <p className="max-w-xl text-base leading-7 text-slate-600">
                            A calm process for businesses that need reliable PF and ESI support without confusing follow-ups.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map(([number, title, description]) => (
                            <div key={title} className="rounded-lg border border-slate-200 bg-[#f7fbff] p-6">
                                <p className="text-sm font-black text-orange-500">{number}</p>
                                <h3 className="mt-4 text-lg font-black text-[#143d59]">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f7fbff] px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase text-orange-500">What we offer</p>
                        <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                            All your PF & ESI needs under one roof
                        </h2>
                        <p className="mt-5 text-base leading-7 text-slate-600">
                            Inspired by financial advisory sites, this theme keeps services easy to scan while keeping the design clean and professional.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {services.map((service) => (
                            <div key={service} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
                                <h3 className="font-black text-[#143d59]">{service}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Clear consulting support with documentation guidance and status updates.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
