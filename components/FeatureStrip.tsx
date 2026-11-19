
"use client";

import { useEffect, useRef, useState } from "react";

const features = [
    {
        icon: "🚀",
        title: "SaaS Products",
        subtitle: "Scalable & Market Ready",
    },
    {
        icon: "👥",
        title: "B2B Solutions",
        subtitle: "For Businesses & Enterprises",
    },
    {
        icon: "🌐",
        title: "B2C Platforms",
        subtitle: "For Everyday Users",
    },
    {
        icon: "📈",
        title: "End-to-End Services",
        subtitle: "From Idea to Execution",
    },
];

export default function FeatureStrip() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`feature-strip ${visible ? "feature-strip-visible" : ""}`}
        >
            {features.map((feature, index) => (
                <div
                    className="feature-item"
                    key={feature.title}
                    style={{ transitionDelay: `${index * 140}ms` }}
                >
                    <span className="feature-icon">{feature.icon}</span>
                    <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.subtitle}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
