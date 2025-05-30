import "./TechTag.css";

function TechTag({ tech }: { tech: string }) {
  let src: string = "./src/assets/img/icon/";
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
