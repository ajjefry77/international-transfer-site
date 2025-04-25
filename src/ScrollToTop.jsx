import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <motion.button
        onClick={scrollToTop}
        className=" tw-fixed tw-bottom-6 tw-left-7 tw-bg-[#a30a238e] tw-text-white tw-p-4 tw-rounded-full tw-shadow-xl tw-z-[1000] tw-transition-colors"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          width="70"
          height="70"
          className="tw-absolute tw-top-[-9px] tw-left-[-20px]"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="40"
            cy="41"
            r="25"
            stroke="#a30a23"
            strokeWidth="4"
            fill="none"
            strokeDasharray="188.49556"
            strokeDashoffset={188.49556 - (scrollProgress / 100) * 188.49556}
            className="tw-transition-all tw-duration-300 tw-ease-out"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="m-0"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-dasharray="12"
            stroke-dashoffset="12"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8l-7 7M12 8l7 7"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="12;0"
            />
          </path>
        </svg>
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
