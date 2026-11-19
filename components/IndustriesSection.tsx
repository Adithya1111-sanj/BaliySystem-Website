
const industries = [
    { title: "Retail & E-commerce", icon: "cart" },
    { title: "Healthcare", icon: "heart" },
    { title: "Education", icon: "education" },
    { title: "Logistics", icon: "logistics" },
    { title: "Finance", icon: "finance" },
    { title: "Manufacturing", icon: "settings" },
    { title: "More Industries", icon: "plus" },
];

function IndustryIcon({ name }: { name: string }) {
    const common = {
        width: 28,
        height: 28,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    switch (name) {
        case "cart":
            return <svg {...common}><path d="M3 3h2l2.5 12h11L21 7H6" /><circle cx="9" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /></svg>;
        case "heart":
            return <svg {...common}><path d="M20.8 8.8c0 4.5-8.8 10-8.8 10S3.2 13.3 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" /></svg>;
        case "education":
            return <svg {...common}><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v7" /></svg>;
        case "logistics":
            return <svg {...common}><rect x="3" y="3" width="18" height="18" /><path d="M8 8h8v8H8z" /></svg>;
        case "finance":
            return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M12 7v10" /></svg>;
        case "settings":
            return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4L7.3 15a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 2Z" /></svg>;
        default:
            return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
    }
}

export default function IndustriesSection() {
    return (
        <section
            id="industries"
            className="mx-auto mt-8 mb-16 w-[92%] max-w-[1500px] py-4"
        >
            <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
                <div>
                    <span className="text-[13px] font-extrabold text-[#0757e8]">
                        INDUSTRIES WE SERVE
                    </span>

                    <h2 className="mt-2 max-w-[650px] text-3xl font-extrabold leading-tight text-[#071936] md:text-4xl">
                        Delivering Solutions
                        <br className="hidden md:block" />
                        Across Industries
                    </h2>
                </div>

                <p className="max-w-[400px] text-sm leading-6 text-[#34435b]">
                    Empowering businesses across industries with
                    innovative technology, scalable software and
                    digital solutions.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
                {industries.map((industry) => (
                    <div
                        key={industry.title}
                        className="group flex min-h-[145px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#dce7f5] bg-white px-3 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0757e8] hover:shadow-lg"
                    >
                        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eff6ff] text-[#0757e8] transition-all duration-300 group-hover:bg-[#0757e8] group-hover:text-white">
                            <IndustryIcon name={industry.icon} />
                        </span>

                        <h3 className="text-sm font-bold leading-snug text-[#071936]">
                            {industry.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
