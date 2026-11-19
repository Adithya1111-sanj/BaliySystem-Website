
export default function Hero() {
    return (
        <section className="hero-section relative flex min-h-[500px] items-center overflow-hidden md:h-[520px] md:min-h-0">
            {/* Brand-colored image blending overlays */}
            <div className="hero-overlay pointer-events-none absolute inset-0" />

            {/* Main Content */}
            <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-12 md:px-12 lg:px-16">
                <div className="hero-content max-w-[510px]">                   
                     {/* Company Badge */}
                    <div className="mb-3 inline-flex rounded-full border border-blue-600 bg-white/80 px-4 py-1 backdrop-blur-sm">
                        <span className="text-[12px] font-bold tracking-wide text-[#073b91]">
                            BALIY SYSTEMS PRIVATE LIMITED
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-[38px] font-extrabold leading-[1.08] tracking-tight text-[#071936] md:text-[48px]">
                        Innovation.
                        <br />
                        Technology. <span className="text-[#0757e8]">Trust.</span>
                    </h1>

                    {/* Subheading */}
                    <h2 className="mt-3 text-[16px] font-bold leading-snug text-[#101828] md:text-[17px]">
                        Transforming Ideas Into Scalable Digital Businesses.
                    </h2>

                    {/* Description */}
                    <p className="mt-2 max-w-[460px] text-[13px] leading-[1.5] text-[#26364d] md:text-[14px]">
                        A product and services company that builds modern software,
                        SaaS platforms and digital solutions for businesses and consumers
                        across industries.
                    </p>

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                        <a
                            href="#services"
                            className="inline-flex h-11 items-center gap-3 rounded-xl bg-[#0757e8] px-5 text-[13px] font-semibold text-white shadow-md transition hover:bg-blue-700"
                        >
                            Explore Our Services
                            <span aria-hidden="true" className="text-lg">→</span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex h-11 items-center gap-2 rounded-xl border-2 border-[#071936] bg-white/80 px-5 text-[13px] font-semibold text-[#071936] transition hover:bg-white"
                        >
                            <span aria-hidden="true" className="text-base">◯</span>
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
