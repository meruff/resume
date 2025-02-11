import matHeadshot from "./assets/mat-headshot.png";

export default function Info({ data }) {
  if (!data) return null;

  return (
    <>
      <div className="bg-gray-100 p-5 text-left dark:bg-gray-800 md:col-span-4 lg:p-14">
        <h1 className="leading-tighter mt-5 text-4xl font-extrabold lg:text-6xl">
          {data.firstName}
          <br />
          {data.lastName}
        </h1>
        <h2 className="mt-3 text-xl font-bold text-custom-light dark:text-custom-dark">
          {data.title}
        </h2>
        <h3 className="text-xl text-custom-light dark:text-custom-dark">
          &#64;{" "}
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
        <div className="-mx-5 mt-10 lg:-mx-16">
          <img
            src={matHeadshot}
            className="inline-block lg:rounded-2xl w-full"
            alt="Mat Ruff photo"
          />
        </div>
        <p className="mt-10 text-lg text-balance leading-relaxed text-gray-700 dark:text-gray-300">
          {data.description}
        </p>
        {data.salesforceCertifications && (
          <>
            <div className="header-title py-2.5 my-6">
              <h3 className="text-xl font-medium text-left">
                Salesforce Certifications
              </h3>
            </div>
            <ul className="mt-4 space-y-1 space-x-2 list-disc">
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
              <h3 className="text-xl font-medium text-left">Capabilities</h3>
            </div>
            <ul className="mt-4 space-y-1 space-x-2 list-disc">
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
            <ul className="mt-4 space-y-1 space-x-2 list-disc">
              {data.tools.map((tool, index) => (
                <li key={index} className="ml-2">
                  {tool}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="header-title py-2.5 my-6">
          <h3 className="text-xl font-medium text-left">Contact + Links</h3>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-5">
            <box-icon
              name="map"
              color="#0B979E"
              className="inline dark:hidden"
            ></box-icon>
            <box-icon
              name="map"
              color="#38B2AC"
              className="hidden dark:inline"
            ></box-icon>
            <span className="truncate font-medium">Phoenix, AZ</span>
          </div>
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
