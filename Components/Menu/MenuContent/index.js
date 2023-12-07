"use client";
import { FaFacebook, FaInstagram, FaPinterest, FaXTwitter } from "react-icons/fa6";
import "../../../style/MenuContent/style.scss";
import { useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";

const internalLinks = [
    {
        url: "#1",
        component: <span>Home</span>
    },
    {
        url: "#2",
        component: <span>About Us</span>
    },
    {
        url: "#1",
        component: <span>Works</span>
    },
    {
        url: "#1",
        component: <span>Contact us</span>
    },
];

const externalLinks = [
    {
        url: "www.facebook.com",
        component: <FaFacebook />
    },
    {
        url: "www.instagram.com",
        component: <FaInstagram />
    },
    {
        url: "www.x.com",
        component: <FaXTwitter />
    },
    {
        url: "www.pinterest.com",
        component: <FaPinterest />
    },
]
function MenuContent() {
    //Oradan open yaptık cn ile open true'sa yap diyoruz css de translateX(0) yaparak kapattırıyoruz
    const { open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      
      <div className={cn("menu-inside", {open})}>
        <div className="menu-nav-container">

            <ul className="internal-nav-links">
                {internalLinks.map((link)=>(
                    <li key={link.url}>
                        <a href={link.url}>{link.component}</a>
                    </li>
                ))}
            </ul>

            <ul className="external-nav-links">
                {externalLinks.map((link)=>(
                    <li key={link.url}>
                        <a href={link.url}>{link.component}</a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuContent
