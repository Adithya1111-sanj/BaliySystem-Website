
const services = [
    {
        icon: "code",
        title: "Software Development",
        description: "Custom software and enterprise applications.",
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: "globe",
        title: "Web Development",
        description: "Modern, responsive websites and web apps.",
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        icon: "mobile",
        title: "Mobile App Development",
        description: "Android and iOS applications with great user experience.",
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        icon: "cloud",
        title: "Cloud Solutions",
        description: "Cloud infrastructure, migration and management.",
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: "brain",
        title: "AI & Automation",
        description: "Business process automation and intelligent solutions.",
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        icon: "chart",
        title: "Data & Analytics",
        description: "Turn business data into actionable insights.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
];

const platforms = [
    {
        icon: "cloud",
        title: "SaaS (Product Suite)",
        description: "Scalable, subscription-based software for businesses and consumers.",
        color: "text-cyan-400",
    },
    {
        icon: "building",
        title: "B2B Solutions",
        description: "Digital solutions to drive efficiency and productivity.",
        color: "text-amber-400",
    },
    {
        icon: "users",
        title: "B2C Platforms",
        description: "User-focused digital products that solve everyday needs.",
        color: "text-yellow-400",
    },
    {
        icon: "layers",
        title: "Platform & Product Development",
        description: "From idea to market-ready products with long-term scalability.",
        color: "text-cyan-400",
    },
];

function LineIcon({
    name,
    className = "",
}: {
    name: string;
    className?: string;
}) {
    const common = {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            {...common}
            aria-hidden="true"
        >
            {name === "code" && (
                <>
                    <rect x="3" y="4" width="18" height="13" rx="2" />
                    <path d="M8 21h8M12 17v4M8 10l-2 2 2 2M16 10l2 2-2 2M13.5 9l-3 6" />
                </>
            )}

            {name === "globe" && (
                <>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18M5 7h14M5 17h14" />
                </>
            )}

            {name === "mobile" && (
                <>
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <path d="M10 5h4M11 18h2" />
                </>
            )}

            {name === "cloud" && (
                <path d="M7 18h11a4 4 0 0 0 .5-8A6.5 6.5 0 0 0 6 8.5 4.8 4.8 0 0 0 7 18Z" />
            )}

            {name === "brain" && (
                <>
                    <path d="M12 4a4 4 0 0 0-7 2.7A4 4 0 0 0 4 14a4 4 0 0 0 4 6h4V4Z" />
                    <path d="M12 4a4 4 0 0 1 7 2.7A4 4 0 0 1 20 14a4 4 0 0 1-4 6h-4M8 8c2 0 2 3 4 3M16 8c-2 0-2 3-4 3M8 15c2 0 2 2 4 2M16 15c-2 0-2 2-4 2" />
                </>
            )}

            {name === "chart" && (
                <>
                    <path d="M3 3v18h18" />
                    <path d="m7 14 4-4 3 3 6-7" />
                    <path d="M16 6h4v4" />
                </>
            )}

            {name === "building" && (
                <>
                    <rect x="4" y="3" width="16" height="18" rx="1" />
                    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
                </>
            )}

            {name === "users" && (
                <>
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2.5" />
                    <path d="M3 20a6 6 0 0 1 12 0M15 15a5 5 0 0 1 6 5" />
                </>
            )}

            {name === "layers" && (
                <>
                    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
                </>
            )}
        </svg>
    );
}

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="w-full bg-white px-6 py-14 md:px-10 md:py-16"
        >
            <div className="mx-auto max-w-[1500px]">

                {/* Section Heading */}
                <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                    <div>
                        <span className="text-sm font-extrabold tracking-wide text-[#0757e8]">
                            OUR SERVICES
                        </span>

                        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#071936] md:text-4xl">
                            End-to-End Digital & SaaS Services
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-slate-600">
                        A complete range of digital services and platforms to help
                        businesses launch, scale and grow in the digital world.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group flex min-h-[190px] flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white hover:shadow-[0_12px_30px_rgba(7,87,232,0.10)]"
                        >
                            <div
                                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${service.bg} ${service.color}`}
                            >
                                <LineIcon name={service.icon} className="h-7 w-7" />
                            </div>

                            <h3 className="mb-2 text-[17px] font-bold text-[#071936]">
                                {service.title}
                            </h3>

                            <p className="text-[13px] leading-5 text-slate-600">
                                {service.description}
                            </p>

                            <div className="mt-auto flex justify-end pt-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 text-xl text-blue-600 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                                    →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Platform Strip */}
                <div className="mt-7 grid grid-cols-1 gap-6 rounded-2xl bg-[#071d43] p-6 text-white sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
                    {platforms.map((platform, index) => (
                        <div
                            key={platform.title}
                            className={`flex items-start gap-4 ${index !== platforms.length - 1
                                    ? "xl:border-r xl:border-white/25 xl:pr-5"
                                    : ""
                                } ${index !== 0 ? "xl:pl-5" : ""}`}
                        >
                            <div className={`mt-1 shrink-0 ${platform.color}`}>
                                <LineIcon name={platform.icon} className="h-9 w-9" />
                            </div>

                            <div className="min-w-0">
                                <h3 className="mb-2 text-[15px] font-bold leading-5">
                                    {platform.title}
                                </h3>

                                <p className="text-xs leading-5 text-blue-100">
                                    {platform.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
