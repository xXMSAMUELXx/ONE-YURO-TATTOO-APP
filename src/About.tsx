import "./styles/about-styles.css";

function About() {
  return (
    <div className="aboutContainer">
      <h1 id="about-section" className="title">
        BORN FROM A NECESSITY TO EXPRESS HIMSELF.
      </h1>

      <img
        className="aboutImage"
        src="./about-img.png"
        width={300}
        height={400}
        alt={"image"}
      />
      <p className="caption">
        ONE YURO began as a political and artistic outlet-- tagging alleyways &
        business fronts on the mean streets of Athens, Greece. After earning his
        Masters Degree at the Athens School of Fine Arts, ONE YURO has brought
        his talents with him to Appleton, WI., adopting human skin as his
        preffered canvas.
      </p>

      <p className="caption-two">
        Heavily influenced by his friends, skateboarding and graffti; ONE YURO's
        meticulously curated style is a lifetime in the making. Always sported
        with a pen and notepad; ONE YURO needs to create. It's (probably) in his
        DNA. With ONE YURO, expect a World-Class Tattoo that cannot be
        replicated or verbally described.
      </p>
    </div>
  );
}

export default About;
