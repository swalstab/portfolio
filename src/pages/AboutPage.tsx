import meImage from "../assets/img/about/me.webp";
import laptopIamge from "../assets/img/about/laptop.webp";
import shoesIamge from "../assets/img/about/shoes.webp";
import locationIcon from "../assets/img/icon/location.svg";

import "./AboutPage.css";
import HTMLReactParser from "html-react-parser/lib/index";
import { useState } from "react";

type Language = "german" | "spanish" | "english";

const markup: Map<Language, string> = new Map();
markup
  .set(
    "english",
    `I’m Stefanie Walstab, a frontend developer from Germany with an
    unusual path into tech: I started in civil engineering, building
    detailed BIM models. Along the way, I fell in love with
    <span className="highlight">coding</span> and decided to make it my
    new career.
    <br />
    When I’m not coding, you’ll probably find me
    <span className="highlight">running</span>. I’m fascinated by the 
    challenge of marathons and ultramarathons, and I love pushing my limits, 
    both on the road and in code.`
  )
  .set(
    "german",
    `Ich bin Stefanie Walstab, eine Frontend-Entwicklerin aus Deutschland. 
    Ursprünglich komme ich aus dem Bauingenieurwesen, wo ich mehrere 
    Jahre lang komplexe BIM-Modelle erstellt habe. Dabei habe ich meine 
    Begeisterung fürs <span className="highlight">Programmieren</span> 
    entdeckt und mich entschieden, beruflich einen neuen Weg zu gehen.
    <br />
    Wenn ich nicht gerade code, bin ich wahrscheinlich irgendwo beim 
    <span className="highlight">Laufen</span>. Besonders Marathons und 
    Ultramarathons haben es mir angetan. Es fasziniert mich, meine Grenzen 
    auszutesten, sowohl auf der Strecke als auch im Code.`
  )
  .set(
    "spanish",
    `Soy Stefanie Walstab, una desarrolladora frontend de Alemania. Originalmente 
    trabajé en el campo de la ingeniería civil, donde pasé varios años 
    creando modelos BIM complejos. Durante ese tiempo descubrí mi interés 
    por la <span className="highlight">programación</span> y decidí 
    cambiar de rumbo profesional.
    <br />
    Cuando no estoy programando, probablemente estoy 
    <span className="highlight">corriendo</span>. Me atraen especialmente 
    los maratones y ultramaratones. Me motiva poner a prueba mis límites, 
    tanto en la pista como en el código.`
  );

function AboutPage() {
  const [language, setLanguage] = useState<Language>("english");

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
            draggable="false"
          />
          <img
            className="about-img shoes"
            src={shoesIamge}
            alt="cartoon running shoes"
            draggable="false"
          />
        </div>
        <div className="about-content--text">
          <h2 className="about-heading">
            <span className="" onMouseOver={() => setLanguage("german")}>
              Hallo,
            </span>
            <span className="" onMouseOver={() => setLanguage("spanish")}>
              Hola,
            </span>
            <span
              className="active-language"
              onMouseOver={() => setLanguage("english")}
            >
              Hello
            </span>
          </h2>

          <p className="about-description">
            {HTMLReactParser(markup.get(language)!)}
          </p>

          <div className="about-location">
            <img
              className="location-icon"
              src={locationIcon}
              alt="icon location"
              draggable="false"
            />
            <p>Dresden, Germany</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
