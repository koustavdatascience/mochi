import DittoMotion from "./ditto/DittoMotion";
import HeroSection from "./sections/hero-section";
import Navbar from "./sections/navbar";
import MediaSection from "./sections/media-section";
import Section4 from "./sections/section4";
import NavLink, { type NavLinkData } from "./components/nav-link";
import { NavLink_cids } from "./_cids";

const NavLink_data: NavLinkData[] = [
    { href: "/dev", label: "dev" },
    { href: "/film", label: "film" },
    { href: "/uiux", label: "ui/ux" },
    { href: "/art", label: "art" },
    { href: "/blogs", label: "blogs" }
];

export default function Page() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <MediaSection />
      <Section4 />
      <nav className="w-[26.3125rem] h-[4.175rem] flex fixed top-[43.325rem] left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] z-50 min-w-0 py-3 px-6 rounded-[64px] items-center gap-2 bg-primary transform-[matrix(1,0,0,1,-210.5,0)] [animation-name:capsuleSlideUp] [animation-duration:0.6s] [animation-timing-function:ease-out] [animation-delay:0.25s] [animation-fill-mode:both] max-md:w-[21.4375rem] max-md:h-[3.2rem] max-md:top-[46.05rem] max-lg:py-2 max-lg:px-3 max-md:justify-evenly max-lg:gap-1 max-md:transform-[matrix(1,0,0,1,-171.5,0)] md:max-lg:w-95 md:max-lg:h-[3.275rem] md:max-lg:top-[59.225rem] md:max-lg:max-w-95 md:max-lg:justify-between md:max-lg:transform-[matrix(1,0,0,1,-190,0)] 2xl:top-[60.825rem]" data-cid="n220" data-component="nav">
        {NavLink_data.map((d, i) => <NavLink key={i} d={d} cids={NavLink_cids[i]} />)}
      </nav>
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"cid":"n24","opacity":"0","transform":"none","transition":"opacity 0.4s"}],"marquees":[]}} />
    </>
  );
}
