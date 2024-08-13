import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/VineetPrajapati",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/vineet-prajapati/",
  },
  {
    icon: <FaXTwitter />,
    path: "https://x.com/_vineet0222",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            target="_blank"
            key={index}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
