// heroSection
import hero1 from "../../assets/images/hero/hero1.avif";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.avif";

// ceoMessageSection
import ceoImage from "../../assets/images/ceo/ceo.jpeg";

// statsSection
import { FaAward, FaBuilding, FaUsers, FaHammer } from "react-icons/fa6";

export const HOME_DATA = {
  hero: [
    {
      id: 1,
      image: hero1,
      title: "Luxury Living Starts Here",
      subtitle: "Your Trusted Real Estate Partner",
      description:
        "Find premium residential and commercial properties with Ali Builders Associate.",
    },
    {
      id: 2,
      image: hero2,
      title: "Build Your Dream Home",
      subtitle: "Professional Construction Services",
      description:
        "From planning to construction, we deliver quality you can trust.",
    },
    {
      id: 3,
      image: hero3,
      title: "Invest In Your Future",
      subtitle: "Premium Investment Opportunities",
      description: "Explore our latest projects and secure your future today.",
    },
  ],

  ceo: {
    name: "Imad Uddin",
    designation: "CEO, Ali Builders Associate",
    image: ceoImage,
    message:
      "Welcome to Ali Builders Associate. Our mission is to deliver high-quality real estate and construction solutions built on trust, integrity, and excellence. Every project we undertake reflects our commitment to superior craftsmanship, timely delivery, and complete client satisfaction. Whether you are looking to invest in residential or commercial properties or seeking reliable construction services, our experienced team is dedicated to turning your vision into reality. We believe that strong relationships, transparency, and innovation are the foundation of lasting success. Thank you for placing your trust in Ali Builders Associate. We look forward to building a brighter future together",
  },

  about: {
    subtitle: "About Ali Builders",

    title: "We Build, What You Dream",

    description:
      "Ali Builders Associate is committed to delivering exceptional real estate and construction solutions that combine quality, innovation, and trust. From residential communities to commercial developments, we strive to create spaces that enhance lifestyles and provide lasting value. Our experienced team works with dedication, ensuring every project is completed with the highest standards of craftsmanship and professionalism.",

    goalTitle: "Our Goal",

    goalDescription:
      "Our goal is to provide reliable real estate investment opportunities and high-quality construction services while building long-term relationships with our clients through transparency, integrity, and customer satisfaction.",

    visionTitle: "Company's Vision",

    visionDescription:
      "Our vision is to become one of the most trusted and respected real estate and construction companies by delivering innovative developments, sustainable solutions, and exceptional value for every client we serve.",

    image: hero1,
  },

  stats: [
    {
      id: 1,
      icon: FaAward,
      number: "15",
      suffix: "+",
      title: "Years of Experience",
    },
    {
      id: 2,
      icon: FaBuilding,
      number: "08",
      suffix: "+",
      title: "Projects Completed",
    },
    {
      id: 3,
      icon: FaUsers,
      number: "1000",
      suffix: "+",
      title: "Happy Clients",
    },
    {
      id: 4,
      icon: FaHammer,
      number: "04",
      suffix: "",
      title: "Ongoing Projects",
    },
  ],
};
