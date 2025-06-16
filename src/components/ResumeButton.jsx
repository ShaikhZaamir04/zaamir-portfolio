import ReactGA from "react-ga4";

const handleResumeDownload = () => {
  ReactGA.event({
    category: "Resume",
    action: "Download",
    label: "Resume Download Click",
  });
};
