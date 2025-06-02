import meImage from "../assets/img/about/me.webp";
import laptopIamge from "../assets/img/about/laptop.webp";
import shoesIamge from "../assets/img/about/shoes.webp";
import locationIcon from "../assets/img/icon/location.svg";

import "./AboutPage.css";
import { useState } from "react";

type Language = "german" | "spanish" | "english";
interface AboutContent {
  descriptionBeforeCoding: string;
  descriptionCoding: string;
  descriptionAfterCoding: string;
  descriptionBeforeRunning: string;
  descriptionRunning: string;
  descriptionAfterRunning: string;
  location: string;
  locationRunning: string;
}

type Image = "initial" | "laptop" | "shoes";
interface VisibilityStyle {
  opacity: "0" | "1";
  pointerEvents: "auto" | "none";
  visibility: "visible" | "hidden";
}

const styleVisible: VisibilityStyle = {
  opacity: "1",
  pointerEvents: "auto",
  visibility: "visible",
};
const styleHidden: VisibilityStyle = {
  opacity: "0",
  pointerEvents: "none",
  visibility: "hidden",
};

const markup: Map<Language, AboutContent> = new Map();
markup
  .set("english", {
    descriptionBeforeCoding: `I’m Stefanie Walstab, a frontend developer
     from Germany with an unusual path into tech: I started in civil 
     engineering, building complex BIM models. Along the way, I fell in 
     love with `,
    descriptionCoding: `coding`,
    descriptionAfterCoding: ` and decided to make it my new career.`,
    descriptionBeforeRunning: `When I’m not coding, you’ll probably find me `,
    descriptionRunning: `running`,
    descriptionAfterRunning: `. I’m fascinated by the challenge of 
      marathons and ultramarathons, and I love pushing my limits, both on 
      the road and in code.`,
    location: "Dresden, Germany",
    locationRunning: `All over the world`,
  })
  .set("german", {
    descriptionBeforeCoding: `Ich bin Stefanie Walstab, eine 
      Frontend-Entwicklerin aus Deutschland. Ursprünglich komme ich aus 
      dem Bauingenieurwesen, wo ich komplexe BIM-Modelle erstellt habe. 
      Dabei habe ich meine Begeisterung fürs `,
    descriptionCoding: `Programmieren`,
    descriptionAfterCoding: ` entdeckt und beschlossen, daraus meinen 
      neuen Beruf zu machen.`,
    descriptionBeforeRunning: `Wenn ich nicht gerade programmiere, findet 
      man mich wahrscheinlich beim `,
    descriptionRunning: `Laufen`,
    descriptionAfterRunning: `. Besonders Marathons und Ultramarathons 
      haben es mir angetan. Es fasziniert mich, meine Grenzen 
      auszutesten, sowohl auf der Laufstrecke als auch im Code.`,
    location: "Dresden, Deutschland",
    locationRunning: `Auf der ganzen Welt`,
  })
  .set("spanish", {
    descriptionBeforeCoding: `Soy Stefanie Walstab, una desarrolladora 
      frontend de Alemania con un camino poco habitual en la informática: 
      comencé en la ingeniería civil, creando modelos BIM complejos. En el 
      camino, descubrí mi interés por la `,
    descriptionCoding: `programación`,
    descriptionAfterCoding: ` y decidí convertirla en mi nueva carrera.`,
    descriptionBeforeRunning: `Cuando no estoy programando, probablemente 
      estoy `,
    descriptionRunning: `corriendo`,
    descriptionAfterRunning: `. Me fascinan especialmente los maratones 
      y ultramaratones y me encanta superar mis límites, tanto en la 
      carretera como en el código.`,
    location: "Dresde, Alemania",
    locationRunning: `En todo el mundo`,
  });

function AboutPage() {
  const [language, setLanguage] = useState<Language>("english");
  const [displayedImg, setDisplayedImg] = useState<Image>("initial");
  const [tempDisplayedImg, setTempDisplayedImg] = useState<Image>("initial");

  const laptopImgStyle: VisibilityStyle =
    tempDisplayedImg === "laptop" ? styleVisible : styleHidden;
  const shoesImgStyle: VisibilityStyle =
    tempDisplayedImg === "shoes" ? styleVisible : styleHidden;

  const setInitialImg = function () {
    setDisplayedImg("initial");
    setTempDisplayedImg("initial");
  };

  return (
    <main className="about">
      <section className="container grid about-content">
        <div className="about-content--portrait">
          <img
            className="about-img"
            src={meImage}
            alt="cartoon profile picture"
            draggable="false"
          />
          <img
            className="about-img laptop"
            src={laptopIamge}
            alt="cartoon laptop"
            style={laptopImgStyle}
            draggable="false"
          />
          <img
            className="about-img shoes"
            src={shoesIamge}
            alt="cartoon running shoes"
            style={shoesImgStyle}
            draggable="false"
          />
        </div>
        <div className="about-content--text">
          <h2 className="about-heading">
            <span
              className={language === "german" ? "active-language" : ""}
              onClick={() => setLanguage("german")}
            >
              Hallo
            </span>
            <span className="padding-r">,</span>
            <span
              className={language === "spanish" ? "active-language" : ""}
              onClick={() => setLanguage("spanish")}
            >
              Hola
            </span>
            <span className="padding-r">,</span>
            <span
              className={language === "english" ? "active-language" : ""}
              onClick={() => setLanguage("english")}
            >
              Hello
            </span>
          </h2>

          <p className="about-description">
            <span onClick={setInitialImg}>
              {markup.get(language)?.descriptionBeforeCoding}
            </span>
            <span
              className="highlight"
              onClick={() => setDisplayedImg("laptop")}
              onMouseOver={() => setTempDisplayedImg("laptop")}
              onMouseOut={() => setTempDisplayedImg(displayedImg)}
            >
              {markup.get(language)?.descriptionCoding}
            </span>
            <span onClick={setInitialImg}>
              {markup.get(language)?.descriptionAfterCoding}
            </span>
            <br />
            <span onClick={setInitialImg}>
              {markup.get(language)?.descriptionBeforeRunning}
            </span>
            <span
              className="highlight"
              onClick={() => setDisplayedImg("shoes")}
              onMouseOver={() => setTempDisplayedImg("shoes")}
              onMouseOut={() => setTempDisplayedImg(displayedImg)}
            >
              {markup.get(language)?.descriptionRunning}
            </span>
            <span onClick={setInitialImg}>
              {markup.get(language)?.descriptionAfterRunning}
            </span>
          </p>

          <div className="about-location">
            <img
              className="location-icon"
              src={locationIcon}
              alt="icon location"
              draggable="false"
            />
            <p>
              {tempDisplayedImg === "shoes"
                ? markup.get(language)?.locationRunning
                : markup.get(language)?.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
