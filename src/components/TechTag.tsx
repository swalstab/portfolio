import javascriptLogo from "../assets/img/icon/javascript-logo.svg";
import typescriptLogo from "../assets/img/icon/typescript-logo.svg";
import reactIcon from "../assets/img/icon/react-icon.svg";

import "./TechTag.css";

function TechTag({ tech }: { tech: string }) {
  let src: string = "";
  switch (tech) {
    case "javascript":
      src = javascriptLogo;
      break;
    case "typescript":
      src = typescriptLogo;
      break;
    case "react":
      src = reactIcon;
      break;
  }

  return (
    <img
      src={src}
      className="tag"
      alt={`${tech.slice(0, 1).toUpperCase() + tech.slice(1)} Icon`}
      draggable="false"
    />
  );
}

export default TechTag;
