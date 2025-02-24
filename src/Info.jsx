import matHeadshot from "./assets/mat-headshot.png";

export default function Info({ data }) {
  if (!data) return null;

  return (
    <>
      <div className="bg-gray-100 p-5 text-left dark:bg-gray-800 md:col-span-4 lg:p-10">
        <h1 className="leading-tighter mt-5 text-4xl font-extrabold lg:text-6xl">
          {data.firstName} {data.lastName}
        </h1>
        <h2 className="mt-3 text-xl font-bold text-custom-light dark:text-custom-dark">
          {data.title}
        </h2>
        <h3 className="flex items-center gap-1 mt-1 text-xl text-custom-light dark:text-custom-dark">
          <box-icon
            name="buildings"
            color="#0B979E"
            className="inline-block dark:hidden"
          ></box-icon>
          <box-icon
            name="buildings"
            color="#38B2AC"
            className="hidden dark:inline-block"
          ></box-icon>
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
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 items-center gap-0 sm:gap-10 md:gap-0 -mx-0 px-0 sm:-mx-5 sm:px-5 md:-mx-0 md:px-0 sm:bg-white dark:sm:bg-gray-950/50 md:bg-gray-100 dark:md:bg-gray-800">
          <div className="h-full -mx-5 md:-mx-8 lg:-mx-12 col-span-3 sm:col-span-1 md:col-span-3">
            <img
              src={matHeadshot}
              className="h-full object-cover inline-block sm:rounded-r-2xl lg:rounded-2xl w-full shadow-2xl shadow-custom-light/50 dark:shadow-2lg dark:shadow-custom-dark/50"
              alt="Mat Ruff photo"
            />
          </div>
          <p className="py-0 sm:py-10 md:py-0 mt-10 sm:mt-0 md:mt-10 col-span-3 sm:col-span-2 md:col-span-3 font-semibold text-xl md:text-lg lg:text-xl text-balance leading-relaxed text-gray-700 dark:text-gray-300">
            {data.description}
          </p>
        </div>
        {data.salesforceCertifications && (
          <>
            <div className="header-title py-2.5 my-6">
              <h3 className="text-xl font-medium text-left">
                My Salesforce Certifications
              </h3>
            </div>
            <ul className="mt-4 ml-2 space-y-1 space-x-2 list-disc">
              {data.salesforceCertifications.map((certification, index) => (
                <li key={index} className="ml-2">
                  {certification}
                </li>
              ))}
            </ul>
          </>
        )}
        {data.capabilities && (
          <>
            <div className="header-title py-2.5 my-6">
              <h3 className="text-xl font-medium text-left">
                Skills &amp; Expertise
              </h3>
            </div>
            <ul className="mt-4 ml-2 space-y-1 space-x-2 list-disc">
              {data.capabilities.map((capability, index) => (
                <li key={index} className="ml-2">
                  {capability}
                </li>
              ))}
            </ul>
          </>
        )}
        {data.tools && (
          <>
            <div className="header-title py-2.5 my-6">
              <h3 className="text-xl font-medium text-left">Tools I Use</h3>
            </div>
            <ul className="mt-4 ml-2 space-y-1 space-x-2 list-disc">
              {data.tools.map((tool, index) => (
                <li key={index} className="ml-2">
                  {tool}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="header-title py-2.5 my-6">
          <h3 className="text-xl font-medium text-left">
            My Contact and Links
          </h3>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-5">
            <box-icon
              name="envelope"
              color="#0B979E"
              className="inline dark:hidden"
            ></box-icon>
            <box-icon
              name="envelope"
              color="#38B2AC"
              className="hidden dark:inline"
            ></box-icon>
            <a
              href="mailto:mathew.ruff@gmail.com"
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
            >
              mathew.ruff@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <box-icon
              name="github"
              type="logo"
              color="#0B979E"
              className="inline dark:hidden"
            ></box-icon>
            <box-icon
              name="github"
              type="logo"
              color="#38B2AC"
              className="hidden dark:inline"
            ></box-icon>
            <a
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
              href="https://github.com/meruff"
            >
              github.com/meruff
            </a>
          </div>
          <div className="flex items-center gap-5">
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#0B979E"
              className="inline dark:hidden"
            ></box-icon>
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#38B2AC"
              className="hidden dark:inline"
            ></box-icon>
            <a
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
              href="https://linkedin.com/in/mathewruff"
            >
              linkedin.com/in/mathewruff
            </a>
          </div>
          <div className="flex items-center gap-5">
            <box-icon
              name="cloud"
              type="solid"
              color="#0B979E"
              className="inline dark:hidden"
            ></box-icon>
            <box-icon
              name="cloud"
              type="solid"
              color="#38B2AC"
              className="hidden dark:inline"
            ></box-icon>
            <a
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
              href="https://trailblazer.me/id/matruff"
            >
              trailblazer.me/id/matruff
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
