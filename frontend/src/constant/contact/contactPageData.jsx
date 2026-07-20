import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

import { COMPANY } from "../common/company"

export const CONTACT_DATA = {
  hero: {
    title: "Contact Us",
    breadcrumb: "Contact",
  },

  section: {
    subtitle: "Get In Touch",

    title: "Let's Start a Conversation",

    description:
      "Whether you're looking to invest, buy property, or discuss your next construction project, our team is here to assist you. Reach out today and we'll be happy to help.",
  },

  info: [
    {
      id: 1,
      icon: <FaLocationDot />,
      title: "Office Address",
      value: COMPANY.contact.address,
    },
    {
      id: 2,
      icon: <FaPhone />,
      title: "Phone Number",
      value: COMPANY.contact.phone,
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      title: "Email Address",
      value: COMPANY.contact.email,
    },
    {
      id: 4,
      icon: <FaClock />,
      title: "Working Hours",
      value: "Monday - Saturday\n09:00 AM - 06:00 PM\nSunday: Closed",
    },
  ],

  form: {
    title: "Send Us a Message",
  },

  mapTitle: "Our Office Location",
};