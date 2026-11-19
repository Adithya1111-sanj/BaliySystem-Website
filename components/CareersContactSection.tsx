
export default function CareersContactSection() {
    return (
        <section
            id="contact"
            className="mx-auto mb-10 grid w-[92%] max-w-[1500px] grid-cols-1 overflow-hidden rounded-3xl bg-[#071d49] text-white md:grid-cols-2"
        >
            {/* Careers */}
            <div
                id="careers"
                className="flex flex-wrap items-center gap-5 p-7 md:p-9"
            >
                <div className="text-5xl text-cyan-400">✦</div>

                <div className="min-w-[180px] flex-1">
                    <h2 className="text-xl font-bold">
                        Careers at Baliy Systems
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-blue-100">
                        Build your future with a team that creates real impact.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href="mailto:career@baliysys.com"
                        className="rounded-xl border border-cyan-400 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-[#071d49]"
                    >
                        career@baliysys.com
                    </a>

                    <a
                        href="#careers"
                        className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                    >
                        View Openings →
                    </a>

                    <a
                        href="#internships"
                        className="rounded-xl border border-white/50 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                    >
                        Internship Program
                    </a>
                </div>
            </div>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-5 border-t border-white/20 p-7 md:border-l md:border-t-0 md:p-9">
                <div className="text-5xl text-cyan-300">✉</div>

                <div className="min-w-[180px] flex-1">
                    <h2 className="text-xl font-bold">
                        Get in Touch
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-blue-100">
                        Let's discuss how we can work together.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href="mailto:support@baliysys.com"
                        className="rounded-xl border border-cyan-400 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-[#071d49]"
                    >
                        support@baliysys.com
                    </a>

                    <a
                        href="mailto:support@baliysys.com?subject=Business%20Inquiry"
                        className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#071d49] transition hover:bg-blue-100"
                    >
                        Submit Inquiry →
                    </a>
                </div>
            </div>
        </section>
    );
}
