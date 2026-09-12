import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope  } from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/sadath1913"},
    {icon: <FaLinkedinIn/>, path: "https://linkedin.com/in/sadath-khan-535b56293"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/sadathkhan_1913?igsi=MW90NDM5MnlyZ25jeQ==", label: "Instagram"},
    {icon: <FaEnvelope/>, path: "mailto:sadathkhan1913@gmail.com", label: "Email"}
]

const Social = ({containerStyles, iconStyles}) => {
  return ( 
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
                <Link key={index} href={item.path} aria-label={item.label} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
}

export default Social
