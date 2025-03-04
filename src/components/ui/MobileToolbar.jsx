import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import BoxIcon from "./BoxIcon";

export default function MobileToolbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleScroll = useCallback(() => {
    if (!isLinkClicked) {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, isLinkClicked]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, handleScroll]);

  const handleLinkClick = () => {
    setIsLinkClicked(true);
    setTimeout(() => {
      setIsLinkClicked(false);
    }, 1000);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800 shadow-lg sm:hidden transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      <div className="flex justify-around py-2">
        <Link
          to="description"
          smooth={true}
          duration={500}
          offset={-56}
          className="flex flex-col items-center"
          onClick={handleLinkClick}
        >
          <BoxIcon name="info-circle" />
          <span className="text-xs text-gray-700 dark:text-gray-300">Info</span>
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={500}
          offset={-56}
          className="flex flex-col items-center"
          onClick={handleLinkClick}
        >
          <BoxIcon name="briefcase" />
          <span className="text-xs text-gray-700 dark:text-gray-300">Work</span>
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-56}
          className="flex flex-col items-center"
          onClick={handleLinkClick}
        >
          <BoxIcon name="school" type="solid" />
          <span className="text-xs text-gray-700 dark:text-gray-300">
            Education
          </span>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-56}
          className="flex flex-col items-center"
          onClick={handleLinkClick}
        >
          <BoxIcon name="git-repo-forked" />
          <span className="text-xs text-gray-700 dark:text-gray-300">
            Projects
          </span>
        </Link>
      </div>
    </div>
  );
}
