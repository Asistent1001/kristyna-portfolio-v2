import horseBookImg from "/src/assets/NewsAndEvents/68-2_uroven-09.webp";

const eventItems = [
  {
    eventName: "horseBook",
    date: "2024-09-18",
    imgUrl: horseBookImg,
    externalLink: "https://obchod.molekulycteni.cz/u9-o-konich/",
  },
  {
    eventName: "schoolWorkshop",
    date: "2025-02-05",
    imgUrl: null,
    externalLink: null,
  },
  {
    eventName: "exhibitionOpening",
    date: "2025-03-10",
    imgUrl: null,
    externalLink: null,
  },
];

export const filteredItems = [...eventItems].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
