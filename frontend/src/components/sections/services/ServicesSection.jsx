import SectionHeader from "../../common/SectionHeader";
import ServiceCard from "./ServiceCard";
import PrimaryButton from "../../common/PrimaryButton";

import { SERVICES_DATA } from "../../../constant/services/servicesData";

const ServicesSection = ({ limit, showButton = false, }) => {
  const services = limit
    ? SERVICES_DATA.slice(0, limit)
    : SERVICES_DATA;
  return (
    <section className="section bg-light">
      <div className="container">
        <SectionHeader
          subtitle="Our Services"
          title="Professional Real Estate & Construction Solutions"
          description="We provide comprehensive real estate and construction services, delivering quality, innovation, and trusted solutions tailored to residential and commercial projects."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {showButton && <div className="mt-14 flex justify-center">
          <PrimaryButton to="/services">View All Services</PrimaryButton>
        </div>}
      </div>
    </section>
  );
};

export default ServicesSection;
