import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about">
      <section className="container grid about-content">
        <div className="about-content--portrait">
          <img
            className="about-img"
            src="./src/assets/img/about/me.png"
            alt="cartoon profile picture"
            draggable="false"
          />
          <img
            className="about-img laptop"
            src="./src/assets/img/about/laptop.png"
            alt="cartoon laptop"
            draggable="false"
          />
        </div>
        <div className="about-content--text">
          <div className="container--about-heading">
            <h2 className="about-heading">Hallo,</h2>
            <h2 className="about-heading">Hola,</h2>
            <h2 className="about-heading active-language">Hello</h2>
          </div>

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
              src="./src/assets/img/icon/location.svg"
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
