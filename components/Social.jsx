import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
    icon: <FaTwitter />,
    path: "https://x.com/_vineet0222",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
