import "./styles/hero-styles-two.css";

const scrollToFlashSection = () => {
  const flashSection = document.getElementById("flash-section");

  const offsetTop = 20;
  const elementPosition = flashSection.offsetTop - offsetTop;
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
};

function HeroTwo() {
  return (
    <>
      <div className="container-two">
        <div className="left-two">
          <div className="text-two">FROM THE ATHENS SCHOOL OF FINE ARTS</div>
          <button className="button-two" onClick={scrollToFlashSection}>
            SEE THE FLASH
          </button>
        </div>
        <div className="right-two">
          <img src="./unlucky.png" width={600} height={450} alt="unlucky" />
        </div>
      </div>
      <section id="#flash-section"></section>
    </>
  );
}

export default HeroTwo;
