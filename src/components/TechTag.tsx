import "./TechTag.css";

function TechTag({ tech }: { tech: string }) {
  let src: string = "./src/assets/img/logo/";
  switch (tech) {
    case "javascript":
      src += "javascript-logo.svg";
      break;
    case "typescript":
      src += "typescript-logo.svg";
      break;
    case "react":
      src += "react-icon.svg";
      break;
  }

  return <img src={src} className="tag" />;
}

export default TechTag;
