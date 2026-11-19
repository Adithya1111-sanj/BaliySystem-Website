
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "SaaS", href: "/#saas" },
    { label: "Industries", href: "/#industries" },
    { label: "Careers", href: "/#careers" },
    { label: "Contact", href: "/#contact" },
];

const legalLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Cookie Policy",
];

export default function Footer() {
    return (
        <footer className="mt-10 border-t border-[#dce7f5] bg-white">
            <div className="mx-auto grid w-[92%] max-w-[1500px] grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1fr]">

                {/* Company Branding */}
                <div>
                    <img
                        src="/Images/Baliy-logo.png"
                        alt="Baliy Systems Private Limited"
                        className="mb-4 h-16 w-auto max-w-[240px] object-contain object-left"
                    />

                    <p className="font-bold text-[#0757e8]">
                        Innovation. Technology. Trust.
                    </p>
                    <p className="mt-2 max-w-[280px] text-sm leading-6 text-[#526078]">
                        Building innovative software, SaaS platforms
                        and digital solutions for businesses and consumers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-4 font-bold text-[#071936]">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm text-[#526078] transition hover:text-[#0757e8]"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="mb-4 font-bold text-[#071936]">
                        Contact Us
                    </h3>

                    <div className="space-y-4 text-sm">
                        <div>
                            <p className="mb-1 font-semibold text-[#071936]">
                                Careers & Applications
                            </p>
                            <a
                                href="mailto:career@baliysys.com"
                                className="break-all text-[#526078] transition hover:text-[#0757e8]"
                            >
                                career@baliysys.com
                            </a>
                        </div>

                        <div>
                            <p className="mb-1 font-semibold text-[#071936]">
                                General Support & Inquiries
                            </p>
                            <a
                                href="mailto:support@baliysys.com"
                                className="break-all text-[#526078] transition hover:text-[#0757e8]"
                            >
                                support@baliysys.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="mb-4 font-bold text-[#071936]">
                        Connect With Us
                    </h3>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-xl font-bold text-[#0757e8] hover:text-blue-800"
                        >
                            in
                        </a>

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-[#526078] hover:text-[#0757e8]"
                        >
                            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1" fill="currentColor" />
                            </svg>
                        </a>

                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="text-[#526078] hover:text-red-600"
                        >
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.8 15.4V8.6l6 3.4-6 3.4Z" />
                            </svg>
                        </a>
                    </div>

                    {/* Legal */}
                    <h3 className="mb-3 mt-7 font-bold text-[#071936]">
                        Legal
                    </h3>
                    <ul className="space-y-2">
                        {legalLinks.map((link) => (
                            <li key={link}>
                                <span className="text-sm text-[#526078]">
                                    {link}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[#dce7f5]">
                <div className="mx-auto flex w-[92%] max-w-[1500px] flex-wrap items-center justify-between gap-3 py-5 text-xs text-[#526078]">
                    <p>
                        © 2026 Baliy Systems Private Limited. All Rights Reserved.
                    </p>
                    <p className="font-semibold">
                        Designed & Developed by Baliy Systems Private Limited.
                    </p>
                </div>
            </div>
        </footer>
    );
}
