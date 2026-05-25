export default function PageShell({ eyebrow, title, description }) {
    return (
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase text-emerald-700">
                {eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
                {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {description}
            </p>
        </section>
    );
}
