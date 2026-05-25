export default function LegalPage({ eyebrow, title, intro, sections, children }) {
    return (
        <section className="bg-white px-4 py-16 text-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <p className="text-sm font-bold uppercase tracking-wide text-[#087f86]">{eyebrow}</p>
                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
                {intro && <p className="mt-5 text-base leading-8 text-slate-600">{intro}</p>}

                <div className="mt-10 space-y-8">
                    {sections.map((section) => (
                        <article key={section.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <h2 className="text-xl font-black text-slate-950">{section.title}</h2>
                            {section.description && (
                                <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                            )}
                            {section.items && (
                                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                                    {section.items.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#087f86]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                    {children}
                </div>
            </div>
        </section>
    );
}
