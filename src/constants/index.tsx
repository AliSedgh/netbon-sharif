import Earth from "../components/svgs/Earth";
import Upload from "../components/svgs/Upload";

const DetectStyleBaseType = {
  domain: { style: "domain", text: "Domains", icon: <Earth /> },
  ip: { style: "ip", text: "Ip Addresses", icon: <Earth /> },
  cloud: { style: "cloud", text: "Cloud Accounts ", icon: <Upload /> },
};

export { DetectStyleBaseType };
