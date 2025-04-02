import BoxIcon from "./BoxIcon";

export default function StickyHeader({ data, isScrolled }) {
  if (!data) return null;

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 bg-gray-100 shadow-lg transition-transform duration-300 dark:bg-gray-800 ${
          isScrolled ? "translate-y-0 transform" : "-translate-y-full transform"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-14">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {data.firstName} {data.lastName}
          </h1>
          <h2 className="text-md font-medium text-gray-700 dark:text-gray-300">
            {data.title}
          </h2>
          <h3 className="text-md hidden items-center gap-1 font-normal text-gray-500 sm:flex dark:text-gray-400">
            <BoxIcon name="buildings" size="sm" />
            {data.companyHref ? (
              <a
                href={data.companyHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.company}
              </a>
            ) : (
              data.company
            )}
          </h3>
        </div>
      </div>
    </>
  );
}
