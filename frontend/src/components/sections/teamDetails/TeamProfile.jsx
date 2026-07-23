import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
    FaPhone,
    FaEnvelope,
    FaBriefcase,
} from "react-icons/fa6";

import SectionHeader from "../../common/SectionHeader";

const TeamProfile = ({ member }) => {
    return (
        <section className="first-section bg-white">
            <div className="container">

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Image */}

                    <div data-aos="fade-right">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full rounded-xl shadow-primary object-cover"
                        />
                    </div>

                    {/* Content */}

                    <div data-aos="fade-left">

                        <SectionHeader
                            align="left"
                            subtitle="Profile"
                            title={member.name}
                            description={member.description}
                        />

                        <p className="mt-4 text-xl font-semibold text-secondary">
                            {member.designation}
                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-4 rounded-xl border border-border p-5">
                                <FaBriefcase className="text-secondary text-xl" />

                                <div>
                                    <h4 className="font-semibold text-heading">
                                        Experience
                                    </h4>

                                    <p className="text-text">
                                        {member.experience}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-border p-5">
                                <FaPhone className="text-secondary text-xl" />

                                <div>
                                    <h4 className="font-semibold text-heading">
                                        Phone
                                    </h4>

                                    <a
                                        href={`tel:${member.phone}`}
                                        className="text-text hover:text-secondary transition-default"
                                    >
                                        {member.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-border p-5">
                                <FaEnvelope className="text-secondary text-xl" />

                                <div>
                                    <h4 className="font-semibold text-heading">
                                        Email
                                    </h4>

                                    <a
                                        href={`mailto:${member.email}`}
                                        className="break-words text-text hover:text-secondary transition-default"
                                    >
                                        {member.email}
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Social */}

                        <div className="mt-10 flex gap-4">

                            {member.facebook !== "#" && (
                                <a
                                    href={member.facebook}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white transition-default hover:scale-110"
                                >
                                    <FaFacebookF />
                                </a>
                            )}

                            {member.linkedin !== "#" && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white transition-default hover:scale-110"
                                >
                                    <FaLinkedinIn />
                                </a>
                            )}

                            {member.twitter !== "#" && (
                                <a
                                    href={member.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white transition-default hover:scale-110"
                                >
                                    <FaXTwitter />
                                </a>
                            )}

                            {member.instagram !== "#" && (
                                <a
                                    href={member.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white transition-default hover:scale-110"
                                >
                                    <FaInstagram />
                                </a>
                            )}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default TeamProfile;