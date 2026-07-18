import SectionHeader from "../../common/SectionHeader";
import ServiceCard from "./ServiceCard";
import PrimaryButton from "../../common/PrimaryButton";

import { SERVICES_DATA } from "../../../constant/services/servicesData";

const ServicesSection = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <SectionHeader
          subtitle="Our Services"
          title="Professional Real Estate & Construction Solutions"
          description="We provide comprehensive real estate and construction services, delivering quality, innovation, and trusted solutions tailored to residential and commercial projects."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES_DATA.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <PrimaryButton>View All Services</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
