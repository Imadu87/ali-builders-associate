import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { COMPANY } from "./company";

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: COMPANY.social.facebook,
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: COMPANY.social.linkedin,
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: COMPANY.social.instagram,
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: COMPANY.social.youtube,
  },
];
