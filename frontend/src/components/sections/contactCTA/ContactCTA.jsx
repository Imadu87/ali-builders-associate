import { Link } from "react-router";

import { CONTACT_DATA } from "../../../constant/contact/contactData"

import PrimaryButton from "../../common/PrimaryButton";

const ContactCTA = () => {
    return (
        <section
            className="relative overflow-hidden py-28"
            style={{
                backgroundImage: `url(${CONTACT_DATA.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay */}

            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}

            <div className="container relative z-10">

                <div className="mx-auto max-w-4xl text-center text-white">

                    <span className="section-subtitle text-secondary">
                        {CONTACT_DATA.subtitle}
                    </span>

                    <h2 className="mt-4 text-4xl font-bold lg:text-6xl">
                        {CONTACT_DATA.title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
                        {CONTACT_DATA.description}
                    </p>

                    <div className="mt-10">

                        <PrimaryButton to="/contact">
                            Contact Us
                        </PrimaryButton>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactCTA;