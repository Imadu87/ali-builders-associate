import {
  FaBuilding,
  FaUserTie,
  FaAward,
  FaClock,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

import whyChooseImage from "../../assets/images/services/why-choose-us.jfif"

export const WHY_CHOOSE_US = {
  subtitle: "Why Choose Us",

  title: "Building Trust Through Quality & Excellence",

  description:
    "Ali Builders Associate is committed to delivering reliable real estate solutions with transparency, innovation, and exceptional customer service. Our focus is to transform your vision into reality through quality construction and professional expertise.",

  image: whyChooseImage,

  features: [
    {
      id: 1,
      icon: <FaBuilding />,
      title: "Quality Construction",
      description:
        "We deliver durable and modern construction with premium quality standards.",
    },
    {
      id: 2,
      icon: <FaUserTie />,
      title: "Experienced Team",
      description:
        "Our professionals bring years of industry expertise to every project.",
    },
    {
      id: 3,
      icon: <FaAward />,
      title: "Trusted Reputation",
      description:
        "A proven record of successful residential and commercial developments.",
    },
    {
      id: 4,
      icon: <FaClock />,
      title: "Timely Delivery",
      description:
        "Projects are completed within agreed timelines without compromising quality.",
    },
    {
      id: 5,
      icon: <FaHandshake />,
      title: "Customer Satisfaction",
      description:
        "Building long-term relationships through trust, honesty, and commitment.",
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Reliable Investment",
      description:
        "Providing secure and profitable real estate opportunities for our clients.",
    },
  ],
};