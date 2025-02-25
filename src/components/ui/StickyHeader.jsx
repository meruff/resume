import BoxIcon from "./BoxIcon";

export default function Info({ data, isScrolled }) {
  if (!data) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-gradient-to-br from-gray-100 via-custom-light/10 to-gray-200 dark:from-gray-800 dark:via-custom-dark/10 dark:to-gray-900 shadow-lg transition-transform ease-in-out duration-300 ${
          isScrolled ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-14 py-2 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {data.firstName} {data.lastName}
          </h1>
          <h2 className="text-md font-medium text-gray-700 dark:text-gray-300">
            {data.title}
          </h2>
          <h3 className="hidden sm:flex items-center gap-1 text-md font-normal text-gray-500 dark:text-gray-400">
            <BoxIcon
              name="buildings"
              size="sm"
              colorLight="#0B979E"
              colorDark="#38B2AC"
            />
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
