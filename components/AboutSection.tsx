import Image from "next/image";
const values = [
    {
        icon: "◎",
        title: "Our Vision",
        description:
            "To be a global technology company creating impactful digital businesses.",
    },
    {
        icon: "🎯",
        title: "Our Mission",
        description:
            "To build scalable products and solutions that deliver real value to businesses and users.",
    },
    {
        icon: "◇",
        title: "Our Values",
        description:
            "Innovation | Integrity | Quality | People First",
    },
];

export default function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="about-content">
                <span className="section-label">
                    ABOUT BALIY SYSTEMS
                </span>

                <h2>
                    Building Technology.
                    <br />
                    Creating Possibilities.
                </h2>

                <p>
                    Baliy Systems Private Limited is a technology-driven
                    company focused on delivering innovative software
                    products, SaaS platforms and digital solutions for
                    businesses (B2B) and consumers (B2C).
                </p>

                <a href="/about" className="about-button">
                    Know More About Us →
                </a>
            </div>

            <div className="about-image">
                <Image
                    src="/Images/Aboutbuilding.png"
                    alt="Baliy Systems office building"
                    width={900}
                    height={500}
                    className="about-building-image"
                />
            </div>

            <div className="about-values">
                {values.map((item) => (
                    <div className="value-card" key={item.title}>
                        <span className="value-icon">{item.icon}</span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
