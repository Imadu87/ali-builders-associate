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

          <div data-aos="fade-up">
            <img
              src={COMPANY.logo}
              alt={COMPANY.name}
              loading="lazy"
              decoding="async"
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
                  aria-label={item.name}
                  className="text-xl transition-default hover:-translate-y-1 hover:text-secondary"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <FaLocationDot className="mt-1 shrink-0 text-secondary" />

                <p className="text-white/70">
                  {COMPANY.contact.address}
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhone className="mt-1 shrink-0 text-secondary" />

                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="transition-default text-white/70 hover:text-secondary"
                >
                  {COMPANY.contact.phone}
                </a>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 shrink-0 text-secondary" />

                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="break-all transition-default text-white/70 hover:text-secondary"
                >
                  {COMPANY.contact.email}
                </a>
              </div>

            </div>
          </div>

          {/* Services */}

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Our Services
            </h3>

            <ul className="space-y-3">
              {FOOTER_DATA.services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-2 text-white/70 transition-default hover:text-secondary"
                  >
                    <HiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />

                    <span>{service}</span>
                  </Link>
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