import "./styles/hero-styles.css";

function Hero() {
  const scrollToAppointmentSection = () => {
    const appointmentSection = document.getElementById("book-apt");

    appointmentSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="container-one">
        <div className="left">
          <img src="./smokin.png" width={600} height={450} alt="smokin" />
        </div>
        <div className="right">
          <div className="text-one">YOUR NEW FAVORITE TATTOO ARTIST.</div>
          <button className="button-one" onClick={scrollToAppointmentSection}>
            GET INK BAPTIZED
          </button>
        </div>
      </div>
      <section id="#book-apt"></section>
    </>
  );
}

export default Hero;
