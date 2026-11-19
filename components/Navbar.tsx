
"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services", dropdown: true },
    { name: "SaaS", href: "#saas", dropdown: true },
    { name: "Industries", href: "/#industries" },
    { name: "Careers", href: "/#careers" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    return (
        <header className="w-full bg-white">
            <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3">

                {/* Company Logo */}
                <Link href="/" className="flex shrink-0 items-center gap-3">
                    <Image
                        src="/Images/Baliy-logo.png"
                        alt="Baliy Systems Logo"
                        width={55}
                        height={55}
                        priority
                        className="object-contain"
                    />

                    <div className="border-r border-gray-300 pr-6">
                        <h1 className="text-[21px] font-extrabold leading-tight text-[#071936]">
                            BALIY SYSTEMS
                        </h1>
                        <p className="text-[17px] font-extrabold leading-tight text-[#071936]">
                            PRIVATE LIMITED
                        </p>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-1 border-b-[3px] border-transparent pb-2 text-[14px] font-semibold text-[#111827] transition-colors duration-200 hover:border-blue-300 hover:text-blue-600"
                        >
                            {link.name}
                            {link.dropdown && (
                                <span className="text-xs">⌄</span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href="/#contact"
                        className="flex items-center gap-2 rounded-xl bg-[#0757E8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                    >
                        Get in Touch <span>→</span>
                    </Link>
                </div>

            </nav>
        </header>
    );
}
