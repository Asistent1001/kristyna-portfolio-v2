import ArrowIcon from "../utils/ArrowIcon.jsx";

const difStyles = {
  pages: "flex justify-center items-center w-8 h-8 p-1 rounded-full",
  arrow: "rotate-90 w-6 h-6 text-stone-400",
};

export default function Pagination({
  maxPhotosPerPage,
  photosTotal,
  setPage,
  currentPage,
  setCurrentPage,
}) {
  const arrayWithPages = [];

  const countPagesForPagination = () => {
    let start = 0;
    let end = 0;
    for (let i = 0; i < Math.ceil(photosTotal / maxPhotosPerPage); i++) {
      start = i * maxPhotosPerPage;
      end = Math.min(maxPhotosPerPage + maxPhotosPerPage * i, photosTotal);
      arrayWithPages.push({ currentPage: i, pagesStartToEnd: [start, end] });
    }
  };

  countPagesForPagination();

  const setRightPage = (pageNum) => {
    setPage(
      arrayWithPages.find((item) => item.currentPage === pageNum)
        .pagesStartToEnd,
    );
    setCurrentPage(pageNum);
  };

  const isPageToShow = (pageNum, totalPages, currentPage) => {
    let start = currentPage - 1;
    let end = currentPage + 1;

    if (currentPage === 0) {
      start = 0;
      end = 2;
    }

    if (currentPage === totalPages - 1) {
      start = totalPages - 3;
      end = totalPages - 1;
    }

    if (start < 0) start = 0;
    if (end > totalPages - 1) end = totalPages - 1;

    return pageNum >= start && pageNum <= end;
  };

  return (
    <div className="flex flex-row rounded-full gap-3 select-none p-2 my-4">
      <div
        onClick={() => setRightPage(currentPage <= 0 ? 0 : currentPage - 1)}
        className={`${difStyles.pages} ${currentPage === 0 ? "cursor-auto" : "cursor-pointer"}`}
      >
        <ArrowIcon className={`${difStyles.arrow} `} />
      </div>
      {arrayWithPages.map((page, index) => {
        if (isPageToShow(page.currentPage, arrayWithPages.length, currentPage))
          return (
            <div
              onClick={() => setRightPage(page.currentPage)}
              className={`${difStyles.pages} text-overlay-bg hover:scale-110 transition-transform duration-100 ease-linear ${currentPage === page.currentPage ? "bg-link-hover-color" : "bg-overlay-text"}`}
              key={page + index}
            >
              {page.currentPage + 1}
            </div>
          );
      })}
      <div
        onClick={() =>
          setRightPage(
            currentPage >= arrayWithPages.length - 1
              ? arrayWithPages.length - 1
              : currentPage + 1,
          )
        }
        className={`${difStyles.pages} ${currentPage === arrayWithPages.length - 1 ? "cursor-auto" : "cursor-pointer"}`}
      >
        <ArrowIcon className={`-${difStyles.arrow}`} />
      </div>
    </div>
  );
}
