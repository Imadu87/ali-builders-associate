import { Link } from "react-router";

import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

import { HiChevronRight } from "react-icons/hi2";

import FooterBottom from "./FooterBottom";

import { COMPANY } from "../../../constant/common/company";
import { SOCIAL_LINKS } from "../../../constant/common/socialLinks";
import { FOOTER_DATA } from "../../../constant/footer/footerData";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container px-5 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* About */}

          <div>
            <img
              src={COMPANY.logo}
              alt={COMPANY.name}
              className="mb-6 h-20 object-contain"
            />

            <p className="mb-6 leading-7 text-white/70">
              {COMPANY.description}
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition-default hover:text-secondary"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-2xl font-semibold">Get In Touch</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <FaLocationDot className="mt-1 text-secondary" />

                <p className="text-white/70">{COMPANY.contact.address}</p>
              </div>

              <div className="flex gap-4">
                <FaPhone className="mt-1 text-secondary" />

                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="text-white/70 transition-default hover:text-secondary"
                >
                  {COMPANY.contact.phone}
                </a>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-secondary" />

                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-white/70 transition-default hover:text-secondary"
                >
                  {COMPANY.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="mb-6 text-2xl font-semibold">Our Services</h3>

            <ul className="space-y-3">
              {FOOTER_DATA.services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-white/70 transition-default hover:text-secondary"
                >
                  <HiChevronRight />

                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
