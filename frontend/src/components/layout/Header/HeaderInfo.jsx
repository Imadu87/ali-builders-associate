import ContactInfoCard from "../../common/ContactInfoCard";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import { COMPANY } from "../../../constant/company";
import logo from "../../../assets/images/logo.PNG";

const HeaderInfo = () => {
    return (
        <section className="bg-white py-5">
            <div className="container flex flex-col items-center justify-between gap-6 lg:flex-row">

                {/* Logo */}
                <div className="shrink-0">
                    <img
                        src={logo}
                        alt={COMPANY.name}
                        className="h-16 lg:h-20 w-auto"
                    />
                </div>

                {/* Contact Info */}
                <div className="hidden md:flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">

                    <ContactInfoCard
                        icon={<FiPhoneCall />}
                        title="Call Us"
                        value={COMPANY.contact.phone}
                        href={`tel:${COMPANY.contact.phone}`}
                    />

                    <ContactInfoCard
                        icon={<MdOutlineEmail />}
                        title="Email Us"
                        value={COMPANY.contact.email}
                        href={`mailto:${COMPANY.contact.email}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeaderInfo;