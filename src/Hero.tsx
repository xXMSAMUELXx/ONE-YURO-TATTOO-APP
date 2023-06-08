import "./styles/hero-styles.css";

function Hero() {
  return (
    <>
      <div className="hero-img">
        <img src="./smokin.png" width={600} height={450} alt={"smokin"} />
      </div>
      <div className="intro">
        <h1>YOUR NEW FAVORITE TATTOO ARTIST.</h1>
        <button type="button">GET INK BAPTIZED</button>
      </div>
    </>
  );
}

export default Hero;
