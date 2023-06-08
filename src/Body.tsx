import "./styles/body-styles.css";

function Body() {
  return (
    <>
      <div className="dudes-img">
        <img src="./unlucky.png" width={500} height={400} alt={"smokin"} />
      </div>
      <div className="athens">
        <h1>FROM THE ATHENS SCHOOL OF FINE ARTS.</h1>
        <button className="dudesbtn" type="button">
          SEE THE FLASH
        </button>
      </div>
    </>
  );
}

export default Body;
