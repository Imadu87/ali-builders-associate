import PageHero from "../../components/common/PageHero";

import ContactInfo from "../../components/sections/contact/ContactInfo";
import ContactForm from "../../components/sections/contact/ContactForm";

import { CONTACT_DATA } from  "../../constant/contact/contactPageData"

import heroImage from "../../assets/images/hero/hero3.avif";

const Contact = () => {
  return (
    <>
      <PageHero
        title={CONTACT_DATA.hero.title}
        breadcrumb={CONTACT_DATA.hero.breadcrumb}
        background={heroImage}
      />

      <ContactInfo />

      <ContactForm />s
    </>
  );
};

export default Contact;