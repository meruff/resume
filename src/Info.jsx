import { useEffect, useState } from "react";
import matHeadshot from "./assets/mat-headshot.png";
import BoxIcon from "./components/ui/BoxIcon";
import StickyHeader from "./components/ui/StickyHeader";

export default function Info({ data }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!data) return null;

  return (
    <>
      <StickyHeader data={data} isScrolled={isScrolled} />
      <div className="bg-gradient-to-br from-gray-100 via-custom-light/10 to-gray-200 p-5 text-left shadow-lg md:col-span-4 lg:p-10 dark:from-gray-800 dark:via-custom-dark/10 dark:to-gray-900">
        <h1 className="leading-tighter mt-2 text-4xl font-extrabold lg:text-6xl">
          {data.firstName} {data.lastName}
        </h1>
        <h2 className="mt-3 text-xl font-bold text-custom-light dark:text-custom-dark">
          {data.title}
        </h2>
        <h3 className="mt-1 flex items-center gap-1 text-xl text-custom-light dark:text-custom-dark">
          <BoxIcon name="buildings" />
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
        <div className="xs:bg-transparent dark:xs:bg-transparent -mx-0 mt-10 grid grid-cols-2 items-center gap-0 px-0 sm:-mx-5 sm:grid-cols-3 sm:gap-10 sm:bg-white sm:px-5 sm:shadow-2xl sm:shadow-custom-light/50 md:-mx-0 md:grid-cols-2 md:gap-0 md:bg-transparent md:px-0 md:shadow-none dark:sm:bg-gray-950/50 dark:sm:shadow-2xl dark:sm:shadow-custom-dark/50 dark:md:bg-transparent dark:md:shadow-none">
          <div className="col-span-3 -mx-5 h-full p-5 pt-0 sm:col-span-1 sm:p-0 md:col-span-3 md:-mx-8 lg:-mx-12">
            <img
              src={matHeadshot}
              className="inline-block h-full w-full rounded-2xl object-cover shadow-2xl shadow-custom-light/50 sm:rounded-l-none sm:rounded-r-2xl lg:rounded-2xl dark:shadow-2xl dark:shadow-custom-dark/50"
              alt="Mat Ruff photo"
            />
          </div>
          <p
            id="description"
            className="col-span-3 mt-10 text-balance py-0 text-xl font-semibold leading-relaxed text-gray-700 sm:col-span-2 sm:mt-0 sm:py-10 md:col-span-3 md:mt-10 md:py-0 md:text-lg lg:text-xl dark:text-gray-300"
          >
            {data.description}
          </p>
        </div>
        {data.salesforceCertifications && (
          <>
            <div className="header-title my-6 py-2.5">
              <h3 className="text-left text-xl font-medium">
                Salesforce Certifications
              </h3>
            </div>
            <ul className="ml-2 mt-4 list-disc space-x-2 space-y-1">
              {data.salesforceCertifications.map((certification) => (
                <li key={certification} className="ml-2">
                  {certification}
                </li>
              ))}
            </ul>
          </>
        )}
        {data.capabilities && (
          <>
            <div className="header-title my-6 py-2.5">
              <h3 className="text-left text-xl font-medium">
                Skills &amp; Expertise
              </h3>
            </div>
            <ul className="ml-2 mt-4 list-disc space-x-2 space-y-1">
              {data.capabilities.map((capability) => (
                <li key={capability} className="ml-2">
                  {capability}
                </li>
              ))}
            </ul>
          </>
        )}
        {data.tools && (
          <>
            <div className="header-title my-6 py-2.5">
              <h3 className="text-left text-xl font-medium">Tools I Use</h3>
            </div>
            <ul className="ml-2 mt-4 list-disc space-x-2 space-y-1">
              {data.tools.map((tool, index) => (
                <li key={index} className="ml-2">
                  {tool}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="header-title my-6 py-2.5">
          <h3 className="text-left text-xl font-medium">Contact and Links</h3>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-5">
            <BoxIcon name="envelope" />
            <a
              href="mailto:mathew.ruff@gmail.com"
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
            >
              mathew.ruff@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <BoxIcon name="github" type="logo" />
            <a
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
              href="https://github.com/meruff"
            >
              github.com/meruff
            </a>
          </div>
          <div className="flex items-center gap-5">
            <BoxIcon name="linkedin-square" type="logo" />
            <a
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
              href="https://linkedin.com/in/mathewruff"
            >
              linkedin.com/in/mathewruff
            </a>
          </div>
          <div className="flex items-center gap-5">
            <BoxIcon name="cloud" type="solid" />
            <a
              className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75"
              href="https://trailblazer.me/id/matruff"
            >
              trailblazer.me/id/matruff
            </a>
          </div>
        </div>
        <div className="mt-10">
          <a
            href="/Mathew_Ruff_Resume.pdf"
            download="Mathew_Ruff_Resume.pdf"
            className="inline-flex items-center rounded-lg bg-custom-light px-6 py-3 text-white shadow-md hover:bg-custom-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-custom-light focus:ring-opacity-75 dark:bg-custom-dark dark:text-gray-900 dark:hover:bg-custom-light dark:hover:text-gray-900"
          >
            <BoxIcon
              name="file-pdf"
              type="solid"
              colorLight="#fff"
              colorDark="#111827"
              additionalClasses="mr-2"
            />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
