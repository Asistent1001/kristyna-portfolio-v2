import decagonGallery from "../assets/Contests/contest_decagon_gallery.jpg";
import urbanTreasures from "../assets/Contests/contest_urban_treasures.jpg";
import pictureAward from "../assets/Contests/contest_picture_award.jpg";
import dit4llErasmus from "../assets/Contests/contest_dit4ll_erasmus+.jpg";

const awardsKeys = ["decagon", "urban", "openHouse", "picture", "dit4ll"];

const contests = [
  "Decagon Gallery",
  "Urban Treasures",
  "OpenHouse Praha",
  "Picture Award",
  "Dit4ll Erasmus+",
];

const photos = [
  decagonGallery,
  urbanTreasures,
  null,
  pictureAward,
  dit4llErasmus,
];

const years = [2025, 2024, 2024, 2023, 2023];

export const nominations = awardsKeys.map((key, index) => ({
  contest: contests[index],
  photo: photos[index],
  year: years[index],
  category: `awards.${key}.category`,
  position: `awards.${key}.position`,
}));
