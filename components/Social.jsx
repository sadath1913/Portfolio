"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/sadath1913",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/in/sadath-khan-535b56293",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/sadathkhan_1913?igsi=MW90NDM5MnlyZ25jeQ==",
    label: "Instagram",
  },
  {
    icon: <FaEnvelope />,
    path: "mailto:sadathkhan717@gmail.com",
    label: "Email",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  const handleEmailClick = (event) => {
    event.preventDefault();

    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      window.location.href = "mailto:sadathkhan717@gmail.com";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=sadathkhan717@gmail.com",
        "_blank"
      );
    }
  };

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const isEmail = item.label === "Email";

        return (
          <Link
            key={index}
            href={item.path}
            aria-label={item.label}
            className={iconStyles}
            onClick={isEmail ? handleEmailClick : undefined}
            {...(!isEmail && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;