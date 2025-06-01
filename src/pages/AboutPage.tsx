import meImage from "../assets/img/about/me.webp";
import laptopIamge from "../assets/img/about/laptop.webp";
import shoesIamge from "../assets/img/about/shoes.webp";
import locationIcon from "../assets/img/icon/location.svg";

import "./AboutPage.css";

function AboutPage() {
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
            <span className="">Hallo,</span>
            <span className="">Hola,</span>
            <span className="active-language">Hello</span>
          </h2>

          <p className="about-description">
            I’m Stefanie Walstab, a frontend developer from Germany with an
            unusual path into tech: I started in civil engineering, building
            detailed BIM models. Along the way, I fell in love with{" "}
            <span className="highlight">coding</span> and decided to make it my
            new career.
            <br></br>
            When I’m not coding, you’ll probably find me{" "}
            <span className="highlight">running</span>—long distances,
            preferably. I’m fascinated by the challenge of marathons and
            ultramarathons, and I love pushing my limits, both on the road and
            in code.
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
