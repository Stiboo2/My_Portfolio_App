import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const data = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/thabo-radebe-35860a29",
    icon: <FaLinkedin />,
  },
  { id: 2, link: "https://twitter.com", icon: <AiOutlineTwitter /> },
  {
    id: 3,
    link: "https://www.facebook.com/RadebeThaboHenrdy?mibextid=ZbWKwL",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    link: " https://github.com/Stiboo2?tab=repositories",
    icon: <AiFillGithub />,
  },
];

export default data;
