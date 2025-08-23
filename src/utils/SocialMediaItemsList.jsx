import InstagramIcon from "../Footer/InstagramIcon";
import SocialMediaItem from "../Footer/SocialMediaItem";
import TwisisIcon from "../Footer/TwisisIcon";
import YoutubeIcon from "../Footer/YoutubeIcon";

const itemStyle = "w-full h-full fill-current transition-all duration-300";

const socialMediaLinks = [
  "https://campsite.to/twisis.studio",
  "https://www.youtube.com/@KikiKoubkova",
  "https://www.instagram.com/kiki.koubkova_photographer/",
];

const socialMediaItemsList = [
  <TwisisIcon
    className={itemStyle + " hover:text-[#75005d] active:text-[#75005d]"}
  />,
  <YoutubeIcon
    className={itemStyle + " hover:text-[#ff0033] active:text-[#ff0033]"}
  />,
  <InstagramIcon
    className={itemStyle + " hover:text-[#e424a7] active:text-[#e424a7]"}
  />,
];

export default function SocialMediaItemsList() {
  return (
    <div className={"flex gap-3 items-stretch"}>
      {socialMediaLinks.map((link, index) => (
        <SocialMediaItem
          key={index}
          link={link}
          className={`block h-6 md:h-12 ${index === 0 ? ` w-40 md:w-52 transform -translate-y-0.5` : ` w-7 md:w-10`} text-overlay-text`}
          media={socialMediaItemsList[index]}
        />
      ))}
    </div>
  );
}
