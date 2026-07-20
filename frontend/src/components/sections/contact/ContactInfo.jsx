import SectionHeader from "../../common/SectionHeader";

import { CONTACT_DATA } from "../../../constant/contact/contactPageData"

const ContactInfo = () => {
  return (
    <section className="first-section bg-white">

      <div className="container">

        <SectionHeader
          subtitle={CONTACT_DATA.section.subtitle}
          title={CONTACT_DATA.section.title}
          description={CONTACT_DATA.section.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {CONTACT_DATA.info.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-border bg-white p-8 text-center shadow-primary transition-default hover:-translate-y-1"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-3xl text-secondary">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-heading">
                {item.title}
              </h3>

              <p className="whitespace-pre-line break-all text-text">
                {item.value}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;