// @ts-nocheck

const portfolioImagesGroupImport = import.meta.glob(
  "../assets/portfolio/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const categoryOrder = {
  photo: 1,
  drawing: 2,
  creation: 3,
  design: 4,
};

export const categoryListAndSubs = {};

const resultObject = {};

Object.entries(portfolioImagesGroupImport).forEach(([filePath, path]) => {
  const parts = filePath.split("/");

  const category = parts[3];
  const subCategory = parts[4];
  const fileName = parts[5];

  if (!resultObject[category]) {
    resultObject[category] = {};
    categoryListAndSubs[category] = [];
  }

  if (!resultObject[category][subCategory]) {
    resultObject[category][subCategory] = [];
    categoryListAndSubs[category].push(subCategory);
  }

  resultObject[category][subCategory].push({
    path,
    name: fileName?.split("+")[0]?.replaceAll("_", " ") || "",
    orientation: fileName.split("+").pop().split(".")[0],
  });
});

export const categoryListToExport = Object.keys(categoryListAndSubs).sort(
  (a, b) => {
    return categoryOrder[a] - categoryOrder[b];
  }
);

const buttonsImages = import.meta.glob(
  "../assets/portfolioButtons/*.{jpg,jpeg,png,webp,svg}",
  { eager: true, import: "default" }
);

const buttonImagesKeys = {};

Object.keys(buttonsImages).forEach((item) => {
  const currentName = item.split("/")[3].split(".")[0];
  buttonImagesKeys[currentName] = buttonsImages[item];
});

const imagesForSale = import.meta.glob(
  "../assets/forSale/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const imagesForSaleData = [];

Object.entries(imagesForSale).forEach((item) => {
  const parts = item[0].split("/").pop().split(".")[0].split("+");
  const imageDataObject = {
    name: parts[0].replaceAll("_", " "),
    path: item[1],
    price: Number(parts[1]),
    color: parts[2],
    orientation: parts[3],
    importance: Number(parts[4]),
  };
  imagesForSaleData.push(imageDataObject);
});

export const imagesForSaleImport = imagesForSaleData;

export const buttonImagesKeysToRender = buttonImagesKeys;

export const imagesToRender = resultObject;
